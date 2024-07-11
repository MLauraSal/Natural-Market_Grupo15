import { productServices } from "../../index.js";

const form = document.querySelector("[data-form]");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const img = document.querySelector("[data-img]").value;
    const stock = document.querySelector("[data-stock]").value;
    const name = document.querySelector("[data-name]").value;
    const price = document.querySelector("[data-price]").value;
    const description = document.querySelector("[data-description]").value;
    
    productServices.crearNuevoProducto(img, name, price, description, stock)
    .then(()=>{
        window.location.href = "/pages/admin.html"
    }).catch(err => console.log(err));
})


