import {Injector, NgModule} from '@angular/core';
import { MyModalWindowComponent } from './my-modal-window.component';
import {createCustomElement} from "@angular/elements";
import {MyModalWindowService} from "./my-modal-window.service";

@NgModule({
  imports: [
  ],
  providers: [
    MyModalWindowService
  ],
  declarations: [MyModalWindowComponent],
  exports: [MyModalWindowComponent],
  entryComponents: [MyModalWindowComponent]
})
export class MyModalWindowModule {
  constructor(injector: Injector) {
    const ModalWindowHTMLElement = createCustomElement(MyModalWindowComponent, {injector: injector});
    window.customElements.define('my-modal-window', ModalWindowHTMLElement);
    console.log('Element has been registered');
  }
}
