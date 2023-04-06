import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesktopPageComponent } from './desktop-page.component';

describe('DesktopPageComponent', () => {
  let component: DesktopPageComponent;
  let fixture: ComponentFixture<DesktopPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesktopPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesktopPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
