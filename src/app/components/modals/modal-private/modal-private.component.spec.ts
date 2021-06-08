import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPrivateComponent } from './modal-private.component';

describe('ModalRegisterComponent', () => {
  let component: ModalPrivateComponent;
  let fixture: ComponentFixture<ModalPrivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPrivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
