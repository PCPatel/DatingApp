import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_models/user';
import { UserService } from 'src/app/_service/user.service';
import { AlertifyService } from './../_service/alertify.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ListsResolver implements Resolve<User[]>{

  pageNumber = 1;
  pageSize = 5;
  likesParam = 'Likers';

  constructor(private userService: UserService, private router: Router, private alertifyService: AlertifyService) {

  }

  resolve(route: ActivatedRouteSnapshot): Observable<User[]> {
    return this.userService.getUsers(this.pageNumber, this.pageSize, null, this.likesParam).pipe(
      catchError(error => {
        this.alertifyService.error('Problem retriving data');
        this.router.navigate(['']);
        return of(null);
      })
    );
  }
}
