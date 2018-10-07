import {Component, ElementRef, Input, OnInit} from '@angular/core';
import {MyModalWindowConfig} from './models/MyModalWindowConfig';

@Component({
  selector: 'lib-my-modal-window',
  template: `
    <div class="my-modal-window-overlay"></div>
    <div class="my-modal-window-content"></div>
  `,
  styles: [`
        :host {
            opacity: 1;
            visibility: visible;
            position: fixed;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: rgba(0, 0, 0, 0.42);
            -webkit-transition: opacity 0.5s;
            transition: opacity 0.5s;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        :host.hide {
            opacity: 0;
            visibility: hidden;
            -webkit-transition: opacity 0.5s, visibility 0s 0.5s;
            transition: opacity 0.5s, visibility 0s 0.5s;
        }
  `]
})
export class MyModalWindowComponent implements OnInit {

  private _config: MyModalWindowConfig;
  private _overlay: HTMLElement;
  private _content: HTMLElement;

  @Input()
  set config(configObject: MyModalWindowConfig) {
    if (!configObject) {
      return;
    }
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
