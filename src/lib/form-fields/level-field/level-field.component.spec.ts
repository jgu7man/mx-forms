import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MxLevelFieldComponent } from './level-field.component';

describe('LevelFieldComponent', () => {
  let component: MxLevelFieldComponent;
  let fixture: ComponentFixture<MxLevelFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MxLevelFieldComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MxLevelFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
