import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PrivateZoneDetailsItemComponent } from './private-zone-details-item.component';

describe('PrivateZoneDetailsItemComponent', () => {
  let component: PrivateZoneDetailsItemComponent;
  let fixture: ComponentFixture<PrivateZoneDetailsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateZoneDetailsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateZoneDetailsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
