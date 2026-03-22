# 🛒 Ecommerce Angular App

Aplicación ecommerce desarrollada con Angular enfocada en arquitectura modular, experiencia de usuario y flujo completo de compra.

---

## 🚀 Demo

<!-- LINK -->

---

## 📸 Preview

<!-- SCRENSHOOTS -->

---

## 🧱 Tecnologías utilizadas

* ⚡ Angular (Standalone Components)
* 🧠 Signals (manejo de estado)
* 📝 Reactive Forms
* 🎨 CSS moderno
* 💾 LocalStorage (persistencia)
* 🔧 TypeScript

---

## 🛍️ Funcionalidades

### 🛒 Carrito de compras

* Agregar productos
* Manejo de cantidades
* Eliminación de productos
* Persistencia en localStorage
* Cálculo dinámico de totales

---

### 💳 Checkout completo

* Formulario de envío validado
* Formulario de pago con:

  * Validación de tarjeta (algoritmo Luhn)
  * Formato MM/YY
  * Validación de CVV
* Selección de método de pago

---

### 🎨 UI / UX

* Diseño responsive
* Tema claro / oscuro dinámico
* Componentes desacoplados y reutilizables

---

### 🔐 Autenticación

* Login simulado
* Persistencia de sesión

---

### ⚙️ Arquitectura

* Componentes standalone
* Servicios centralizados (CartService)
* Separación de responsabilidades
* Estructura escalable

---

## 📁 Estructura del proyecto

```
src/app
 ├── components/
 │    ├── checkout/
 │    │    ├── shipping-form/
 │    │    ├── payment-card/
 │    │    ├── order-summary/
 │    │    └── payment-method-selector/
 │
 ├── pages/
 │    ├── home/
 │    ├── cart/
 │    ├── checkout/
 │    └── login/
 │
 ├── services/
 │    └── cart.service.ts
```

---

## 🧪 Flujo de compra

1. Usuario agrega productos al carrito
2. Visualiza resumen de compra
3. Completa formulario de envío
4. Ingresa método de pago
5. Simulación de pago
6. Limpieza de carrito y redirección

---

## 🔮 Mejoras futuras

* 💳 Integración con Paypal / MercadoPago / Stripe
* 🔐 Autenticación real (JWT)
* 🧾 Generación de órdenes
* 📦 Backend (.NET Core)
* 🎟 Sistema de cupones

---

## 🧠 Aprendizajes

* Manejo de estado con signals
* Arquitectura desacoplada en Angular
* Validaciones avanzadas en formularios
* Flujo real de ecommerce

---

## 👨‍💻 Autor

**Edwin Najera**

* GitHub: https://github.com/EdwinDevNajera

---

## ⭐ Notas

Este proyecto fue desarrollado como práctica avanzada para portafolio, simulando un flujo real de ecommerce listo para escalar a producción.
