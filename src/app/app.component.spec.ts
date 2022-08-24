import { NgOptimizedImage } from '@angular/common';
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [NgOptimizedImage],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should display an image of the cubic houses in Rotterdam', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const img = compiled.getElementsByTagName('img')[0];
    expect(img.src).toContain('/assets/cubic-house-rotterdam.jpg');
    expect(img.loading).toEqual('lazy');
  });
});
