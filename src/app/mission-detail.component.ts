import 'rxjs/add/operator/switchMap';
import { Component, OnInit }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location }               from '@angular/common';

import { Mission }         from './mission';
import { MissionService }  from './mission.service';
@Component({
  selector: 'mission-detail',
  templateUrl: './mission-detail.component.html',
  styleUrls: [ './mission-detail.component.css' ]
})
export class MissionDetailComponent implements OnInit {
  mission: Mission;

  constructor(
    private missionService: MissionService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.missionService.getMission(+params['id']))
      .subscribe(mission => this.mission = mission);
  }

  goBack(): void {
    this.location.back();
  }
}
