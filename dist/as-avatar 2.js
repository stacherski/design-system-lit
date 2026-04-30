var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
/**
 * `as-button` — Button / link component for the AS Design System.
 *
 * Renders as a `<button>` by default, or as an `<a>` when `href` is supplied.
 * The label is provided via the default slot: `<as-button>Label</as-button>`.
 *
 * @attr {string}        href     - If set, renders as an anchor pointing to this URL.
 * @attr {string}        target   - Anchor target, e.g. "_blank". Only used with `href`.
 * @attr {ButtonVariant} variant  - plain | outlined | transparent. Defaults to "plain".
 * @attr {string}        accent   - Accent color: any CSS color, hex, or CSS var name (e.g. "--as-color-brand").
 * @attr {boolean}       disabled - Disables the button (ignored for anchor mode).
 */
let AsButton = class AsButton extends LitElement {
    constructor() {
        // ── Properties ─────────────────────────────────────────────────────────────
        super(...arguments);
        this.href = '';
        this.target = '';
        this.variant = 'plain';
        this.accent = '';
        this.disabled = false;
    }
    // ── Private helpers ─────────────────────────────────────────────────────────
    /** Resolve accent: wrap CSS-var names in var(...), pass plain values through. */
    get _resolvedAccent() {
        if (!this.accent)
            return 'var(--as-color-accent, #0066cc)';
        return this.accent.startsWith('--') ? `var(${this.accent})` : this.accent;
    }
    // ── Render ──────────────────────────────────────────────────────────────────
    render() {
        this.style.setProperty('--_accent', this._resolvedAccent);
        if (this.href) {
            return html `
        <a
          class="btn"
          href=${this.href}
          target=${this.target || ''}
          part="button"
          aria-disabled=${this.disabled ? 'true' : 'false'}
        ><slot></slot></a>
      `;
        }
        return html `
      <button
        class="btn"
        part="button"
        ?disabled=${this.disabled}
      ><slot></slot></button>
    `;
    }
};
// ── Static styles ───────────────────────────────────────────────────────────
AsButton.styles = css `
    :host {
      display: inline-block;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: var(--as-space-s, 0.25rem);
      padding: var(--as-space-s, 0.375rem) var(--as-space-m, 0.875rem);
      font: inherit;
      font-weight: 500;
      line-height: 1.25;
      cursor: pointer;
      border-radius: var(--as-radius, 0.25rem);
      text-decoration: none;
      transition: opacity 0.15s ease-out, box-shadow 0.15s ease-out;
      box-sizing: border-box;
      white-space: nowrap;
      user-select: none;

      /* Plain (default): filled accent background */
      background-color: var(--_accent);
      color: var(--as-color-on-accent, #fff);
      border: 2px solid var(--_accent);
    }

    .btn:hover:not([disabled]) {
      opacity: 0.85;
      box-shadow: 0 2px 6px color-mix(in srgb, var(--_accent) 40%, transparent);
    }

    .btn:active:not([disabled]) {
      opacity: 0.7;
    }

    .btn[disabled],
    .btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
      pointer-events: none;
    }

    /* ── Outlined ── */
    :host([variant='outlined']) .btn {
      background-color: transparent;
      color: var(--_accent);
      border: 2px solid var(--_accent);
    }

    :host([variant='outlined']) .btn:hover:not([disabled]) {
      background-color: color-mix(in srgb, var(--_accent) 10%, transparent);
      box-shadow: none;
    }

    /* ── Transparent ── */
    :host([variant='transparent']) .btn {
      background-color: transparent;
      color: var(--_accent);
      border: 2px solid transparent;
    }

    :host([variant='transparent']) .btn:hover:not([disabled]) {
      background-color: color-mix(in srgb, var(--_accent) 10%, transparent);
      box-shadow: none;
    }
  `;
__decorate([
    property({ type: String })
], AsButton.prototype, "href", void 0);
__decorate([
    property({ type: String })
], AsButton.prototype, "target", void 0);
__decorate([
    property({ type: String, reflect: true })
], AsButton.prototype, "variant", void 0);
__decorate([
    property({ type: String })
], AsButton.prototype, "accent", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], AsButton.prototype, "disabled", void 0);
AsButton = __decorate([
    customElement('as-button')
], AsButton);
export { AsButton };
//# sourceMappingURL=as-avatar.js.map