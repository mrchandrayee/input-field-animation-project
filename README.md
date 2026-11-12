# Input Field Animation

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/input-field-animation-project/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A runnable HTML/CSS/JavaScript recreation of the floating-label input demo shown in the supplied video.

## Run locally

No npm packages or build tools are required.

```bash
cd input-field-animation
python -m http.server 8000
```

Open http://localhost:8000 in your browser. You can also open `index.html` directly.

## Project structure

- `index.html` — First Name and Last Name fields
- `style.css` — dark blue background, outlined inputs, animated floating labels and responsive layout
- `script.js` — live name preview and form interaction

## Animation behavior

The label animates upward and receives a cyan highlight when the input is focused or contains a value (`:focus` / `:valid`). The animation uses a 0.5-second CSS transition, matching the visible behavior in the reference.

## Source note

The video includes readable portions of the HTML and CSS, which were used to recreate the core implementation. The complete project includes additional responsive styling and JavaScript preview behavior. It is a reconstruction, not a claim that every line is the creator's verbatim source.
