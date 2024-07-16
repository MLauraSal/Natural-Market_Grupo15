import { productServices } from "../../index.js";


const obtenerDatos = async()=>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    /* obtenemos los elementos de nuestra card mediante querySelector */
    const img = document.querySelector("[data-img]");
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion]");
   
    /* Inyectamos el contenido mediante DOM */    
    const productos = await productServices.productId(id)
        img.src = productos.img;
        nombre.textContent = productos.nombre;
        precio.textContent = productos.precio;
        descripcion.textContent = productos.descripcion;
        
}
obtenerDatos();

