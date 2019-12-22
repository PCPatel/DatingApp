import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from './../../environments/environment';
import { User } from 'src/app/_models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.apiUrl + 'auth/';
  jwtHelper = new JwtHelperService();
  decodedToken: any;
  currentUser: User;
  photoUrl = new BehaviorSubject<string>('../../assets/user.png');
  currentPhotoUrl = this.photoUrl.asObservable();

  changeMemberPhoto(photoUrl: string) {
    this.photoUrl.next(photoUrl);
  }

  constructor(private http: HttpClient) { }

  login(model: any) {

    const headerDict = { 'content-type': 'application/json' };
    const requestOptions: any = { headers: new Headers(headerDict) };

    return this.http.post(this.baseUrl + 'login', model, requestOptions)
      .pipe(map((response: any) => {
        console.log(response);
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
        this.decodedToken = this.jwtHelper.decodeToken(response.token);
        this.currentUser = response.user;

        this.changeMemberPhoto(this.currentUser.photoUrl);
        // console.log(this.decodedToken);
      }));
  }

  register(user: User) {
    return this.http.post(this.baseUrl + 'register', user);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    if (token) {
      return !this.jwtHelper.isTokenExpired(token);
    }
    return false;
  }

}
