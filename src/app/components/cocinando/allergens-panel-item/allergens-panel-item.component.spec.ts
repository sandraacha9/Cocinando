import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergensPanelItemComponent } from './allergens-panel-item.component';

describe('AllergensPanelItemComponent', () => {
  let component: AllergensPanelItemComponent;
  let fixture: ComponentFixture<AllergensPanelItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllergensPanelItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergensPanelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
