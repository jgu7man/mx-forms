import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MxDefaultFieldComponent } from './default-field.component';

describe('DefaultFieldComponent', () => {
  let component: MxDefaultFieldComponent;
  let fixture: ComponentFixture<MxDefaultFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MxDefaultFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MxDefaultFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
