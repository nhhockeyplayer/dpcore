import { TestBed, inject } from '@angular/core/testing';

import { ContentprojectorService } from './contentprojector.service';

describe('ContentprojectorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentprojectorService]
    });
  });

  it('should be created', inject([ContentprojectorService], (service: ContentprojectorService) => {
    expect(service).toBeTruthy();
  }));
});
