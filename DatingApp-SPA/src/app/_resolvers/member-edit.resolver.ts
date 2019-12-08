import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from 'src/app/_service/user.service';
import { AlertifyService } from './../_service/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../_service/auth.service';

@Injectable()
export class MemberEditResolver implements Resolve<User>{

  constructor(private userService: UserService,
    private router: Router,
    private authService: AuthService,
    private alertifyService: AlertifyService) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
      catchError(error => {
        this.alertifyService.error('Problem retriving your data');
        this.router.navigate(['/members']);
        return of(null);
      })
    );
  }
}
