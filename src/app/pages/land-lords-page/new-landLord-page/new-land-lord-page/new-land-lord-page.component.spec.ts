import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLandLordPageComponent } from './new-land-lord-page.component';

describe('NewLandLordPageComponent', () => {
  let component: NewLandLordPageComponent;
  let fixture: ComponentFixture<NewLandLordPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewLandLordPageComponent]
    });
    fixture = TestBed.createComponent(NewLandLordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
