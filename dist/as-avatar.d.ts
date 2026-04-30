import { LitElement } from 'lit';
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
 * @attr {AvatarSize}    size    - m | l | xl | xxl | xxxl. Defaults to "m".
 * @attr {string}        src     - URL of a photo to display.
 * @attr {string}        name    - Full name; used as <img> alt text and to generate initials.
 * @attr {string}        icon    - Icon identifier passed to <as-icon> as a fallback.
 * @attr {string}        accent  - Accent color override (CSS value or --custom-prop name).
 */
export declare class AsAvatar extends LitElement {
    variant: AvatarVariant;
    size: AvatarSize;
    src: string;
    name: string;
    icon: string;
    accent: string;
    private _content;
    static styles: import("lit").CSSResult;
    private get _initials();
    private _onSlotChange;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'as-avatar': AsAvatar;
    }
}
//# sourceMappingURL=as-avatar.d.ts.map