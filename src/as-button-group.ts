import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * `as-button-group` — Groups `<as-button>` elements into a visual toolbar.
 *
 * Buttons share borders by default; only the first and last get outer rounded corners.
 * Supports horizontal (default) and vertical layout, and a `spaced` mode where each
 * button keeps its own full border-radius and a gap is added between them.
 *
 * @attr {boolean} vertical - Stack buttons vertically instead of horizontally.
 * @attr {boolean} spaced   - Add gaps between buttons; each retains its own rounded corners.
 */
@customElement('as-button-group')
export class AsButtonGroup extends LitElement {

  @property({ type: Boolean, reflect: true })
  vertical: boolean = false;

  @property({ type: Boolean, reflect: true })
  spaced: boolean = false;

  static override styles = css`
    :host {
      display: inline-flex;
      flex-direction: row;
      align-items: stretch;
    }

    :host([vertical]) {
      flex-direction: column;
      align-items: stretch;
    }

    /* ── Spaced: gap between buttons ── */
    :host([spaced]) {
      gap: var(--as-space-s, 0.375rem);
    }

    /* ── Vertical: stretch buttons to group width ── */
    :host([vertical]) ::slotted(as-button) {
      --as-btn-width: 100%;
    }
  `;

  private _updateChildren = () => {
    const slot = this.shadowRoot?.querySelector('slot');
    if (!slot) return;

    const buttons = slot
      .assignedElements({ flatten: true })
      .filter(el => el.tagName === 'AS-BUTTON') as HTMLElement[];

    const allProps = [
      '--as-btn-radius-tl',
      '--as-btn-radius-tr',
      '--as-btn-radius-br',
      '--as-btn-radius-bl',
      '--as-btn-border-right-width',
      '--as-btn-border-bottom-width',
    ];

    buttons.forEach((btn, i) => {
      const isFirst = i === 0;
      const isLast = i === buttons.length - 1;

      // Reset everything first so switching modes is always clean
      allProps.forEach(p => btn.style.removeProperty(p));

      if (this.spaced) return;

      if (this.vertical) {
        // Drop bottom border on every button except the last
        if (!isLast) btn.style.setProperty('--as-btn-border-bottom-width', '0');

        // Flatten inner corners
        if (!isFirst) {
          btn.style.setProperty('--as-btn-radius-tl', '0');
          btn.style.setProperty('--as-btn-radius-tr', '0');
        }
        if (!isLast) {
          btn.style.setProperty('--as-btn-radius-bl', '0');
          btn.style.setProperty('--as-btn-radius-br', '0');
        }
      } else {
        // Drop right border on every button except the last
        if (!isLast) btn.style.setProperty('--as-btn-border-right-width', '0');

        // Flatten inner corners
        if (!isFirst) {
          btn.style.setProperty('--as-btn-radius-tl', '0');
          btn.style.setProperty('--as-btn-radius-bl', '0');
        }
        if (!isLast) {
          btn.style.setProperty('--as-btn-radius-tr', '0');
          btn.style.setProperty('--as-btn-radius-br', '0');
        }
      }
    });
  };

  override render() {
    return html`<slot @slotchange=${this._updateChildren}></slot>`;
  }

  override updated() {
    this._updateChildren();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'as-button-group': AsButtonGroup;
  }
}
