import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-modal-window',
  template: `
    <div class="my-modal-window-overlay"></div>
    <div class="my-modal-window-content"></div>
  `,
  styles: []
})
export class MyModalWindowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
