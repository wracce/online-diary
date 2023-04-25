import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayRecordComponent } from './day-record.component';

describe('DayRecordComponent', () => {
  let component: DayRecordComponent;
  let fixture: ComponentFixture<DayRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayRecordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
