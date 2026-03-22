import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-payment-method-selector',
  imports: [FormsModule],
  templateUrl: './payment-method-selector.component.html',
  styleUrl: './payment-method-selector.component.css'
})
export class PaymentMethodSelectorComponent {
  selected: 'card' | 'spin' = 'card';

  @Output() methodChange = new EventEmitter<string>();

  select(method: 'card' | 'spin') {
    this.selected = method;
    this.methodChange.emit(method);
  }
}
