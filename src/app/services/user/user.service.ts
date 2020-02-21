import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  token: string;

  constructor(
    public http: HttpClient,
    private route: Router
  ) {
    this.loadStorage();
  }

  /**** ****/
  /* Login */
  /**** ****/
  login(email: string, password: string) {

    const url = 'https://dev.tuten.cl/TutenREST/rest/user/' + email;

    const headers = new HttpHeaders().set('password', password).set('app', 'APP_BCK');

    const form = {
        password,
        app: 'APP_BCK',
        Accept: 'application/json'
    };

    return this.http.put( url, form, { headers: headers })
                .pipe(map( (resp: any) => {
                  this.token = resp.sessionTokenBck;
                  this.saveStorage( resp.sessionTokenBck );
                  return true;
                })).pipe(
                  catchError( err => {
                    swal.fire( 'Credenciales Invalidas', 'Por favor verifique e intente de nuevo', 'error' );
                    return throwError( err );
                }));

  }

  /**** ****/
  /* Verify is Login */
  /**** ****/
  isLogin() {

    this.loadStorage();

    return ( this.token.length > 5 ) ? true : false;

  }

  /************* *************/
  /* Get bookings information */
  /************* *************/
  getInfo() {

    let url = 'https://dev.tuten.cl/TutenREST/rest/user/contacto%40tuten.cl/bookings?current=true';

    const headers = new HttpHeaders()
                    .set('adminemail', 'testapis@tuten.cl')
                    .set('app', 'APP_BCK')
                    .set('token', this.token);

    return this.http.get( url, { headers: headers } );

  }

  /************* *************/
  /* Save token information in LocalStorage */
  /************* *************/
  saveStorage( token: string ) {

    localStorage.setItem('token', token );

    this.token = token;
  }

  /************* *************/
  /* Get the token information */
  /************* *************/
  loadStorage() {

    if ( localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    } else {
      this.token = '';
    }

  }

  /**** ****/
  /* Logout */
  /**** ****/
  logout(){

    this.token = '';
    localStorage.removeItem('token');
    this.route.navigate(['/']);
    swal.fire( 'Sesión cerrada', '', 'error' );

  }

}
