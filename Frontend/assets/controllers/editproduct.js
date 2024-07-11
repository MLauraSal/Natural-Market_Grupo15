import { productServices } from "../../index.js";


const form = document.querySelector("[data-form]")

const obtenerInfo = async() => {
	const urlProduct = new URL(window.location);
	const id = urlProduct.searchParams.get("id");

	
    const img = document.querySelector("[data-img]");
	const stock = document.querySelector("[data-stock]");
	const name = document.querySelector("[data-name]");
	const price = document.querySelector("[data-price]");
	const description = document.querySelector("[data-description]");

    const producto = await productServices.detalleProducto(id);
		img.value = producto.img
		stock.value = producto.stock
		name.value = producto.name
		price.value = producto.price
		description.value = producto.description
};
obtenerInfo();
	



form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const urlProduct = new URL(window.location);
	const id = urlProduct.searchParams.get("id");

    const img = document.querySelector("[data-img]").value;
	const stock = document.querySelector("[data-stock]").value;
	const name = document.querySelector("[data-name]").value;
	const price = document.querySelector("[data-price]").value;
	const description = document.querySelector("[data-description]").value;
    productServices.actualizarProducto(img, stock, name, price, description,id)
    .then(()=>{
        window.location.href = "../../pages/exito_eliminar.html"
    });

})