import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from '../user/user.service';
import swal from 'sweetalert2';

@Injectable()
export class LoginGuardGuard implements CanActivate {

  constructor(
    public _userService: UserService,
    public router: Router
  ) {  }

  canActivate() {

    if ( this._userService.isLogin() ) {
      return true;
    } else {
      swal.fire( 'No posees permisos', 'Debes iniciar sesión para ingresar a esta sección', 'error' );
      this.router.navigate(['/']);
      return false;
    }

  }
}
