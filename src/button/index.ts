import { ButtonComponent } from './button.component';

if (!customElements.get('test-button')) {
	customElements.define('test-button', ButtonComponent);
}

export { ButtonComponent };

declare global {
	interface HTMLElementTagNameMap {
		'test-button': ButtonComponent;
	}
}
