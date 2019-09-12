import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';

import { AppComponent } from './app.component';
import {MyModalWindowModule} from 'my-modal-window';
import { StamComponent } from './stam/stam.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    StamComponent
  ],
  imports: [
    BrowserModule,
    MyModalWindowModule
  ],
  providers: [],
  entryComponents: [StamComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(injector: Injector) {
    const MyStamHTMLElement = createCustomElement(StamComponent, {injector: injector});
    window.customElements.define('my-stam', MyStamHTMLElement);
    console.log('Element has been registered');
  }
 }
