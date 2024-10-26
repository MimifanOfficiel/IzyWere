import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PopupsPage } from './popups.page';

describe('PopupsPage', () => {
  let component: PopupsPage;
  let fixture: ComponentFixture<PopupsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
