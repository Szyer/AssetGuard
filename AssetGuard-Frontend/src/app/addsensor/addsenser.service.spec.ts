import { TestBed } from '@angular/core/testing';

import { AddsenserService } from './addsenser.service';

describe('AddsenserService', () => {
  let service: AddsenserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddsenserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
