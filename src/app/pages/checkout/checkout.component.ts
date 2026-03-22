import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

import { CartService } from '../../services/cart.service';
import { PaymentCardComponent } from '../../layout/checkout/payment-card/payment-card.component';
import { ShippingFormComponent } from '../../layout/checkout/shipping-form/shipping-form.component';
import { PaymentMethodSelectorComponent } from '../../layout/checkout/payment-method-selector/payment-method-selector.component';
import { OrderSummaryComponent } from '../../layout/checkout/order-summary/order-summary.component';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-checkout',
  imports: [
    CommonModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    RouterModule,
    PaymentCardComponent,
    ShippingFormComponent,
    PaymentMethodSelectorComponent,
    OrderSummaryComponent
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {

  form = {
    name: '',
    email: '',
    address: '',
    city: '',
    zip: ''
  };

  constructor(public cartService: CartService, private router: Router) {
    console.log(cartService.items)
  }

  placeOrder() {
    console.log('Orden enviada', {
      customer: this.form,
      items: this.cartService.items(),
      total: this.cartService.total()
    });

    alert('Pedido realizado');
  }

  paymentMethod: 'card' | 'spin' = 'card';

  onMethodChange(method: string) {
    this.paymentMethod = method as any;
  }

  handleCheckout() {


  alert('✅ Pago realizado con éxito');

  this.cartService.clearCart();

  this.router.navigate(['/']);

}

}