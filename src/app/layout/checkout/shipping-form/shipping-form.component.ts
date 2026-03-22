import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-shipping-form',
  imports: [ReactiveFormsModule, CommonModule, InputTextModule],
  templateUrl: './shipping-form.component.html',
  styleUrl: './shipping-form.component.css',
})
export class ShippingFormComponent {
  // shippingForm!: FormGroup;

  // constructor(private fb: FormBuilder) {}

  // ngOnInit() {
  //   this.shippingForm = this.fb.group({
  //     fullName: ['', Validators.required],
  //     address: ['', Validators.required],
  //     city: ['', Validators.required],
  //     state: ['', Validators.required],
  //     zip: ['', [
  //       Validators.required,
  //       Validators.pattern(/^[0-9]{5}$/)
  //     ]],
  //     phone: ['', [
  //       Validators.required,
  //       Validators.pattern(/^[0-9]{10}$/)
  //     ]]
  //   });
  // }

  // isInvalid(field: string) {
  //   const control = this.shippingForm.get(field);
  //   return control?.invalid && control?.touched;
  // }
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      fullName: ['', Validators.required],
      address: ['', Validators.required],
      zip: ['', [Validators.required, Validators.pattern(/^[0-9]{5}$/)]],
      city: ['', Validators.required],
      state: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    });
  }

  isInvalid(field: string) {
    const control = this.form.get(field);
    return control?.invalid && (control?.touched || control?.dirty);
  }

  onlyNumbers(event: any) {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, '');

    const controlName = input.getAttribute('formcontrolname');
    this.form.get(controlName)?.setValue(input.value, { emitEvent: false });
  }
}
