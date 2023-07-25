import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCepComponent } from './form-cep.component';

describe('FormCepComponent', () => {
  let component: FormCepComponent;
  let fixture: ComponentFixture<FormCepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormCepComponent]
    });
    fixture = TestBed.createComponent(FormCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
