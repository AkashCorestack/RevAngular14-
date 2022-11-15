import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tst1Component } from './tst1.component';

describe('Tst1Component', () => {
  let component: Tst1Component;
  let fixture: ComponentFixture<Tst1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tst1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tst1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
