import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

import { AppConfig } from '../app.config';
import {User} from "../models/user";
import {Router} from "@angular/router";
import {MenuService} from "../core/menu.service";

@Injectable()
export class AuthenticationService {
  constructor(private router: Router,
              private http: Http,
              private config: AppConfig,
              private menu: MenuService
  ) { }

  user:User;

  login(username: string, password: string) {


    let user:User = Object.assign({},{
      _id:'1',
      firstName: 'Admin',
      lastName: 'Admin',
      username: username,
      password: password
    })
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.router.navigate(['/']);

    // return this.http.post(this.config.apiUrl + '/users/authenticate', { username: username, password: password })
    //   .map((response: Response) => {
    //     // login successful if there's a jwt token in the response
    //     let user = response.json();
    //     if (user && user.token) {
    //       // store user details and jwt token in local storage to keep user logged in between page refreshes
    //       localStorage.setItem('currentUser', JSON.stringify(user));
    //     }
    //   });


  }

  logout() {
    this.menu.resetMenu();

    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);

  }

  public isAuthenticated(): boolean {

    const user = localStorage.getItem('currentUser');
    return (user != null);
  }


  public handleAuthentication(): void {

  }
}
