import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiocheckComponent } from './radiocheck.component';

describe('RadiocheckComponent', () => {
  let component: RadiocheckComponent;
  let fixture: ComponentFixture<RadiocheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadiocheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadiocheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
