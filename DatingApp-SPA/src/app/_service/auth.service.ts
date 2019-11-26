import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:5000/auth/';

  constructor(private http: HttpClient) { }

  login(model: any) {

    const headerDict = { 'content-type': 'application/json' };
    const requestOptions: any = { headers: new Headers(headerDict) };

    return this.http.post(this.baseUrl + 'login', model, requestOptions)
      .pipe(map((response: any) => {
        console.log(response);
        localStorage.setItem('token', response.token);
      }));
  }

  register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }
}
