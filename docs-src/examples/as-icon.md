---
layout: example.11ty.cjs
title: <as-icon> ⌲ Examples
tags: example
name: Icon
description: <as-icon> sizes, color, transforms and image mode
---

<h3>Basic usage</h3>

Icons are referenced by name — the component resolves it to the `--as-icon-{name}` CSS custom property.

<as-icon name="arrow-right"></as-icon>

```html
<as-icon name="arrow-right"></as-icon>
```

<h3>Sizes</h3>

<as-icon name="arrow-right" size="s"></as-icon>
<as-icon name="arrow-right" size="m"></as-icon>
<as-icon name="arrow-right" size="l"></as-icon>
<as-icon name="arrow-right" size="xl"></as-icon>
<as-icon name="arrow-right" size="xxl"></as-icon>
<as-icon name="arrow-right" size="xxxl"></as-icon>

```html
<as-icon name="arrow-right" size="s"></as-icon>
<as-icon name="arrow-right" size="m"></as-icon>
<as-icon name="arrow-right" size="l"></as-icon>
<as-icon name="arrow-right" size="xl"></as-icon>
<as-icon name="arrow-right" size="xxl"></as-icon>
<as-icon name="arrow-right" size="xxxl"></as-icon>
```

<h3>Color</h3>

<as-icon name="arrow-right" color="#e63946" size="xl"></as-icon>
<as-icon name="arrow-right" color="#2a9d8f" size="xl"></as-icon>
<as-icon name="arrow-right" color="#f4a261" size="xl"></as-icon>

```html
<as-icon name="arrow-right" color="#e63946" size="xl"></as-icon>
<as-icon name="arrow-right" color="#2a9d8f" size="xl"></as-icon>
<as-icon name="arrow-right" color="#f4a261" size="xl"></as-icon>
```

<h3>Flip</h3>

<as-icon name="arrow-right" size="xl"></as-icon>
<as-icon name="arrow-right" size="xl" flip-x></as-icon>
<as-icon name="arrow-right" size="xl" flip-y></as-icon>
<as-icon name="arrow-right" size="xl" flip-x flip-y></as-icon>

```html
<as-icon name="arrow-right" size="xl"></as-icon>
<as-icon name="arrow-right" size="xl" flip-x></as-icon>
<as-icon name="arrow-right" size="xl" flip-y></as-icon>
<as-icon name="arrow-right" size="xl" flip-x flip-y></as-icon>
```

<h3>Rotate</h3>

<as-icon name="arrow-right" size="xl" rotate="0deg"></as-icon>
<as-icon name="arrow-right" size="xl" rotate="90deg"></as-icon>
<as-icon name="arrow-right" size="xl" rotate="180deg"></as-icon>
<as-icon name="arrow-right" size="xl" rotate="270deg"></as-icon>

```html
<as-icon name="arrow-right" size="xl" rotate="0deg"></as-icon>
<as-icon name="arrow-right" size="xl" rotate="90deg"></as-icon>
<as-icon name="arrow-right" size="xl" rotate="180deg"></as-icon>
<as-icon name="arrow-right" size="xl" rotate="270deg"></as-icon>
```

<h3>Accessible label</h3>

When `label` is set the icon gets `role="img"` and `aria-label`. Without it, it's hidden from assistive technology.

<as-icon name="arrow-right" label="Go to next page" size="xl"></as-icon>

```html
<as-icon name="arrow-right" label="Go to next page" size="xl"></as-icon>
```

<h3>Image mode</h3>

Use `image` to render the SVG via `content` instead of a mask, preserving the original colors baked into the SVG.

<as-icon name="arrow-right" size="xl" image></as-icon>

```html
<as-icon name="arrow-right" size="xl" image></as-icon>
```
