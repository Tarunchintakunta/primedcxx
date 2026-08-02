# Re-running the scrape

```bash
mkdir -p raw && xargs -P 8 -n 1 ./fetch.sh < en_urls.txt   # download to raw/
python3 convert.py                                          # raw/*.html -> md/*.md
```

`convert.py` needs `beautifulsoup4` and `lxml`. It preserves real `<table>` elements and ic.com's
CSS-grid "div tables", merges stacked header rows, de-duplicates the desktop/mobile copies of each
table, and strips nav/script boilerplate.

`en_urls.txt` is the 74-URL English page list: 65 from `https://www.ic.com/sitemap.xml` plus 9
mega-menu-only pages. Refresh it from the sitemap if the site structure changes.
