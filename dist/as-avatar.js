var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
/**
 * `as-avatar` — Avatar component for the AS Design System.
 *
 * Content priority (highest → lowest):
 *   1. `src`          — photo rendered as <img>
 *   2. slot           — any explicit child content, e.g. <as-avatar>AB</as-avatar>
 *   3. `name`         — auto-generated two-letter initials
 *   4. `icon`         — <as-icon> rendered at matching size
 *   5. silhouette     — default radial-gradient placeholder (no attrs set)
 *
 * @attr {AvatarVariant} variant - circle | square. Defaults to "circle".
 * @attr {AvatarSize}    size    - m | l | xl | xxl | xxxl. Defaults to "m".
 * @attr {string}        src     - URL of a photo to display.
 * @attr {string}        name    - Full name; used as <img> alt text and to generate initials.
 * @attr {string}        icon    - Icon identifier passed to <as-icon> as a fallback.
 * @attr {string}        accent  - Accent color override (CSS value or --custom-prop name).
 */
let AsAvatar = class AsAvatar extends LitElement {
    constructor() {
        // ── Properties ─────────────────────────────────────────────────────────────
        super(...arguments);
        this.variant = 'circle';
        this.size = 'm';
        this.src = '';
        this.name = '';
        this.icon = '';
        this.accent = '';
        this._content = '';
    }
    // ── Private helpers ─────────────────────────────────────────────────────────
    get _initials() {
        const words = this.name.trim().split(/\s+/);
        const a = words[0]?.[0] ?? '';
        const b = words[1]?.[0] ?? '';
        return (a + b).toUpperCase();
    }
    _onSlotChange(e) {
        const slot = e.target;
        const nodes = slot.assignedNodes({ flatten: true });
        this._content = nodes.map(n => n.textContent ?? '').join('').trim();
    }
    // ── Render ──────────────────────────────────────────────────────────────────
    render() {
        if (this.src) {
            return html `<img class="image" src=${this.src} alt=${this.name} />`;
        }
        const fallback = this._content ? nothing
            : this.name ? this._initials
                : this.icon ? html `<as-icon name=${this.icon} size=${this.size}></as-icon>`
                    : html `<span class="silhouette"></span>`;
        return html `
      <slot @slotchange=${this._onSlotChange}></slot>
      ${fallback}
    `;
    }
};
// ── Static styles ───────────────────────────────────────────────────────────
AsAvatar.styles = css `
    :host {
      --avatar-accent: var(--as-color-accent, #0066cc);
      --avatar-silhouette: hsl(from var(--avatar-accent) h s calc(l + 25) / 0.4);
      --border-radius: var(--as-border-radius-circle, 50%);
      --font-size: calc(var(--width) * 0.4);
      --width: var(--as-size-l, 2.5rem);
      --text-color: var(--as-color-text-inverted, #fff);

      aspect-ratio: 1 / 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      background-color: var(--avatar-accent);
      border-radius: var(--border-radius);
      font-size: var(--font-size);
      color: var(--text-color);
      width: var(--width);
      position: relative;
    }

    .image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .silhouette {
      display: block;
      position: absolute;
      inset: 0;
      background-image:
        radial-gradient(circle at 50% 20%, var(--avatar-silhouette) 22%, transparent 23%),
        radial-gradient(ellipse 65% 58% at 50% 107%, var(--avatar-silhouette) 99%, transparent 100%);
    }

    /* ── Variants ── */
    :host([variant='circle'])   { --border-radius: 50%; }
    :host([variant='square'])   { --border-radius: var(--as-radius-s, 4px); }

    /* ── Size scale ── */
    :host([size='m'])    { --width: var(--as-size-m,   2rem);   }
    :host([size='l'])    { --width: var(--as-size-l,   2.5rem); }
    :host([size='xl'])   { --width: var(--as-size-xl,  3rem);   }
    :host([size='xxl'])  { --width: var(--as-size-xxl, 4rem);   }
    :host([size='xxxl']) { --width: var(--as-size-xxxl,6rem);   }
  `;
__decorate([
    property({ type: String })
], AsAvatar.prototype, "variant", void 0);
__decorate([
    property({ type: String, reflect: true })
], AsAvatar.prototype, "size", void 0);
__decorate([
    property({ type: String })
], AsAvatar.prototype, "src", void 0);
__decorate([
    property({ type: String })
], AsAvatar.prototype, "name", void 0);
__decorate([
    property({ type: String })
], AsAvatar.prototype, "icon", void 0);
__decorate([
    property({ type: String })
], AsAvatar.prototype, "accent", void 0);
__decorate([
    state()
], AsAvatar.prototype, "_content", void 0);
AsAvatar = __decorate([
    customElement('as-avatar')
], AsAvatar);
export { AsAvatar };
//# sourceMappingURL=as-avatar.js.map