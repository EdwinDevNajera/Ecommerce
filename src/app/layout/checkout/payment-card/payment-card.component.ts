import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-payment-card',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './payment-card.component.html',
  styleUrl: './payment-card.component.css',
})
export class PaymentCardComponent {
  paymentForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.paymentForm = this.fb.group({
      cardNumber: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[0-9]{13,19}$/),
          this.luhnValidator,
        ],
      ],
      cardName: ['', Validators.required],
      expiry: [
        '',
        [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)],
      ],
      cvv: ['', [Validators.required, Validators.pattern(/^[0-9]{3,4}$/)]],
    });
  }

  // onlyNumbers(event: any) {
  //   const input = event.target;
  // input.value = input.value.replace(/[^0-9]/g, '');

  // const controlName = input.getAttribute('formcontrolname');
  // this.paymentForm.get(controlName)?.setValue(input.value, { emitEvent: false });
  // }

  onlyNumbers(field: string, event: any) {
    const value = event.target.value.replace(/[^0-9]/g, '');
    this.paymentForm.get(field)?.setValue(value);
  }

  isInvalid(field: string) {
    const control = this.paymentForm.get(field);
    return control?.invalid && (control?.touched || control?.dirty);
  }

  formatExpiry(event: any) {
    let value = event.target.value.replace(/\D/g, '');

    if (value.length >= 2) {
      let month = value.substring(0, 2);

      // 🔥 limitar mes válido
      if (parseInt(month, 10) > 12) {
        month = '12';
      }

      value = month + '/' + value.substring(2, 4);
    }

    event.target.value = value;
  }

  // 🔥 VALIDADOR LUHN (tarjeta real)
  luhnValidator(control: AbstractControl) {
    const value = control.value;
    if (!value) return null;

    let sum = 0;
    let shouldDouble = false;

    for (let i = value.length - 1; i >= 0; i--) {
      let digit = parseInt(value[i], 10);

      if (shouldDouble) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }

      sum += digit;
      shouldDouble = !shouldDouble;
    }

    return sum % 10 === 0 ? null : { invalidCard: true };
  }
}
