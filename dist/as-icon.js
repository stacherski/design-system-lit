var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
/**
 * `as-icon` — Icon component for the AS Design System.
 *
 * Renders an SVG icon (stored as a base64 data-URI in a CSS custom property)
 * via the `:host::after` pseudo-element — no child DOM nodes are emitted.
 *
 * In default (mask) mode the icon is painted with a single colour via
 * `mask-image` + `background-color`, matching the original vanilla component.
 * In `image` mode `content: var(--_icon)` is used so the SVG's own colours
 * are preserved.
 *
 * @attr {string}   name   - Icon name (e.g. "pen") or full CSS var ("--as-icon-pen"). Required.
 * @attr {IconSize} size   - xs | s | m | default | l | xl | xxl | xxxl. Defaults to "m".
 * @attr {string}   color  - Any CSS color, hex, or CSS var. Defaults to var(--as-color-text).
 * @attr {string}   label  - Accessible label. Absent → icon hidden from assistive technology.
 * @attr {boolean}  flip-x - Flips icon horizontally.
 * @attr {boolean}  flip-y - Flips icon vertically.
 * @attr {string}   rotate - CSS angle, e.g. "90deg", "0.25turn", "-37deg".
 * @attr {boolean}  image  - Render via `content` instead of mask, preserving original colours.
 */
let AsIcon = class AsIcon extends LitElement {
    constructor() {
        // ── Properties ─────────────────────────────────────────────────────────────
        super(...arguments);
        this.name = '';
        this.size = 'm';
        this.color = '';
        this.label = '';
        this.flipX = false;
        this.flipY = false;
        this.rotate = '';
        this.image = false;
    }
    // ── Private helpers ─────────────────────────────────────────────────────────
    /** Normalise `name` to a CSS var reference, e.g. `var(--as-icon-pen)`. */
    get _iconVar() {
        const name = this.name || '--as-icon-arrow-right';
        const varName = name.startsWith('--') ? name : `--as-icon-${name}`;
        return `var(${varName})`;
    }
    /**
     * Resolve color: wrap CSS-var names in var(...), pass plain values through.
     * Falls back to var(--as-color-text, currentColor) when empty.
     */
    get _resolvedColor() {
        if (!this.color)
            return 'var(--as-color-text, currentColor)';
        return this.color.startsWith('--') ? `var(${this.color})` : this.color;
    }
    // ── Render ──────────────────────────────────────────────────────────────────
    /**
     * No child DOM is rendered — the icon lives entirely in `:host::after`.
     * CSS custom properties are set directly on the host so the pseudo-element
     * can read them via var(--icon), var(--color-icon), var(--rotate).
     */
    render() {
        // Drive ::after via the same custom property names as the original.
        this.style.setProperty('--icon', this._iconVar);
        this.style.setProperty('--color-icon', this._resolvedColor);
        // `rotate` is a standalone CSS property value, not a transform.
        this.style.setProperty('--rotate', this.rotate || '0deg');
        // Accessibility: set directly on the host element (no shadow children).
        if (this.label) {
            this.removeAttribute('aria-hidden');
            this.setAttribute('role', 'img');
            this.setAttribute('aria-label', this.label);
        }
        else {
            this.setAttribute('aria-hidden', 'true');
            this.removeAttribute('role');
            this.removeAttribute('aria-label');
        }
        return html ``;
    }
};
// ── Static styles ───────────────────────────────────────────────────────────
AsIcon.styles = css `
    :host {
      --rotate: 0deg;
      display: inline-block;
      gap: var(--as-space-s, .25rem);
      align-items: center;
      color: var(--color-icon, inherit);
      line-height: 0;
      width: var(--size, 1rem);
      aspect-ratio: var(--as-ratio-square, 1/1);
    }

    /* ── Size scale ── */
    :host([size='s'])    { --size: var(--as-size-s, .5rem));}
    :host([size='m'])    { --size: var(--as-size-m, 1rem);  }
    :host([size='l'])    { --size: var(--as-size-l, 1.5rem);}
    :host([size='xl'])   { --size: var(--as-size-xl, 2rem); }
    :host([size='xxl'])  { --size: var(--as-size-xxl, 3rem);}
    :host([size='xxxl']) { --size: var(--as-size-xxxl, 6rem);}

    :host::after {
      content: '';
      display: inline-flex;
      width: var(--size, 1rem);
      aspect-ratio: var(--as-ratio-square, 1/1);
      mask-image: var(--icon, var(--as-icon-arrow-right));
      mask-repeat: no-repeat;
      mask-size: contain;
      mask-position: center;
      background-color: var(--color-icon, currentColor);
      rotate: var(--rotate, 0deg);
      transition: all .15s ease-out;
    }

    :host([flip-x])         { transform: scale(-1,  1); }
    :host([flip-y])         { transform: scale( 1, -1); }
    :host([flip-x][flip-y]) { transform: scale(-1, -1); }

    
    :host([image]) {
      width: var(--size, 1rem);
      aspect-ratio: var(--as-ratio-square, 1/1);
      display: block;
      rotate: var(--rotate, 0deg);
    }

    :host([image])::after {
      content: '';
      background-image: var(--icon, var(--as-icon-arrow-right));
      background-size: var(--size);
      mask-image: unset;
      background-color: unset;
    }
  `;
__decorate([
    property({ type: String, reflect: true })
], AsIcon.prototype, "name", void 0);
__decorate([
    property({ type: String })
], AsIcon.prototype, "size", void 0);
__decorate([
    property({ type: String })
], AsIcon.prototype, "color", void 0);
__decorate([
    property({ type: String })
], AsIcon.prototype, "label", void 0);
__decorate([
    property({ type: Boolean, attribute: 'flip-x', reflect: true })
], AsIcon.prototype, "flipX", void 0);
__decorate([
    property({ type: Boolean, attribute: 'flip-y', reflect: true })
], AsIcon.prototype, "flipY", void 0);
__decorate([
    property({ type: String })
], AsIcon.prototype, "rotate", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], AsIcon.prototype, "image", void 0);
AsIcon = __decorate([
    customElement('as-icon')
], AsIcon);
export { AsIcon };
//# sourceMappingURL=as-icon.js.map