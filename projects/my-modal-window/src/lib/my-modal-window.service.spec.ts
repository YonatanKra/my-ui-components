import { TestBed } from '@angular/core/testing';

import { MyModalWindowService } from './my-modal-window.service';
import {MyModalWindowConfig} from './models/MyModalWindowConfig';

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

    it('should return the element', () => {
      expect(service.open()).toEqual(document.querySelector('my-modal-window'));
    });

    it('should set the config property of my-modal-window with the config parameter', () => {
      const config = new MyModalWindowConfig();
      service.open(config);
      const element = document.querySelector('my-modal-window');
      const elementConfig = (element as any).config;
      expect(elementConfig).toEqual(config);
    });
  });

  describe('close', () => {
    it('should remove the modal window from the DOM', () => {
      const element = service.open();
      service.close();
      expect(document.querySelectorAll('my-modal-window').length).toEqual(0);
    });
  });

  afterEach(() => {
    const element = document.body.querySelector('my-modal-window');
    if (element) {
      document.body.removeChild(element);
    }
  });
});
