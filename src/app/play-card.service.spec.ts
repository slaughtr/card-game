import { TestBed, inject } from '@angular/core/testing';

import { PlayCardService } from './play-card.service';

describe('PlayCardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayCardService]
    });
  });

  it('should ...', inject([PlayCardService], (service: PlayCardService) => {
    expect(service).toBeTruthy();
  }));
});
