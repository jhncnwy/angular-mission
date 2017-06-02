import { Component, OnInit } from '@angular/core';

import { Mission } from './mission';
import { MissionService } from './mission.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  missions: Mission[] = [];

  constructor(private missionService: MissionService) { }

  ngOnInit(): void {
    this.missionService.getMissions()
      .then(missions => this.missions = missions.slice(1, 5));
  }
}