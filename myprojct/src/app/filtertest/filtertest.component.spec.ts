import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltertestComponent } from './filtertest.component';

describe('FiltertestComponent', () => {
  let component: FiltertestComponent;
  let fixture: ComponentFixture<FiltertestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltertestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltertestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
