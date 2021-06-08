import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PrivateZoneListComponent } from './private-zone-list.component';

describe('PrivateZoneListComponent', () => {
  let component: PrivateZoneListComponent;
  let fixture: ComponentFixture<PrivateZoneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrivateZoneListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivateZoneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
