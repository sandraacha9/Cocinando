import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyOrdersOrderDetailsComponent } from './private-zone-details.component';

describe('MyOrdersOrderDetailsComponent', () => {
  let component: MyOrdersOrderDetailsComponent;
  let fixture: ComponentFixture<MyOrdersOrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyOrdersOrderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyOrdersOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
