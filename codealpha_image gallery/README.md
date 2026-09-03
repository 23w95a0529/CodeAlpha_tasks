# Field Notes — Image Gallery

A responsive image gallery built with plain HTML, CSS, and JavaScript. Features a masonry-style grid, category filtering, and a full lightbox viewer with keyboard, click, and swipe navigation.

## Demo

Open `index.html` in any modern browser, or enable GitHub Pages on this repo to view it live.

## Features

- **Masonry grid layout** using CSS columns, responsive from 3 columns down to 1 on mobile
- **Category filters** — All, Landscape, Street, Portrait, Architecture
- **Lightbox view** — click any image to open it full size
  - Next / previous buttons
  - Keyboard support: `←` `→` to navigate, `Esc` to close
  - Touch swipe support on mobile
  - Image counter (e.g. `3 / 12`)
- **Hover effects** — image zoom and caption reveal on desktop
- **Smooth transitions** on filtering, hover, and lightbox open/close
- **Responsive design** for desktop, tablet, and mobile
- Respects `prefers-reduced-motion` for accessibility
- Visible keyboard focus states

## Project structure

```
image-gallery/
├── index.html      # all HTML, CSS, and JS in a single file
└── README.md
```

## Getting started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/image-gallery.git
   ```
2. Open `index.html` directly in your browser — no build step or dependencies required.

## Customizing

All image data lives in the `photos` array near the top of the `<script>` block in `index.html`:

```js
const photos = [
  { id: 1015, cat: "landscape", title: "River Bend at Dusk", loc: "Fjord Road, Norway" },
  // ...
];
```

- `id` — used to build the image URL (currently pulled from [picsum.photos](https://picsum.photos))
- `cat` — category used for filtering (`landscape`, `street`, `portrait`, `architecture`)
- `title` / `loc` — caption text shown on hover and in the lightbox

To use your own images, replace the `src` in the image template with your own URLs or local file paths, and update the `<button data-filter="...">` elements in the filter nav to match your categories.

## Tech

- HTML5
- CSS3 (custom properties, CSS columns, media queries, `prefers-reduced-motion`)
- Vanilla JavaScript (no frameworks or build tools)
- [Google Fonts](https://fonts.google.com) — Fraunces & Inter
- [picsum.photos](https://picsum.photos) — placeholder images

## License


