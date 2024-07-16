const BASE_API_URL = "http://localhost:3000/api/productos";

const fetchData = async (url, options = {}) => {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return await response.json();
};

export const productServices = {
 
 

  allProducts: () => fetchData(BASE_API_URL),


  crearNuevoProducto: (img, nombre, precio, descripcion, categoria, proveedor, stock, id) => {

    return fetchData(BASE_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ img, nombre, precio, descripcion, categoria, proveedor, stock, id }),
    });
  },
  eliminarProducto: (id) => fetchData(`${BASE_API_URL}/${id}`, { method: "DELETE" }),


  detalleProducto: (id) => fetchData(`${BASE_API_URL}/${id}`),

  actualizarProducto: (img, nombre, precio, descripcion, categoria, proveedor, stock, id) => {
    return fetchData(`${BASE_API_URL}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ img, nombre, precio, descripcion, categoria, proveedor, stock, id }),
    });
  },
 
};

