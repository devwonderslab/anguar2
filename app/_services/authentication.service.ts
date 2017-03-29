import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

let headers = new Headers();
headers.append( 'Content-Type', 'application/json' );

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    login(username: string, password: string) {
        return this
            .http
            .post(
                'http://localhost:3001/access-token',
                JSON.stringify({
                        email: username,
                        password: password
                    }),
                {
                    headers: headers
                }
            )
            .map((response: Response) => {
                let data = response.json().result[0];
                if (data && data.token && data.user) {
                    localStorage.setItem('token', data.token.token);
                    localStorage.setItem('user', JSON.stringify(data.user));
                }
            });
    }

    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
    }
}