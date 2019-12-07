import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.apiUrl + 'auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;

  constructor(private http: HttpClient) { }

  login(model: any) {

    const headerDict = { 'content-type': 'application/json' };
    const requestOptions: any = { headers: new Headers(headerDict) };

    return this.http.post(this.baseUrl + 'login', model, requestOptions)
      .pipe(map((response: any) => {
        console.log(response);
        localStorage.setItem('token', response.token);
        this.decodedToken = this.jwtHelper.decodeToken(response.token);
        console.log(this.decodedToken);
      }));
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    if (token) {
      return !this.jwtHelper.isTokenExpired(token);
    }
    return false;
  }

}
