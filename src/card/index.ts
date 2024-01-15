import { CardComponent } from './card.component';

if (!customElements.get('test-card')) {
	customElements.define('test-card', CardComponent);
}

export { CardComponent };

declare global {
	interface HTMLElementTagNameMap {
		'test-card': CardComponent;
	}
}
