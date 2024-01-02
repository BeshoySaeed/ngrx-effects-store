import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayErrorLogsComponent } from './display-error-logs.component';

describe('DisplayErrorLogsComponent', () => {
  let component: DisplayErrorLogsComponent;
  let fixture: ComponentFixture<DisplayErrorLogsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisplayErrorLogsComponent]
    });
    fixture = TestBed.createComponent(DisplayErrorLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
