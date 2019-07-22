import { TestBed } from '@angular/core/testing';

import { MyStylesLibService } from './my-styles-lib.service';

describe('MyStylesLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyStylesLibService = TestBed.get(MyStylesLibService);
    expect(service).toBeTruthy();
  });
});
