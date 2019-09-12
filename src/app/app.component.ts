import {Component, ElementRef} from '@angular/core';
import {MyModalWindowConfig} from 'my-modal-window';
import {MyModalWindowService} from 'my-modal-window';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-ui-components';

  constructor(private element: ElementRef, private modal: MyModalWindowService) {

  }

  openModal() {
    const config = new MyModalWindowConfig();
    config.content = '<my-stam></my-stam>';
    this.modal.open(config);
  }
}
