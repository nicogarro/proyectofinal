import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramoComponent } from './programo.component';

describe('ProgramoComponent', () => {
  let component: ProgramoComponent;
  let fixture: ComponentFixture<ProgramoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgramoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
