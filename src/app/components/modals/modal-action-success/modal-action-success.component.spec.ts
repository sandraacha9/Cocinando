import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalActionSuccessComponent } from './modal-action-success.component';

describe('ModalActionSuccessComponent', () => {
  let component: ModalActionSuccessComponent;
  let fixture: ComponentFixture<ModalActionSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalActionSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalActionSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
