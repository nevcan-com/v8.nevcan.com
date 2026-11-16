# Design sources

The PNGs in `public/` are rendered from these SVGs. After editing one, render it again:

```sh
rsvg-convert design/og-image.svg -o public/og-image.png
rsvg-convert design/apple-touch-icon.svg -o public/apple-touch-icon.png
```

- `og-image.svg`: 1200×630 share preview (WhatsApp, LinkedIn, X…), the NEV logo.
- `apple-touch-icon.svg`: 180×180 iOS home-screen icon, the favicon's N without rounded corners.
