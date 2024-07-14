import { productServices } from "../../index.js";

const crearNuevoProducto = (img, name, price, description, id) => {
<<<<<<< HEAD
	   const tarjeta = document.createElement("div");
	       tarjeta.classList.add("list");
	    const contenido = `
            <div class="item">
                <div class="product-img">
                    <img src="${img}"alt="imagen producto" >
                </div>
                <div>
                    <h2  class="product-title">${name}</h2>
                    <p  class="product-title">${description}</p>
                 
                    <span class="product-price">${price}</span>
                </div>
                <div class="editar__container">
                    <a href="../../pages/editproduct.html?id=${id}" class="editaricono" " class="editaricono" ">
                       <i class="fa-solid fa-pencil"></i>
                    </a>
                    <button type="button" class="eliminar__icono" id="${id}">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div> 
=======
  const tarjeta = document.createElement("div");
  tarjeta.classList.add("list");
  const contenido = `
    <div class="item">
      <div class="product-img">
        <img src="${img}" alt="imagen producto">
      </div>
      <div>
        <h2 class="product-title">${name}</h2>
        <p class="product-title">${description}</p>
        <span class="product-price">${price}</span>
      </div>
      <div class="editar__container">
        <a href="editproduct.html" class="editaricono">
          <i class="fa-solid fa-pencil"></i>
        </a>
        <button type="button" class="eliminar__icono" id="${id}">
          <i class="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  `;
  tarjeta.innerHTML = contenido;
>>>>>>> e035341d2255b4124984629531ac39a920bf9b35

  const btnEliminar = tarjeta.querySelector("button");
  btnEliminar.addEventListener("click", () => {
    const id = btnEliminar.id;
    productServices.eliminarProducto(id)
      .then(() => {
        window.location.href = "./pages/exito-eliminar.html";
      })
      .catch(err => console.log("Ocurrió un error:", err));
  });

<<<<<<< HEAD
        const btneliminar = tarjeta.querySelector("eliminar__icono")
        
        btneliminar.addEventListener("click", ()=>{
            const id = btneliminar.id;
            productServices.eliminarProducto(id)
            .then(response => {
                window.location.href = "../../pages/exito-eliminar.html"
            }).catch(err => console.log("Ocurrió un error"))
        })
        return tarjeta;
    };
    
=======
  return tarjeta;
};
>>>>>>> e035341d2255b4124984629531ac39a920bf9b35

const seccionAll = document.querySelector('[data-products]');
productServices.allProducts().then((data) => {
	data.forEach(({img, name, price, description, id}) => {
		const nuevoTarjeta = crearNuevoProducto(
            img,
            name,
			price,
            description,
			category,
			id
		);
		seccionAll.appendChild(nuevoTarjeta);
	});
}).catch((err)=> alert('ocurrió un error'));