import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CartService } from '../../services/cart.service';
import { RouterModule } from '@angular/router';
import { CartItemListComponent } from '../../components/cart-item-list/cart-item-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-overlay',
  imports: [CommonModule, ButtonModule, CartItemListComponent, RouterModule],
  templateUrl: './cart-overlay.component.html',
  styleUrl: './cart-overlay.component.css'
})
export class CartOverlayComponent {
  @Input() cartItems: any[] = [];

  constructor(public cartService: CartService, private router: Router) {}

  get total() {
    return this.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  }

  goToCart() {
    this.router.navigate(['/cart-page']);
  }
}
