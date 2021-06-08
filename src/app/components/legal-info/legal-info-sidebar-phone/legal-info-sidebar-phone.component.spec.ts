import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalInfoSidebarPhoneComponent } from './legal-info-sidebar-phone.component';

describe('LegalInfoSidebarPhoneComponent', () => {
  let component: LegalInfoSidebarPhoneComponent;
  let fixture: ComponentFixture<LegalInfoSidebarPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalInfoSidebarPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalInfoSidebarPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
