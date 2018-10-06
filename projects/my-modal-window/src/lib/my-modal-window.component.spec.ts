import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyModalWindowComponent } from './my-modal-window.component';

describe('MyModalWindowComponent', () => {
  let component: MyModalWindowComponent;
  let fixture: ComponentFixture<MyModalWindowComponent>;

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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
