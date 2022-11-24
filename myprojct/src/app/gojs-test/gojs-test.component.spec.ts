import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GojsTestComponent } from './gojs-test.component';

describe('GojsTestComponent', () => {
  let component: GojsTestComponent;
  let fixture: ComponentFixture<GojsTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GojsTestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GojsTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
