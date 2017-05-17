import { TestBed, inject } from '@angular/core/testing';

import { EnemyLaneService } from './enemy-lane.service';

describe('EnemyLaneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnemyLaneService]
    });
  });

  it('should ...', inject([EnemyLaneService], (service: EnemyLaneService) => {
    expect(service).toBeTruthy();
  }));
});
