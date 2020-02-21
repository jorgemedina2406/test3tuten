import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public info: any;
  public searchText: string;

  constructor(
    public _userService: UserService,
    public route: ActivatedRoute,

  ) { 
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.getInfo();
    });
  }

  ngOnInit() {
    this.getInfo();
  }

  getInfo() {

    this._userService.getInfo()
    .subscribe( (resp: any) => {
      this.info = resp;
    });

  }

  logout() {
    this._userService.logout();
  }

}
