import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalInfoHeaderPhoneComponent } from './legal-info-header-phone.component';

describe('LegalInfoHeaderPhoneComponent', () => {
  let component: LegalInfoHeaderPhoneComponent;
  let fixture: ComponentFixture<LegalInfoHeaderPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalInfoHeaderPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalInfoHeaderPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
