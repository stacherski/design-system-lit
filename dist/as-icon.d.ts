import { LitElement } from 'lit';
type IconSize = 'xs' | 's' | 'm' | 'default' | 'l' | 'xl' | 'xxl' | 'xxxl';
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
export declare class AsIcon extends LitElement {
    name: string;
    size: IconSize;
    color: string;
    label: string;
    flipX: boolean;
    flipY: boolean;
    rotate: string;
    image: boolean;
    static styles: import("lit").CSSResult;
    /** Normalise `name` to a CSS var reference, e.g. `var(--as-icon-pen)`. */
    private get _iconVar();
    /**
     * Resolve color: wrap CSS-var names in var(...), pass plain values through.
     * Falls back to var(--as-color-text, currentColor) when empty.
     */
    private get _resolvedColor();
    /**
     * No child DOM is rendered — the icon lives entirely in `:host::after`.
     * CSS custom properties are set directly on the host so the pseudo-element
     * can read them via var(--icon), var(--color-icon), var(--rotate).
     */
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'as-icon': AsIcon;
    }
}
export {};
//# sourceMappingURL=as-icon.d.ts.map