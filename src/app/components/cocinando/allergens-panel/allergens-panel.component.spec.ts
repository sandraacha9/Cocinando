import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllergensPanelComponent } from './allergens-panel.component';

describe('AllergensPanelComponent', () => {
  let component: AllergensPanelComponent;
  let fixture: ComponentFixture<AllergensPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllergensPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllergensPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
