import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyModalWindowComponent } from './my-modal-window.component';
import {MyModalWindowConfig} from './models/MyModalWindowConfig';

describe('MyModalWindowComponent', () => {
  let component: MyModalWindowComponent;
  let fixture: ComponentFixture<MyModalWindowComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyModalWindowComponent ]
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
  });

});
