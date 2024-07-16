import { productServices } from "../../index.js";

const crearNuevoProducto = (img, nombre, precio, descripcion, categoria, proveedor, stock, id) => {
  const tarjeta = document.createElement("div");
      tarjeta.classList.add("list");
   const contenido = `
         <div class="item">
             <div class="product-img">
                 <img src="${img}"alt="imagen producto" >
             </div>
             <div>
                 <h2  class="product-title">${nombre}</h2>
                 <p  class="product-title">${description}</p>
                 <span class="product-price">${precio}</span>
             </div>
             <div class="editar__container">
                 <a href="../pages/edit_product.html?id=${id}" class="editaricono" ">
                    <i class="fa-solid fa-pencil"></i>
                 </a>
                 <button type="button" class="eliminar__icono button" id="${id}">
                     <i class="fa-solid fa-trash"></i>
                 </button>
             </div> 

         </div>
         `;
     tarjeta.innerHTML = contenido;

     const btneliminar = tarjeta.querySelector("button")
     btneliminar.addEventListener("click", ()=>{
         const id = btneliminar.id;
         productServices.eliminarProducto(id)
         .then(response => {
             window.location.href = "../../pages/exito-eliminar.html"
         }).catch(err => console.log("Ocurrió un error"))
     })
     return tarjeta;
 };
 

const seccionAll = document.querySelector('[data-productos]');
productServices.allProducts().then((data) => {
data.forEach(({img, nombre, precio, descripcion, categoria, proveedor, stock, id}) => {
 const nuevoTarjeta = crearNuevoProducto(
    img, 
    nombre, 
    precio, 
    descripcion, 
    categoria, 
    proveedor, 
    stock, 
    id
 );
 seccionAll.appendChild(nuevoTarjeta);
});
}).catch((err)=> alert('ocurrió un error'));