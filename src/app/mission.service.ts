import { Mission } from './mission';
import { MISSIONS } from './mock-missions';
import { Injectable } from '@angular/core';

@Injectable()
export class MissionService {
  getMissions(): Promise<Mission[]> {
    return Promise.resolve(MISSIONS);
  }

  getMissionsSlowly(): Promise<Mission[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getMissions()), 2000);
    });
  }

  getMission(id: number): Promise<Mission> {
    return this.getMissions()
               .then(missions => missions.find(mission => mission.id === id));
  }
}
