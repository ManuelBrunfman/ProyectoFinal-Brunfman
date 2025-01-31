# E-commerce React - **Mi tienda virtual**

Este proyecto es un **e-commerce** desarrollado con **React**, **Firebase (Cloud Firestore)** y **Context API**. Permite navegar un catálogo de productos (filtrados por categoría), ver el detalle, agregar ítems al carrito y finalizar la compra generando una orden en Firestore.

---

## 1. Descripción de Funcionalidades

- **Catálogo de Productos**:  
  - Los productos se obtienen de la colección `items` de Firestore.
  - Pueden filtrarse por categoría mediante `React Router`.

- **Detalle de Producto**:  
  - Cada producto muestra su imagen, nombre, precio y descripción (si aplica).
  - Incluye un contador para seleccionar cuántas unidades agregar al carrito.

- **Carrito de Compras**:
  - Se visualizan los productos agregados, con la cantidad y subtotal.
  - Botones para eliminar ítems o vaciar el carrito.
  - Ícono de carrito (CartWidget) en la barra de navegación mostrando la cantidad de productos.

- **Checkout**:
  - Formulario para completar datos de comprador (nombre, email, teléfono).
  - Genera una orden en Firestore (colección `orders`) con el detalle de la compra.
  - Muestra el ID de la orden generada y vacía el carrito.

---

## 2. Tecnologías y Dependencias

- **[React](https://reactjs.org/)**: Biblioteca principal para la construcción de la interfaz.
- **[React Router DOM](https://reactrouter.com/)**: Manejo de rutas SPA.
- **[Firebase](https://firebase.google.com/)** (Firestore): Base de datos en la nube para productos y órdenes.
- **[Context API](https://reactjs.org/docs/context.html)**: Manejo global del estado del carrito.
- **CSS**: Hoja de estilos unificada para darle diseño sobrio y moderno.