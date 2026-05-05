---
layout: page.11ty.cjs
title: AS Design System ⌲ Home
---

# AS Design System

A Lit-based design system of web components. All components are framework-agnostic and can be used anywhere HTML runs.

## Components

### &lt;as-button>

Button and link component with three visual variants.

```html
<as-button variant="plain">Save</as-button>
<as-button variant="outlined">Cancel</as-button>
<as-button variant="transparent">Learn more</as-button>
```

[View examples →](/examples/as-button/)

---

### &lt;as-avatar>

Avatar component that renders a photo, initials, slotted content, an icon, or a silhouette placeholder — in that priority order.

```html
<as-avatar name="Jane Doe" size="xl"></as-avatar>
<as-avatar src="photo.jpg" name="Jane Doe" size="xl"></as-avatar>
```

[View examples →](/examples/as-avatar/)

---

### &lt;as-icon>

Icon component driven entirely by CSS custom properties. Supports mask mode (single color) and image mode (original colors).

```html
<as-icon name="arrow-right" size="l"></as-icon>
<as-icon name="arrow-right" size="l" color="#e63946"></as-icon>
```

[View examples →](/examples/as-icon/)
