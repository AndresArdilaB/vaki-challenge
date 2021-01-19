import { TestBed } from '@angular/core/testing';

import { CloudfunctionsService } from './cloudfunctions.service';

xdescribe('CloudfunctionsService', () => {
  let service: CloudfunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CloudfunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
