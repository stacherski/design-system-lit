import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

export type AvatarVariant = 'circle' | 'square';
export type AvatarSize = 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';

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
 * @attr {AvatarSize}    size    - m | l | xl | xxl | xxxl. Defaults to "l".
 * @attr {string}        src     - URL of a photo to display.
 * @attr {string}        name    - Full name; used as <img> alt text and to generate initials.
 * @attr {string}        icon    - Icon identifier passed to <as-icon> as a fallback.
 * @attr {string}        accent  - Accent color override (CSS value or --custom-prop name).
 */
@customElement('as-avatar')
export class AsAvatar extends LitElement {

  // ── Properties ─────────────────────────────────────────────────────────────

  @property({ type: String })
  variant: AvatarVariant = 'circle';

  @property({ type: String, reflect: true })
  size: AvatarSize = 'l';

  @property({ type: String })
  src: string = '';

  @property({ type: String })
  name: string = '';

  @property({ type: String })
  icon: string = '';

  @property({ type: String })
  accent: string = '';

  @state()
  private _content: string = '';

  // ── Static styles ───────────────────────────────────────────────────────────

  static override styles = css`
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

    .silhouette--building {
      display: block;
      position: absolute;
      inset: 0;
      width: 100%;
      height: 100%;
      fill: var(--avatar-silhouette);
      padding: 15%;
      box-sizing: border-box;
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

  // ── Private helpers ─────────────────────────────────────────────────────────

  private get _initials(): string {
    const words = this.name.trim().split(/\s+/);
    const a = words[0]?.[0] ?? '';
    const b = words[1]?.[0] ?? '';
    return (a + b).toUpperCase();
  }

  private _onSlotChange(e: Event) {
    const slot = e.target as HTMLSlotElement;
    const nodes = slot.assignedNodes({ flatten: true });
    this._content = nodes.map(n => n.textContent ?? '').join('').trim();
  }

  // ── Render ──────────────────────────────────────────────────────────────────

  override render() {
    if (this.src) {
      return html`<img class="image" src=${this.src} alt=${this.name} />`;
    }

    const silhouette = this.variant === 'square'
      ? html`<svg class="silhouette--building" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" aria-hidden="true"><path d="M96 96C78.3 96 64 110.3 64 128L64 496C64 522.5 85.5 544 112 544L528 544C554.5 544 576 522.5 576 496L576 216.2C576 198 556.6 186.5 540.6 195.1L384 279.4L384 216.2C384 198 364.6 186.5 348.6 195.1L192 279.4L192 128C192 110.3 177.7 96 160 96L96 96z"/></svg>`
      : html`<span class="silhouette"></span>`;

    const fallback = this._content                  ? nothing
      : this.name                                   ? this._initials
      : this.icon                                   ? html`<as-icon name=${this.icon} size=${this.size}></as-icon>`
      :                                               silhouette;

    return html`
      <slot @slotchange=${this._onSlotChange}></slot>
      ${fallback}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'as-avatar': AsAvatar;
  }
}
