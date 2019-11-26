import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() CancelRegister = new EventEmitter<boolean>();
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(
      () => { },
      (error) => { console.log(error); }
    );
  }

  cancelRegister() {
    this.CancelRegister.emit(false);
  }
}
