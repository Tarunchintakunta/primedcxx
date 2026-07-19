#!/bin/zsh
# Rebuild the scroll-film frame sequence from public/assets/clip1-5.mp4
set -e
cd "$(dirname "$0")/../public"
LIST=$(mktemp)
mkdir -p assets/norm
for i in 1 2 3 4 5; do
  ffmpeg -y -i "assets/clip$i.mp4" -vf "scale=1920:1080:flags=lanczos,fps=24" -an \
    -c:v libx264 -preset fast -crf 17 -pix_fmt yuv420p "assets/norm/clip$i.mp4" </dev/null
  echo "file '$PWD/assets/norm/clip$i.mp4'" >> "$LIST"
done
ffmpeg -y -f concat -safe 0 -i "$LIST" -c copy assets/master.mp4 </dev/null
rm -rf frames && mkdir -p frames
ffmpeg -y -i assets/master.mp4 -vf "fps=15,scale=1536:864:flags=lanczos" -qscale:v 3 "frames/f_%04d.jpg" </dev/null
COUNT=$(ls frames | wc -l | tr -d ' ')
echo "{ \"count\": $COUNT, \"path\": \"frames/f_\", \"pad\": 4, \"ext\": \"jpg\" }" > manifest.json
rm -rf assets/norm
echo "frames: $COUNT"
