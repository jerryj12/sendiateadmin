import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTaxiTypeComponent } from './edit-taxi-type.component';

describe('EditTaxiTypeComponent', () => {
  let component: EditTaxiTypeComponent;
  let fixture: ComponentFixture<EditTaxiTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTaxiTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTaxiTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
