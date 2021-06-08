import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMiniCartComponent } from './modal-mini-cart.component';

describe('ModalMiniCartComponent', () => {
  let component: ModalMiniCartComponent;
  let fixture: ComponentFixture<ModalMiniCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalMiniCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalMiniCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
