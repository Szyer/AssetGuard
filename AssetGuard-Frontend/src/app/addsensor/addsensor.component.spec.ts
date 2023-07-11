import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsensorComponent } from './addsensor.component';

describe('AddsensorComponent', () => {
  let component: AddsensorComponent;
  let fixture: ComponentFixture<AddsensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddsensorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddsensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
