import {Component, ElementRef} from '@angular/core';
import {MyModalWindowConfig} from "../../projects/my-modal-window/src/lib/models/MyModalWindowConfig";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-ui-components';

  constructor(private element: ElementRef) {

  }

  openModal() {
    const modal = document.createElement('my-modal-window');
    const config = new MyModalWindowConfig();
    config.content = '<h1>Hello Angular-IL</h1>';

    modal.config = config;
    this.element.nativeElement.appendChild(modal);
  }
}
