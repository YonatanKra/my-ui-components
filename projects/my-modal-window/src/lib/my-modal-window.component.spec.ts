import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyModalWindowComponent } from './my-modal-window.component';

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
});
