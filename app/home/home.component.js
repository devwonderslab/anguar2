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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../_services/index");
var index_2 = require("../_services/index");
var HomeComponent = (function () {
    function HomeComponent(userService, friendService) {
        this.userService = userService;
        this.friendService = friendService;
        this.users = [];
        this.friends = [];
        this.requests = [];
        this.currentUser = JSON.parse(localStorage.getItem('user'));
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    HomeComponent.prototype.remove = function (id) {
        var _this = this;
        this.friendService.remove(id).subscribe(function () { _this.loadAllUsers(); });
    };
    HomeComponent.prototype.addFriend = function (id) {
        var _this = this;
        this.friendService.add(id).subscribe(function () { _this.loadAllUsers(); });
    };
    HomeComponent.prototype.acceptRequest = function (id) {
        var _this = this;
        this.friendService.acceptRequest(id).subscribe(function () { _this.loadAllUsers(); });
    };
    HomeComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (response) { _this.users = response.result; });
        this.friendService.getFriends().subscribe(function (response) { _this.friends = response.result; });
        this.friendService.getRequests().subscribe(function (response) { _this.requests = response.result; });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'home.component.html'
    }),
    __metadata("design:paramtypes", [index_1.UserService, index_2.FriendService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map