"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var mission_service_1 = require("./mission.service");
var MissionsComponent = (function () {
    function MissionsComponent(router, missionService) {
        this.router = router;
        this.missionService = missionService;
    }
    MissionsComponent.prototype.getMissions = function () {
        var _this = this;
        this.missionService.getMissions().then(function (missions) { return _this.missions = missions; });
    };
    MissionsComponent.prototype.ngOnInit = function () {
        this.getMissions();
    };
    MissionsComponent.prototype.onSelect = function (mission) {
        this.selectedMission = mission;
    };
    MissionsComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedMission.id]);
    };
    return MissionsComponent;
}());
MissionsComponent = __decorate([
    core_1.Component({
        selector: 'my-missions',
        templateUrl: './missions.component.html',
        styleUrls: ['./missions.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        mission_service_1.MissionService])
], MissionsComponent);
exports.MissionsComponent = MissionsComponent;
//# sourceMappingURL=missions.component.js.map