import { Injectable } from '@angular/core';
import {MyModalWindowConfig} from './models/MyModalWindowConfig';
import {NgElement, WithProperties} from "@angular/elements";

@Injectable({
  providedIn: 'root'
})
export class MyModalWindowService {
  constructor() { }

  open(config?: MyModalWindowConfig) {
    let element = document.body.querySelector('my-modal-window') as NgElement & WithProperties<{config: MyModalWindowConfig}>;;
    if (!element) {
      element = document.createElement('my-modal-window') as NgElement & WithProperties<{config: MyModalWindowConfig}>;;
    }
    element.config = config;
    document.body.appendChild(element);
    return element;
  }
}
