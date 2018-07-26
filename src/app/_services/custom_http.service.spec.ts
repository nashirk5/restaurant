import { TestBed, inject } from '@angular/core/testing';

import { Custom_httpService } from './custom_http.service';

describe('RouterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Custom_httpService]
    });
  });

  it('should be created', inject([Custom_httpService], (service: Custom_httpService) => {
    expect(service).toBeTruthy();
  }));
});
