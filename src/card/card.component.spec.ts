import { html } from 'lit';
import { fixture } from '@open-wc/testing';
import { visualDiff } from '@web/test-runner-visual-regression';

import type { CardComponent } from './card.component';
import './card.component';

describe('<test-card>', () => {
	describe('should render correctly', () => {
		['ltr', 'rtl'].forEach((dir) =>
			it(dir, async () => {
				const el = await fixture<CardComponent>(html`
					<test-card dir="${dir}">
						<div slot="header">header</div>
						<div>content</div>
						<div slot="footer">text</div>
					</test-card>
				`);

				await visualDiff(el, `test-card-${dir}`);
			}),
		);
	});
});
