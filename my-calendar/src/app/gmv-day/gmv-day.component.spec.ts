import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GmvDayComponent } from './gmv-day.component';

describe('GmvDayComponent', () => {
  let component: GmvDayComponent;
  let fixture: ComponentFixture<GmvDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GmvDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GmvDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
