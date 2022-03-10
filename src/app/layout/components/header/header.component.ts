import { Component, OnInit } from '@angular/core';
import {User} from "../../../model/user";
import {LoginService} from "../../../shared/services/login/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User | undefined;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.user = this.loginService.getUser();
  }

  clickEvent() {
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
