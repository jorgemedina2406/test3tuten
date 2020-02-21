import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public _userService: UserService,
               public router: Router ) { }

  ngOnInit() {
  }

  login( forma: NgForm) {

    if ( forma.invalid ) {
      return;
    }

    const email = forma.value.email;
    const password = forma.value.password;

    this._userService.login(email, password)
                  .subscribe( resp => {
                    this.router.navigate(['/info/usuario']);
                  });

  }

}
