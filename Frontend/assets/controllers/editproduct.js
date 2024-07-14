import { productServices } from "../../index.js";


const form = document.querySelector("[data-form]")

const obtenerInfo = async() => {
	const urlProduct = new URL(window.location);
	const id = urlProduct.searchParams.get("id");

	
<<<<<<< HEAD:Frontend/assets/controllers/edit_product.js
    const img = document.querySelector("[data-url]");
	
=======
    const img = document.querySelector("[data-img]");
	const stock = document.querySelector("[data-stock]");
>>>>>>> e035341d2255b4124984629531ac39a920bf9b35:Frontend/assets/controllers/editproduct.js
	const name = document.querySelector("[data-name]");
	const price = document.querySelector("[data-price]");
	const description = document.querySelector("[data-description]");

    const producto = await productServices.detalleProducto(id);
		img.value = producto.img
		
		name.value = producto.name
		price.value = producto.price
		description.value = producto.description
};
obtenerInfo();
	



form.addEventListener("submit", (e)=>{
    e.preventDefault();
    const urlProduct = new URL(window.location);
	const id = urlProduct.searchParams.get("id");

<<<<<<< HEAD:Frontend/assets/controllers/edit_product.js
    const img = document.querySelector("[data-url]").value;
	const category = document.querySelector("[data-category]").value;
=======
    const img = document.querySelector("[data-img]").value;
	const stock = document.querySelector("[data-stock]").value;
>>>>>>> e035341d2255b4124984629531ac39a920bf9b35:Frontend/assets/controllers/editproduct.js
	const name = document.querySelector("[data-name]").value;
	const price = document.querySelector("[data-price]").value;
	const description = document.querySelector("[data-description]").value;
    productServices.actualizarProducto(img, stock, name, price, description,id)
    .then(()=>{
<<<<<<< HEAD:Frontend/assets/controllers/edit_product.js
        window.location.href = "../../pages/exito.html"
=======
        window.location.href = "./pages/exito.html"
>>>>>>> e035341d2255b4124984629531ac39a920bf9b35:Frontend/assets/controllers/editproduct.js
    });

})