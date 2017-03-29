import { Injectable, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Http, Headers, RequestOptions } from '@angular/http';

import { User } from '../_models/index';

@Injectable()
export class UserService  {

    protected options: RequestOptions;

    constructor( protected http: Http ) {
        let token = localStorage.getItem('token');
        if (token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + token});
            console.log(headers)
            this.options = new RequestOptions({ headers: headers });
        }
    }

    getAll() {
        return this.http.get('http://localhost:3001/user', this.options).map((response: Response) => response.json());
    }

    getById(id: number) {
        return this.http.get('http://localhost:3001/user/' + id, this.options).map((response: Response) => response.json());
    }

    create(user: User) {
        return this.http.post('http://localhost:3001/user/', user, this.options).map((response: Response) => response.json());
    }

    update(user: User) {
        return this.http.put('http://localhost:3001/user/' + user._id, user, this.options).map((response: Response) => response.json());
    }

    delete(id: number) {
        return this.http.delete('http://localhost:3001/user/' + id, this.options).map((response: Response) => response.json());
    }

    ngOnInit() {
        let currentUser;
        try {
            currentUser = JSON.parse(localStorage.getItem('user'));
        } catch( e ) {

        }
    }

}