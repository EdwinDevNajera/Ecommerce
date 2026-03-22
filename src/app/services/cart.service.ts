import { Injectable, signal, computed } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private _items = signal<any[]>([]);

  items = this._items.asReadonly();

  total = computed(() =>
    this._items().reduce((acc, item) => acc + item.price * item.qty, 0),
  );

  count = computed(() =>
    this._items().reduce((acc, item) => acc + item.qty, 0),
  );

  constructor() {
    this.loadFromStorage();
  }

  addToCart(product: any) {
    const items = [...this._items()];
    // const existing = items.find(i => i.name === product.name);
    const existing = items.find((i) => i.id === product.id);

    if (existing) {
      existing.qty += 1;
    } else {
      items.push({ ...product, qty: 1 });
    }

    this._items.set(items);
    this.saveToStorage();
  }

  removeFromCart(product: any) {
    const items = this._items().filter((i) => i.name !== product.name);
    this._items.set(items);
    this.saveToStorage();
  }

  private saveToStorage() {
    localStorage.setItem('cart', JSON.stringify(this._items()));
  }

  private loadFromStorage() {
    const data = localStorage.getItem('cart');
    if (data) {
      this._items.set(JSON.parse(data));
    }
  }

  saveChanges() {
    this._items.set([...this._items()]);
    this.saveToStorage();
  }

  increase(item: any) {
    item.qty++;
    this.saveChanges();
  }

  decrease(item: any) {
    if (item.qty > 1) {
      item.qty--;
      this.saveChanges();
    }
  }

  clearCart() {
    this._items.set([]);
    localStorage.removeItem('cart');
  }
}
