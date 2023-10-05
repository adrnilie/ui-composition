import { LitElement, css, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("poc-button")
export class PocButton extends LitElement {
  @property({ type: String })
  variant: string = "default";

  buttonClicked() {
    const event = new CustomEvent("button-clicked", {
      detail: {
        message: "Guess what, I was clicked",
      },
    });

    this.dispatchEvent(event);
  }

  render() {
    return html`
      <button
        part="button"
        data-variant="${this.variant}"
        @click=${this.buttonClicked}
      >
        <slot></slot>
      </button>
    `;
  }

  static styles = css`
    button {
      color: #c1c1c1
      border-radius: 4px;
      border: 1px solid transparent;
      padding: .778em;
      font-size: 1em;
      font-weight: 700;
      font-family: inherit;
      background-color: #f9f9f9;
      cursor: pointer;
      transition: background-color 0.25s;
      outline: none;
      width: 100%;
      box-shadow: 0px 2px 3px rgba(68, 88, 10, .15);
    }

    button:hover {
      background-color: #ededed;
    }

    button[data-variant="primary"] {
      background-color: #8bb611;
      color: #fff
    }

    button[data-variant="primary"]:hover {
      background-color: #80aa0a;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    "poc-button": PocButton;
  }
}
