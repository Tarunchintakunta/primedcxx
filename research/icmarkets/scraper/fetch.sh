#!/bin/sh
u="$1"
name=$(printf "%s" "$u" | sed -e "s|https://www.ic.com/||" -e "s|/$||" -e "s|/|__|g")
[ -z "$name" ] && name="index"
curl -sL --max-time 45 \
  -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" \
  "$u" -o "raw/$name.html"
