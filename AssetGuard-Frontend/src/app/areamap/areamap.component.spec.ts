import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreamapComponent } from './areamap.component';

describe('AreamapComponent', () => {
  let component: AreamapComponent;
  let fixture: ComponentFixture<AreamapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreamapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreamapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
