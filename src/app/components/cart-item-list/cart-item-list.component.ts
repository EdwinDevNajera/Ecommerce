import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item-list',
  imports: [CommonModule,
    ButtonModule,
    InputNumberModule,
    FormsModule,
  RouterModule],
  templateUrl: './cart-item-list.component.html',
  styleUrl: './cart-item-list.component.css'
})
export class CartItemListComponent {

  @Input() items: any[] = [];
  @Input() editable: boolean = false;

  constructor(public cartService: CartService) {}

  updateQty(item: any, value: number) {
    item.qty = value;
    this.cartService.saveChanges();
  }
}