import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Mission } from './mission';
import { MissionService } from './mission.service';

@Component({
  selector: 'my-missions',
  templateUrl: './missions.component.html',
  styleUrls: [ './missions.component.css' ]
})
export class MissionsComponent implements OnInit {
  missions: Mission[];
  selectedMission: Mission;

  constructor(
    private router: Router,
    private missionService: MissionService) { }

  getMissions(): void {
    this.missionService.getMissions().then(missions => this.missions = missions);
  }

  ngOnInit(): void {
    this.getMissions();
  }

  onSelect(mission: Mission): void {
    this.selectedMission = mission;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedMission.id]);
  }
}