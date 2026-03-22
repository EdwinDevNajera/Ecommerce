import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';

import { CartService } from '../../services/cart.service';
import { FormsModule } from '@angular/forms';
import { CartItemListComponent } from '../../components/cart-item-list/cart-item-list.component';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-cart',
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    InputNumberModule,
    FormsModule,
    RouterModule
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  constructor(public cartService: CartService) {
  }
  

  updateQty(item: any, value: number) {
    item.qty = value;
    // forzamos actualización
    // this.cartService.addToCart({ ...item, qty: 0 });

    this.cartService.saveChanges()
  }
}
