
//asincronismo

const ObtenerProductos1 = async() => {
    try{
        const r=await fetch("https://dummyjson.com/products")
        const p= await r.json()
        console.log(p)
    } catch (error) {
        console.log(error)
    }
    
}

ObtenerProductos1()


// Manipulación del DOM 

// const ObtenerProductos = async () => {
//   try {
//       const r = await fetch("https://dummyjson.com/products");
//       const data = await r.json();
//       const productos = data.products;

    
//       productos.forEach(producto => {
//           const div = document.createElement("div");
//           div.innerHTML = `
//               <h2>${producto.title}</h2>
//               <p>${producto.description}</p>
//               <img src="${producto.thumbnail}" width="150" />
//               <p><strong>Precio:</strong> $${producto.price}</p>
//               <hr>
//           `;
//           contenedor.appendChild(div);
//       });

//   } catch (error) {
//       console.log("Error al obtener productos:", error);
//   }
// };

// ObtenerProductos();