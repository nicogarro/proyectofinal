import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkiilComponent } from './skiil.component';

describe('SkiilComponent', () => {
  let component: SkiilComponent;
  let fixture: ComponentFixture<SkiilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkiilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkiilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
