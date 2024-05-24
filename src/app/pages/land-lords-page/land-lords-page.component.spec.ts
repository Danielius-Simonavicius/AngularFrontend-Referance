import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandLordsPageComponent } from './land-lords-page.component';

describe('LandLordsPageComponent', () => {
  let component: LandLordsPageComponent;
  let fixture: ComponentFixture<LandLordsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandLordsPageComponent]
    });
    fixture = TestBed.createComponent(LandLordsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
