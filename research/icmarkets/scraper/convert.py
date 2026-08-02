#!/usr/bin/env python3
"""Convert scraped ic.com HTML into clean markdown, preserving real and div-based tables."""
import os, re, json, hashlib
from bs4 import BeautifulSoup, NavigableString, Tag

RAW, OUT = "raw", "md"
os.makedirs(OUT, exist_ok=True)

DROP_TAGS = ["script", "style", "noscript", "svg", "iframe", "form", "template"]
DROP_SEL = [
    "header", "footer", "nav", ".navbar", ".main-nav", ".mega-menu",
    ".site-footer", ".footer", ".cookie", ".cookies", "#cookie", ".modal",
    ".popup", ".breadcrumb", ".risk-warning-bar", ".top-bar",
    ".language-selector", ".back-to-top",
]
# filter-metadata cells that are not real columns
JUNK_CELLS = {"c-true-ecn", "c-standard", "c-all"}
DATA_CELL = re.compile(r"^c\d+$")


def ctext(s):
    return re.sub(r"[ \t]+", " ", str(s).replace("\xa0", " ").replace("​", "")).strip()


def esc(v):
    return v.replace("|", "\\|")


def mdrow(vals):
    return "| " + " | ".join(esc(v) for v in vals) + " |"


def sep(n):
    return "|" + "---|" * n


# ---------- real <table> ----------
def expand(tr):
    """Row cells as text, repeating values across colspan."""
    vals = []
    for c in tr.find_all(["td", "th"]):
        v = ctext(c.get_text(" ", strip=True))
        try:
            span = max(1, int(c.get("colspan", 1)))
        except ValueError:
            span = 1
        vals.extend([v] * span)
    return vals


def merge_headers(rows):
    """Merge stacked header rows column-wise: ['Max Leverage','0-25 Lots'] -> 'Max Leverage 0-25 Lots'."""
    if not rows:
        return None
    n = max(len(r) for r in rows)
    rows = [r + [""] * (n - len(r)) for r in rows]
    out = []
    for i in range(n):
        parts, seen = [], set()
        for r in rows:
            v = r[i].strip()
            if v and v not in seen:
                parts.append(v)
                seen.add(v)
        out.append(" ".join(parts))
    return out


def real_table(t):
    head_rows = [expand(tr) for th in t.find_all("thead") for tr in th.find_all("tr")]
    head_rows = [r for r in head_rows if any(v.strip() for v in r)]
    header = merge_headers(head_rows)

    rows = []
    for tr in t.find_all("tr"):
        if tr.find_parent("thead"):
            continue
        cs = tr.find_all(["td", "th"])
        if not cs:
            continue
        vals = expand(tr)
        if not any(vals):
            continue
        if header is None and all(c.name == "th" for c in cs):
            header = vals
            continue
        rows.append(vals)
    if not rows:
        return ""
    n = max([len(r) for r in rows] + ([len(header)] if header else []))
    rows = [r + [""] * (n - len(r)) for r in rows]
    out = []
    if header:
        header = header + [""] * (n - len(header))
        out += [mdrow(header), sep(n)]
    else:
        out += [mdrow(rows[0]), sep(n)]
        rows = rows[1:]
    out += [mdrow(r) for r in rows]
    return "\n".join(out) + "\n"


# ---------- div-based table ----------
def split_cells(row):
    """Return (data_values, group_value) for a .table-row."""
    cells = [c for c in row.find_all(class_="table-cell")
             if c.find_parent(class_="table-cell") is None]
    data, group = [], None
    for c in cells:
        cls = set(c.get("class") or [])
        val = ctext(c.get_text(" ", strip=True))
        if cls & JUNK_CELLS:
            continue
        if "c-symbol-group" in cls:
            group = val
            continue
        data.append(val)
    return data, group


