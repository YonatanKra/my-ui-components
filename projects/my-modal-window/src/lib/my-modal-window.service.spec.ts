import { TestBed } from '@angular/core/testing';

import { MyModalWindowService } from './my-modal-window.service';

describe('MyModalWindowService', () => {
  let service: MyModalWindowService;
  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(() => {
    service = TestBed.get(MyModalWindowService);
  });

  describe('open', () => {
    it('should append my-modal-window component to body if not initialized already', () => {
      const nElementsBefore = document.querySelectorAll('my-modal-window').length;
      service.open();
      service.open();
      expect(nElementsBefore).toEqual(0);
      expect(document.querySelectorAll('my-modal-window').length).toEqual(1);
    });

  afterEach(() => {
    document.body.removeChild(document.body.querySelector('my-modal-window'));
  });
});
