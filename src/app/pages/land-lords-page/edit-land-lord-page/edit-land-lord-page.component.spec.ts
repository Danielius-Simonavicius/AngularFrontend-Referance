import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditLandLordPageComponent } from './edit-land-lord-page.component';

describe('EditLandLordPageComponent', () => {
  let component: EditLandLordPageComponent;
  let fixture: ComponentFixture<EditLandLordPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditLandLordPageComponent]
    });
    fixture = TestBed.createComponent(EditLandLordPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
