import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TimezoneService {

  token: string;

  constructor(
    public http: HttpClient,
    private route: Router
  ) { }

  /**** ****/
  /* Get Timezone */
  /**** ****/
  getTimezone(timezone) {

    const url = 'https://test1tuten.herokuapp.com/zone';

    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    // const formData = new FormData();

    console.log(timezone);

    // formData.append('time', time);
    // formData.append('utc', utc);

    // const form = {
    //     password,
    //     app: 'APP_BCK',
    //     Accept: 'application/json'
    // };

    return this.http.post( url, timezone )
                .pipe(map( (resp: any) => {
                  console.log(resp.response.time);
                  return resp;
                })).pipe(
                  catchError( err => {
                    return throwError( err );
                }));

  }

}
