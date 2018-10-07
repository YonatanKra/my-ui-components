import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MyModalWindowModule} from 'my-modal-window';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MyModalWindowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
