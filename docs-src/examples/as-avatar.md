---
layout: example.11ty.cjs
title: <as-avatar> ⌲ Examples
tags: example
name: Avatar
description: <as-avatar> content priority, variants and sizes
---

<h3>Photo</h3>

<as-avatar src="https://i.pravatar.cc/150?img=1" name="Jane Doe" size="xl"></as-avatar>

```html
<as-avatar src="https://i.pravatar.cc/150?img=1" name="Jane Doe" size="xl"></as-avatar>
```

<h3>Initials from name</h3>

<as-avatar name="Jane Doe"></as-avatar>
<as-avatar name="John Smith"></as-avatar>

```html
<as-avatar name="Jane Doe"></as-avatar>
<as-avatar name="John Smith"></as-avatar>
```

<h3>Custom slot content</h3>

<as-avatar>AB</as-avatar>

```html
<as-avatar>AB</as-avatar>
```

<h3>Silhouette fallback</h3>

<as-avatar></as-avatar>

```html
<as-avatar></as-avatar>
```

<h3>Variants</h3>

<as-avatar name="Jane Doe" variant="circle" size="xl"></as-avatar>
<as-avatar name="Jane Doe" variant="square" size="xl"></as-avatar>

```html
<as-avatar name="Jane Doe" variant="circle" size="xl"></as-avatar>
<as-avatar name="Jane Doe" variant="square" size="xl"></as-avatar>
```

<h3>Sizes</h3>

<as-avatar name="Jane Doe" size="m"></as-avatar>
<as-avatar name="Jane Doe" size="l"></as-avatar>
<as-avatar name="Jane Doe" size="xl"></as-avatar>
<as-avatar name="Jane Doe" size="xxl"></as-avatar>
<as-avatar name="Jane Doe" size="xxxl"></as-avatar>

```html
<as-avatar name="Jane Doe" size="m"></as-avatar>
<as-avatar name="Jane Doe" size="l"></as-avatar>
<as-avatar name="Jane Doe" size="xl"></as-avatar>
<as-avatar name="Jane Doe" size="xxl"></as-avatar>
<as-avatar name="Jane Doe" size="xxxl"></as-avatar>
```

<h3>Custom accent color</h3>

<as-avatar name="Jane Doe" accent="#e63946" size="xl"></as-avatar>
<as-avatar name="John Smith" accent="#2a9d8f" size="xl"></as-avatar>

```html
<as-avatar name="Jane Doe" accent="#e63946" size="xl"></as-avatar>
<as-avatar name="John Smith" accent="#2a9d8f" size="xl"></as-avatar>
```
