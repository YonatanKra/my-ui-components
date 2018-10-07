import { Injectable } from '@angular/core';

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
    document.body.appendChild(element);
  }
}
