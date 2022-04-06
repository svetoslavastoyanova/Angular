import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeDetailPageComponent } from './theme-detail-page.component';

describe('ThemeDetailPageComponent', () => {
  let component: ThemeDetailPageComponent;
  let fixture: ComponentFixture<ThemeDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
