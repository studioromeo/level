import { LitElement, html } from 'lit-element';

export class AppLevel extends LitElement {
  constructor() {
    super();

    this.orientation = 0;
    this._handleOrientation = this._handleOrientation.bind(this);
  }

  static get properties() {
    return {
      orientation: { attribute: false },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('deviceorientation', this._handleOrientation);
  }

  disconnectedCallback() {
    window.removeEventListener('deviceorientation', this._handleOrientation);
    super.disconnectedCallback();
  }

  /**
   * @param {DeviceOrientationEvent} e
   */
  _handleOrientation(e) {
    this.orientation = e.gamma;
  }

  render() {
    return html` <main>${this.orientation}</main> `;
  }
}
