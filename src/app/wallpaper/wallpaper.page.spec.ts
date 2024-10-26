import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WallpaperPage } from './wallpaper.page';

describe('WallpaperPage', () => {
  let component: WallpaperPage;
  let fixture: ComponentFixture<WallpaperPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WallpaperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
