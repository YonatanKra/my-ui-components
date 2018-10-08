import { Injectable } from '@angular/core';
import {MyModalWindowConfig} from './models/MyModalWindowConfig';
import './models/ElementAPI';

@Injectable({
  providedIn: 'root'
})
export class MyModalWindowService {
  constructor() { }

  open(config?: MyModalWindowConfig) {
    let element = document.body.querySelector('my-modal-window');
    if (!element) {
      element = document.createElement('my-modal-window');
    }
    element.config = config;
    document.body.appendChild(element);
    return element;
  }

  close() {
    const element = document.querySelector('my-modal-window');
    if (!element) {
      return;
    }
    element.close = true;
  }
}
