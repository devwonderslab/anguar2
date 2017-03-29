import { Component, OnInit } from '@angular/core';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { FriendService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    friends: User[] = [];
    requests: User[] = [];

    constructor(private userService: UserService, private friendService: FriendService) {
        this.currentUser = JSON.parse(localStorage.getItem('user'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    remove(id: string) {
        this.friendService.remove(id).subscribe(() => { this.loadAllUsers() });
    }

    addFriend(id: string) {
        this.friendService.add(id).subscribe( ()=> { this.loadAllUsers() } )
    }

    acceptRequest(id: string){
        this.friendService.acceptRequest(id).subscribe( ()=> { this.loadAllUsers() } )

    }

    private loadAllUsers() {
        this.userService.getAll().subscribe( response => { this.users = response.result; });
        this.friendService.getFriends().subscribe( response => { this.friends = response.result; });
        this.friendService.getRequests().subscribe( response => { this.requests = response.result; });

    }
}