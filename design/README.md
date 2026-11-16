# Design sources

The PNGs in `public/` are rendered from these SVGs. After editing one, render it again:

```sh
rsvg-convert design/og-image.svg -o public/og-image.png
rsvg-convert design/apple-touch-icon.svg -o public/apple-touch-icon.png
```

- `og-image.svg`: 1200×630 share preview (WhatsApp, LinkedIn, X…), the NEV logo.
- `apple-touch-icon.svg`: 180×180 iOS home-screen icon, the favicon's N without rounded corners.

The point cloud's source, `public/media/nev-points.png` (greyscale portrait with local contrast and
the background removed with Apple Vision; macOS only):

```sh
swift design/make-points-image.swift ../dive.nevcan.com/source-media/nev-portrait_akin-bagcilar.jpg public/media/nev-points.png 400
```

Density, contrast, colours and motion are tuned at the top of `src/components/PointCloud.astro`.
