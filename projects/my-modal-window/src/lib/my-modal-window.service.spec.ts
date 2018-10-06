import { TestBed } from '@angular/core/testing';

import { MyModalWindowService } from './my-modal-window.service';

describe('MyModalWindowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyModalWindowService = TestBed.get(MyModalWindowService);
    expect(service).toBeTruthy();
  });
});