def build_header(wrap, ncol, has_group):
    hd = wrap.find_previous(class_="column-header")
    names = []
    if hd:
        names = [ctext(d.get_text(" ", strip=True)) for d in hd.find_all(class_="column-name")]
        names = [n for n in names if n]
    if not names:
        return None, hd
    # disambiguate repeated names (MIN/AVG under Raw vs Standard) using .header-bar groups
    if len(names) != len(set(names)):
        bar = wrap.find_previous(class_="header-bar")
        groups = []
        if bar:
            groups = [ctext(d.get_text(" ", strip=True))
                      for d in bar.find_all("div", recursive=False)]
            groups = [g for g in groups if g]
        if len(groups) >= 2:
            seen, first_dup = set(), len(names)
            for i, n in enumerate(names):
                if n in seen:
                    first_dup = min(first_dup, names.index(n))
                    break
                seen.add(n)
            uniq, rest = names[:first_dup], names[first_dup:]
            gs = groups[1:] if len(groups) > 1 else groups
            if gs and len(rest) % len(gs) == 0:
                per = len(rest) // len(gs)
                new = list(uniq)
                for gi, g in enumerate(gs):
                    short = g.replace(" Account", "").strip()
                    for j in range(per):
                        new.append(f"{short} {rest[gi * per + j]}")
                names = new
    if has_group:
        names = names + ["Group"]
    if len(names) != ncol:
        return None, hd
    return names, hd


def div_table(wrap, consumed):
    rows = [r for r in wrap.find_all(class_="table-row")
            if r.find_parent(class_="table-row") is None]
    parsed, groups = [], []
    for r in rows:
        d, g = split_cells(r)
        if not any(d):
            continue
        parsed.append(d)
        groups.append(g)
    if not parsed:
        return "", None
    has_group = any(g for g in groups)
    if has_group:
        parsed = [d + [g or ""] for d, g in zip(parsed, groups)]
    n = max(len(r) for r in parsed)
    parsed = [r + [""] * (n - len(r)) for r in parsed]

    header, hd = build_header(wrap, n, has_group)
    if hd is not None:
        consumed.add(id(hd))
        bar = wrap.find_previous(class_="header-bar")
        if bar is not None:
            consumed.add(id(bar))

    out = []
    if header:
        out += [mdrow(header), sep(n)]
    else:
        out += [mdrow(parsed[0]), sep(n)]
        parsed = parsed[1:]
    out += [mdrow(r) for r in parsed]
    body = "\n".join(out) + "\n"
    fingerprint = hashlib.md5("\n".join(mdrow(r) for r in parsed).encode()).hexdigest()
    label = header[-2] if header and len(header) > 1 else None
    return body, (fingerprint, label)


