import { html, fixture, expect, oneEvent } from '@open-wc/testing';

import '../src/app-level.js';

describe('AppLevel', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html` <app-level></app-level> `);
  });

  it('renders the orientation', async () => {
    const gamma = 56;

    const event = new DeviceOrientationEvent('deviceorientation', { gamma });
    const listener = oneEvent(window, 'deviceorientation');
    window.dispatchEvent(event);

    await listener;

    const main = element.shadowRoot.querySelector('main');
    expect(main).to.exist;
    expect(main.textContent).to.equal(`${gamma}`);
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
