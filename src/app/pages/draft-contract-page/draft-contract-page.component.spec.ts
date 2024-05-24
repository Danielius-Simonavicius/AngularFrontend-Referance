import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftContractPageComponent } from './draft-contract-page.component';

describe('DraftContractPageComponent', () => {
  let component: DraftContractPageComponent;
  let fixture: ComponentFixture<DraftContractPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DraftContractPageComponent]
    });
    fixture = TestBed.createComponent(DraftContractPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
