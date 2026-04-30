import { LitElement } from 'lit';
export type ButtonVariant = 'plain' | 'outlined' | 'transparent';
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
export declare class AsButton extends LitElement {
    href: string;
    target: string;
    variant: ButtonVariant;
    accent: string;
    disabled: boolean;
    static styles: import("lit").CSSResult;
    /** Resolve accent: wrap CSS-var names in var(...), pass plain values through. */
    private get _resolvedAccent();
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'as-avatar': AsAvatar;
    }
}
//# sourceMappingURL=as-avatar.d.ts.map