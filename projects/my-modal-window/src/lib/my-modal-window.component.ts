import {Component, ElementRef, Injector, OnInit} from '@angular/core';
import {MyModalWindowConfig} from "./models/MyModalWindowConfig";

@Component({
  selector: 'lib-my-modal-window',
  template: `
    <div class="my-modal-window-overlay"></div>
    <div class="my-modal-window-content"></div>
  `,
  styles: []
})
export class MyModalWindowComponent implements OnInit {

  private _config: MyModalWindowConfig;
  private _overlay: HTMLElement;
  private _content: HTMLElement;

  set config(configObject: MyModalWindowConfig) {
    this._config = configObject;
    this._setModal();
  }

  get config(): MyModalWindowConfig {
    return this._config;
  }

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    this._content = this.element.nativeElement.querySelector('.my-modal-window-content');
  }

  private _setModal() {
    this._content.innerHTML = this.config.content;
  }
}
