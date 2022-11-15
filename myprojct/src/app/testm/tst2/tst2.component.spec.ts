import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tst2Component } from './tst2.component';

describe('Tst2Component', () => {
  let component: Tst2Component;
  let fixture: ComponentFixture<Tst2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tst2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tst2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
