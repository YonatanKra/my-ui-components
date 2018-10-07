import {NgElement, WithProperties} from "@angular/elements";
import {MyModalWindowConfig} from "./MyModalWindowConfig";

declare global {
  interface HTMLElementTagNameMap {
    'my-modal-window': NgElement & WithProperties<{config: MyModalWindowConfig, closeModal: void}>;
  }
}
