import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SidebarService {
  private sidebarVisible: boolean;
  private messageSource = new BehaviorSubject<boolean>(this.sidebarVisible);
  onSidebarVisibleChange = this.messageSource.asObservable();
  constructor() {
    this.sidebarVisible = false;
  }

  setSidebarVisibility(state: boolean): void {
    this.sidebarVisible = state;
    this.messageSource.next(this.sidebarVisible);
  }
}