# ---------- walker ----------
def walk(node, out, ctx):
    for child in node.children:
        if isinstance(child, NavigableString):
            t = ctext(child)
            if not t:
                continue
            # some CMS fields store escaped markup that decodes into literal text
            if ctx["depth"] < 4 and re.search(r"<(section|div|p|h[1-6]|ul|li|table|span)\b[^>]*>", t):
                inner = BeautifulSoup(t, "lxml")
                body = inner.find("body") or inner
                ctx["depth"] += 1
                walk(body, out, ctx)
                ctx["depth"] -= 1
                continue
            out.append(t)
            continue
        if not isinstance(child, Tag):
            continue
        if id(child) in ctx["consumed"]:
            continue
        cls = set(child.get("class") or [])
        name = child.name

        if name == "table":
            md = real_table(child)
            if md:
                out.append("\n" + md)
            continue

        if "table-rows-wrap" in cls:
            md, fp = div_table(child, ctx["consumed"])
            if md and fp and fp[0] not in ctx["seen_tables"]:
                ctx["seen_tables"].add(fp[0])
                out.append("\n" + md)
            continue

        if "column-header" in cls or "header-bar" in cls:
            # header for a table that follows; emitted with the table itself
            nxt = child.find_next(class_="table-rows-wrap")
            if nxt is not None:
                continue

        if name in ("h1", "h2", "h3", "h4", "h5", "h6"):
            t = ctext(child.get_text(" ", strip=True))
            if t:
                out.append("\n" + "#" * min(int(name[1]) + 1, 6) + " " + t + "\n")
            continue

        if name in ("ul", "ol"):
            items = child.find_all("li", recursive=False)
            if items:
                out.append("")
                for i, li in enumerate(items, 1):
                    if li.find(["table", "ul", "ol"]) or li.find(class_="table-rows-wrap"):
                        sub = []
                        walk(li, sub, ctx)
                        t = "\n".join(x for x in sub if x).strip()
                    else:
                        t = ctext(li.get_text(" ", strip=True))
                    if t:
                        out.append(("- " if name == "ul" else f"{i}. ") + t.replace("\n", " "))
                out.append("")
            continue

        if name == "p":
            t = ctext(child.get_text(" ", strip=True))
            if t:
                out.append("\n" + t)
            continue

        if name == "a":
            t = ctext(child.get_text(" ", strip=True))
            href = child.get("href", "")
            if t:
                out.append(f"[{t}]({href})" if href.startswith(("http", "/")) and len(t) < 90 else t)
            continue

        if name == "img":
            alt = ctext(child.get("alt") or "")
            if alt:
                out.append(f"![{alt}]")
            continue

        walk(child, out, ctx)


JUNK_LINE = re.compile(
    r"^(//|<script|<!--|Start of Zowie|End of Zowie|Cross-Domain Tracking|"
    r"Simple Cross-Domain|Simple Registration|!\[Loading\.\.\.\]|gtag\(|window\.|dataLayer)",
    re.I)


def squash(lines):
    text = "\n".join(lines)
    text = re.sub(r"[ \t]+\n", "\n", text)
    text = re.sub(r"\n[ \t]+", "\n", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    out, prev = [], None
    for ln in text.split("\n"):
        if JUNK_LINE.match(ln.strip()):
            continue
        if ln.strip() and ln.strip() == (prev or "").strip() and not ln.startswith("|"):
            continue
        out.append(ln)
        prev = ln
    return re.sub(r"\n{3,}", "\n\n", "\n".join(out)).strip() + "\n"


def convert(path):
    soup = BeautifulSoup(open(path, encoding="utf-8", errors="replace").read(), "lxml")
    title = ctext(soup.title.get_text()) if soup.title else ""
    m = soup.find("meta", attrs={"name": "description"})
    desc = ctext(m["content"]) if m and m.get("content") else ""
    for t in DROP_TAGS:
        for el in soup.find_all(t):
            el.decompose()
    main = soup.find("main") or soup.find("body")
    if main is None:
        return None
    for sel in DROP_SEL:
        for el in main.select(sel):
            el.decompose()
    lines, ctx = [], {"consumed": set(), "seen_tables": set(), "depth": 0}
    walk(main, lines, ctx)
    return title, desc, squash(lines), len(ctx["seen_tables"])


def main():
    index = []
    for fn in sorted(os.listdir(RAW)):
        if not fn.endswith(".html"):
            continue
        res = convert(os.path.join(RAW, fn))
        if not res:
            continue
        title, desc, body, ntab = res
        url = "https://www.ic.com/" + fn[:-5].replace("__", "/")
        head = f"# {title}\n\n**Source:** {url}\n"
        if desc:
            head += f"\n**Meta description:** {desc}\n"
        out_name = fn[:-5] + ".md"
        open(os.path.join(OUT, out_name), "w", encoding="utf-8").write(head + "\n---\n\n" + body)
        index.append({"file": out_name, "title": title, "url": url,
                      "chars": len(body), "tables": ntab})
        print(f"{len(body):8d} {ntab:3d}tbl  {out_name}")
    json.dump(index, open("index.json", "w"), indent=1)


if __name__ == "__main__":
    main()
