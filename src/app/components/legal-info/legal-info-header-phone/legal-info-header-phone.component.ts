import { Component, OnInit, Input } from '@angular/core';
import { SidebarService } from '../../../core/services/sidebar/sidebar.service';

@Component({
  selector: 'app-legal-info-header-phone',
  templateUrl: './legal-info-header-phone.component.html',
  styleUrls: ['./legal-info-header-phone.component.scss']
})
export class LegalInfoHeaderPhoneComponent implements OnInit {

  @Input() title?: string;

  constructor
  (
    private sidebarService: SidebarService
  ) { }

  ngOnInit() {
  }

  showSidebar() {
    this.sidebarService.setSidebarVisibility(true);
  }
}
