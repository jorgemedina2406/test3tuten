import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router } from '@angular/router';
import { TimezoneService } from '../services/timezone/timezone.service';
import { NgForm } from '@angular/forms';
import { Timezone } from '../models/timezone';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.css']
})
export class TimezoneComponent implements OnInit {

  public data = false;
  public time;

  constructor(
    public _userService: UserService,
    public _timezoneService: TimezoneService
  ) { }

  ngOnInit() {}

  timezone(forma: NgForm) {

    const time = forma.value.time;
    const utc = forma.value.utc;

    const timezone = new Timezone( time, utc );

    this._timezoneService.getTimezone( timezone )
    .subscribe( (resp: any) => {
      console.log(resp);
      this.data = true;
      this.time = resp.response.time;
    });

  }

}
