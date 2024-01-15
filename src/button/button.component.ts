import { LitElement, html } from 'lit';
import { property } from 'lit/decorators/property.js';

export class ButtonComponent extends LitElement {
	@property({ type: String, reflect: true }) variant = 'secondary';
	@property({ type: String, reflect: true }) size = 'md';

	render(): unknown {
		return html`<div part="container"><slot></slot></div>`;
	}
}
