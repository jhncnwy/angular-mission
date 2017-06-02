"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var mock_missions_1 = require("./mock-missions");
var core_1 = require("@angular/core");
var MissionService = (function () {
    function MissionService() {
    }
    MissionService.prototype.getMissions = function () {
        return Promise.resolve(mock_missions_1.MISSIONS);
    };
    MissionService.prototype.getMissionsSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getMissions()); }, 2000);
        });
    };
    MissionService.prototype.getMission = function (id) {
        return this.getMissions()
            .then(function (missions) { return missions.find(function (mission) { return mission.id === id; }); });
    };
    return MissionService;
}());
MissionService = __decorate([
    core_1.Injectable()
], MissionService);
exports.MissionService = MissionService;
//# sourceMappingURL=mission.service.js.map