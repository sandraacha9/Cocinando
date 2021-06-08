import { Component, OnInit } from '@angular/core';
import { AppService } from '../../core/services/app/app.service';
import { SidebarService } from '../../core/services/sidebar/sidebar.service';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.scss']
})
export class UserLogoutComponent implements OnInit {

  constructor(
    private appService: AppService,
    private sidebarService: SidebarService
  ) { }

  ngOnInit() {
  }

  logOut() {
    this.appService.logOut();
  }

  logOutSidebar() {
    this.sidebarService.setSidebarVisibility(false);
    this.appService.logOut();
  }
}
