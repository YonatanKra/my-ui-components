import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyModalWindowComponent } from './my-modal-window.component';
import {MyModalWindowConfig} from './models/MyModalWindowConfig';
import {Component} from "@angular/core";

@Component({
  selector: 'lib-my-parent',
  template: `
    <lib-my-modal-window [config]="parentConfig"></lib-my-modal-window>
  `,
})
class MyParentComponent {
  public parentConfig: MyModalWindowConfig;
}

describe('MyModalWindowComponent', () => {
  let component: MyModalWindowComponent;
  let fixture: ComponentFixture<MyModalWindowComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyModalWindowComponent, MyParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyModalWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    element = fixture.nativeElement;
  });

  describe('init', () => {
    it('should have an overlay and a content div inside', () => {
      const overlay = element.querySelector('.my-modal-window-overlay');
      const content = element.querySelector('.my-modal-window-content');
      expect(overlay).toBeTruthy();
      expect(content).toBeTruthy();
    });
  });

  describe('open and change to modal', () => {
    it('should add the content to the content div', () => {
      const content = element.querySelector('.my-modal-window-content');
      const config = new MyModalWindowConfig();
      config.content = '<h1>Hello Modal!</h1>';
      component.config = config;
      expect(content.innerHTML).toEqual(config.content);
    });

    describe('binding', () => {
      let content, config, component;
      beforeEach(() => {

      });

      it('should be changed from parent component', () => {
        const parentFixture = TestBed.createComponent(MyParentComponent);
        const parentComponent = parentFixture.componentInstance;
        parentFixture.detectChanges();

        const config = new MyModalWindowConfig();
        config.content = '<h1>Hello Start Wars</h1>';
        parentComponent.parentConfig = config;
        parentFixture.detectChanges();

        const content = parentFixture.nativeElement.querySelector('.my-modal-window-content');
        expect(content.innerHTML).toEqual(config.content);
      });
    });


  });

});
