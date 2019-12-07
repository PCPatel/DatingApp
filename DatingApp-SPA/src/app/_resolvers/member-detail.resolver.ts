import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from 'src/app/_service/user.service';
import { AlertifyService } from './../_service/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MemberDetailResolver implements Resolve<User>{
  constructor(private userService: UserService, private router: Router, private alertifyService: AlertifyService) {

  }

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return this.userService.getUser(route.params.id).pipe(
      catchError(error => {
        this.alertifyService.error('Problem retriving data');
        this.router.navigate(['/members']);
        return of(null);
      })
    );
  }
}
