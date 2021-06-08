import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { SidebarService } from '../../../core/services/sidebar/sidebar.service';

@Component({
  selector: 'app-legal-info-sidebar-phone',
  templateUrl: './legal-info-sidebar-phone.component.html',
  styleUrls: ['./legal-info-sidebar-phone.component.scss']
})
export class LegalInfoSidebarPhoneComponent implements OnInit, OnDestroy {

  @Input() page?: string;

  sidebarShow: boolean;
  private subscription: Subscription;
  private paramSubscription: any;

  constructor
  (
    private sidebarService: SidebarService
  ) {
    this.sidebarShow = false;
  }

  ngOnInit() {
    this.subscription = new Subscription();
    this.subscription.add(this.paramSubscription);
    const onSidebarVisibleChangeSubs = this.sidebarService.onSidebarVisibleChange.subscribe(
      state => (this.sidebarShow = state)
    );
    this.subscription.add(onSidebarVisibleChangeSubs);
  }

  onSelectLink(): void {
    this.sidebarService.setSidebarVisibility(false);
  }

  hideSidebar() {
    this.sidebarService.setSidebarVisibility(false);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
