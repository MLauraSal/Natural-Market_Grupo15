import { productServices } from "../../index.js";


const obtenerDatos = async()=>{
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    /* obtenemos los elementos de nuestra card mediante querySelector */
    const img = document.querySelector("[data-img]");
    const name = document.querySelector("[data-name]");
    const price = document.querySelector("[data-price]");
    const description = document.querySelector("[data-description]");
    /* Inyectamos el contenido mediante DOM */    
    const productos = await productServices.productId(id)
        img.src = productos.img;
        name.textContent =productos.name;
        price.textContent = productos.price;
        description.textContent = productos.description
}
obtenerDatos();

