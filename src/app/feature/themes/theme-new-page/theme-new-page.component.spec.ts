import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemeNewPageComponent } from './theme-new-page.component';

describe('ThemeNewPageComponent', () => {
  let component: ThemeNewPageComponent;
  let fixture: ComponentFixture<ThemeNewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThemeNewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThemeNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
