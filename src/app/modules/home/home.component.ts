import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule, CardModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  @ViewChild('carousel', { static: false }) carousel!: ElementRef;

  constructor(private cartService: CartService) {  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  products = [
    {
      id: 1,
      name: 'Audífonos Pro',
      description: 'TV Y Video',
      price: 699,
      image: 'images/TV.png'
    },
    {
      id: 2,
      name: 'Audífonos Mini',
      description: 'Componentes',
      price: 503,
      image: 'images/Componentes.png'
    },
    {
      id: 3,
      name: 'Audífonos Bass',
      description: 'Office',
      price: 113,
      image: 'images/Office.png'
    },
    {
      id: 4,
      name: 'Audífonos Max',
      description: 'Audifonos',
      price: 237,
      image: 'images/Audifono.png'
    }
  ];

  scrollLeft() {
    this.carousel.nativeElement.scrollBy({
      left: -300,
      behavior: 'smooth'
    });
  }

  scrollRight() {
    this.carousel.nativeElement.scrollBy({
      left: 300,
      behavior: 'smooth'
    });
  }

  

  electronic = [
    { id: 1, name: 'Audifono', price: 1700, image: 'images/Audifono.png' },
    { id: 2, name: 'Reloj', price: 1900, image: 'images/Reloj.png' },
    { id: 3, name: 'Bocina', price: 1500, image: 'images/Bocina.png' },
    { id: 4, name: 'Computadora', price: 2100, image: 'images/Computadora.png' },
    { id: 5, name: 'Multimetro', price: 1800, image: 'images/Multimetro.png' },
    { id: 6, name: 'Soporte', price: 13800, image: 'images/Soporte.png' },
    { id: 7, name: 'Celular', price: 14800, image: 'images/Celular.png' },
    { id: 8, name: 'Iluminacion', price: 15800, image: 'images/Iluminacion.png' },
    { id: 9, name: 'Microfono', price: 16800, image: 'images/Microfono.png' },

  ];


  watch = [
    { id: 1, name: 'Reloj A', price: 1700, image: 'images/Reloj.png' },
    { id: 2, name: 'Reloj AA', price: 1900, image: 'images/Reloj.png' },
    { id: 3, name: 'Reloj X', price: 1500, image: 'images/Reloj.png' },
    { id: 4, name: 'Reloj L', price: 2100, image: 'images/Reloj.png' },
    { id: 5, name: 'Reloj S', price: 1800, image: 'images/Reloj.png' },
    { id: 6, name: 'Reloj W', price: 13800, image: 'images/Reloj.png' },
    { id: 7, name: 'Reloj Y', price: 14800, image: 'images/Reloj.png' },
    { id: 8, name: 'Reloj X', price: 15800, image: 'images/Reloj.png' },
    { id: 9, name: 'Reloj Z', price: 16800, image: 'images/Reloj.png' },

  ];

visibleWatch: any[] = [];
currentIndex = 0;
itemsPerView = 7;

ngOnInit() {
  this.updateView();
}

updateView() {
  this.visibleWatch = this.watch.slice(
    this.currentIndex,
    this.currentIndex + this.itemsPerView
  );
}

// next() {
//   if (this.currentIndex + this.itemsPerView < this.electronic.length) {
//     this.currentIndex += this.itemsPerView;
//     this.updateView();
//   }
// }

// prev() {
//   if (this.currentIndex - this.itemsPerView >= 0) {
//     this.currentIndex -= this.itemsPerView;
//     this.updateView();
//   }
// }

next() {
  if (this.currentIndex < this.electronic.length - this.itemsPerView) {
    this.currentIndex++;
    this.updateView();
  }
}

prev() {
  if (this.currentIndex > 0) {
    this.currentIndex--;
    this.updateView();
  }
}

}
