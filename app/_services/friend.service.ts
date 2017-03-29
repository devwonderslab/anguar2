import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Http, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class FriendService  {

    protected options: RequestOptions;

    constructor( protected http: Http ) {
        let token = localStorage.getItem('token');
        if (token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + token});
            console.log(headers)
            this.options = new RequestOptions({ headers: headers });
        }
    }
    
    getFriends() {
        return this.http.get('http://localhost:3001/friend/', this.options).map((response: Response) => response.json());
    }

    getRequests(){
        return this.http.get('http://localhost:3001/friend/requests', this.options).map((response: Response) => response.json());
    }

    add(id: string) {
        return this.http.post('http://localhost:3001/friend/' + id, this.options).map((response: Response) => response.json());
    }

    remove(id: string){
        return this.http.delete('http://localhost:3001/friend/' + id, this.options).map((response: Response) => response.json());
    }

    acceptRequest(id: string) {
        return this.http.post('http://localhost:3001/friend/accept/' + id, this.options).map((response: Response) => response.json());
    }


}