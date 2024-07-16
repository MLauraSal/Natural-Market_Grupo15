
import { productServices } from "../../index.js";





// Función para crear la tarjeta de producto en el DOM
const crearNuevoProducto = (img, nombre, precio, descripcion, categoria, proveedor, stock, id) => {
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("list");
    const contenido = `
      <div class="item">
        <div class="product-img">
          <img src="${img}" alt="imagen producto">
        </div>
        <div>
          <h2 class="product-title">${nombre}</h2>
          <p  class="product-title">${descripcion}</p>
          
          <span class="product-price">${precio}</span>
        </div>
        <a href="../../pages/product.html" class="btn_product">Ver producto</a>
      </div>
    `;
    tarjeta.innerHTML = contenido;
    return tarjeta;
};
  
  // Selecciona la sección donde se mostrarán todos los productos
const seccionAll = document.querySelector('[data-productos]');
  
  // Usa la función allProducts del servicio para obtener todos los productos
  productServices.allProducts()
    .then((data) => {
      data.forEach(({ img, nombre, precio, descripcion, categoria, proveedor, stock, id }) => {
        const nuevaTarjeta = crearNuevoProducto(
          img, nombre, precio, descripcion, categoria, proveedor, stock, id
        );
        seccionAll.appendChild(nuevaTarjeta);
      });
    })
    .catch((err) => alert('Ocurrió un error al obtener los productos'));
  