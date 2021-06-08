import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CocinandoComponent } from './cocinando.component';

describe('CocinandoComponent', () => {
  let component: CocinandoComponent;
  let fixture: ComponentFixture<CocinandoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CocinandoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CocinandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
