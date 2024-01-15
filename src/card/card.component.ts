import { LitElement, html, unsafeCSS } from 'lit';

export class CardComponent extends LitElement {
	render(): unknown {
		return html`
			<div part="header">
				<slot name="header"></slot>
			</div>
			<div part="body">
				<slot></slot>
			</div>
			<div part="footer">
				<slot name="footer"></slot>
			</div>
		`;
	}
}
