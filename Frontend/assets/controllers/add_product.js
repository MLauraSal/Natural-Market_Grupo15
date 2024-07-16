import { productServices } from "../../index.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const img = document.querySelector("[data-img]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const proveedor = document.querySelector("[data-proveedor]").value;
    const stock = document.querySelector("[data-stock]").value;
    
    productServices.crearNuevoProducto(img, nombre, precio, descripcion, categoria, proveedor, stock)
    .then(()=>{
        window.location.href = "../../pages/admin.html"
    }).catch(err => console.log(err));
})


