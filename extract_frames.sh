#!/bin/zsh
# Concatenate clip1..clip5 and extract the scroll-scrub frame sequence.
set -e
cd "$(dirname "$0")"

LIST=$(mktemp)
for i in 1 2 3 4 5; do
  [ -f "assets/clip$i.mp4" ] && echo "file '$PWD/assets/clip$i.mp4'" >> "$LIST"
done
cat "$LIST"

# normalize each clip to same codec/fps/size first (concat demuxer needs matching streams)
mkdir -p assets/norm
: > "$LIST"
for i in 1 2 3 4 5; do
  if [ -f "assets/clip$i.mp4" ]; then
    ffmpeg -y -i "assets/clip$i.mp4" -vf "scale=1920:1080:flags=lanczos,fps=24" -an \
      -c:v libx264 -preset fast -crf 17 -pix_fmt yuv420p "assets/norm/clip$i.mp4" </dev/null
    echo "file '$PWD/assets/norm/clip$i.mp4'" >> "$LIST"
  fi
done

ffmpeg -y -f concat -safe 0 -i "$LIST" -c copy assets/master.mp4 </dev/null

# frames: 15 fps, 1536x864, quality 3 (high)
rm -rf frames && mkdir -p frames
ffmpeg -y -i assets/master.mp4 -vf "fps=15,scale=1536:864:flags=lanczos" -qscale:v 3 "frames/f_%04d.jpg" </dev/null

COUNT=$(ls frames | wc -l | tr -d ' ')
echo "{ \"count\": $COUNT, \"path\": \"frames/f_\", \"pad\": 4, \"ext\": \"jpg\" }" > manifest.json
echo "frames: $COUNT"
du -sh frames
