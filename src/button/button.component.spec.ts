import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { visualDiff } from '@web/test-runner-visual-regression';

import type { ButtonComponent } from './button.component';
import './button.component';

describe('<test-button>', () => {
	describe('should render variants correctly', () => {
		['sm', 'md', 'lg'].forEach((size) =>
			describe(size, () => {
				['ltr', 'rtl'].forEach((dir) =>
					it(dir, async () => {
						const el = await fixture<HTMLDivElement>(html`
							<div dir="${dir}">
								${['primary', 'secondary'].map(
									(variant) => html`
										<div>
											<test-button size="${size}" variant="${variant}">${variant}</test-button>
										</div>
									`,
								)}
							</div>
						`);

						await visualDiff(el, `test-button-${size}-${dir}`);
					}),
				);
			}),
		);
	});
});
