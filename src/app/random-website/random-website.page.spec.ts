import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RandomWebsitePage } from './random-website.page';

describe('RandomWebsitePage', () => {
  let component: RandomWebsitePage;
  let fixture: ComponentFixture<RandomWebsitePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomWebsitePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
