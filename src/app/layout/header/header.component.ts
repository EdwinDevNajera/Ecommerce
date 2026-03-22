import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { CartOverlayComponent } from '../cart-overlay/cart-overlay.component';
import { CartService } from '../../services/cart.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, InputTextModule, ButtonModule, BadgeModule, OverlayPanelModule,
    CartOverlayComponent, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(public cartService: CartService) {}

  cartCount = 3;
  cartItems = [
    { name: 'Laptop', price: 25000, qty: 1 },
    { name: 'Audífonos', price: 3000, qty: 2 }
  ];

  toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');

  if (current === 'dark') {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    }
  }

  ngOnInit() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }



}
