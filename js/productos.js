const productos = [
    { id: 1, nombre: 'Arroz Integral', precio: 5100, imagen: '../assets/arrozintegral.jpg', cantidad: 1, unidad: "1Kg"  },
    { id: 2, nombre: 'Lentejas', precio: 4400, imagen: '../assets/lenteja.jpg', cantidad: 1, unidad: "1Kg" },
    { id: 3, nombre: 'Avena Arrollada', precio: 3900, imagen: '../assets/avena-arrollada-fina.jpg', cantidad: 1, unidad: "1Kg" },
    { id: 4, nombre: 'Cebada Perlada', precio: 6000, imagen: '../assets/cebada-perlada.jpg', cantidad: 1, unidad: "1Kg" },
    { id: 5, nombre: 'Couscous', precio: 2900, imagen: '../assets/couscous.jpg', cantidad: 1, unidad: "300Gr" },
    { id: 6, nombre: 'Lenteja Turca', precio: 3500, imagen: '../assets/lenteja-turca.jpg', cantidad: 1, unidad: "1Kg" },
    { id: 7, nombre: 'Poroto Pallar', precio: 3100, imagen: '../assets/poroto-pallar.jpg', cantidad: 1, unidad: "800Gr" },
    { id: 8, nombre: 'Quinoa Roja', precio: 5150, imagen: '../assets/quinoa-roja.jpg', cantidad: 1, unidad: "500Gr" },
    { id: 9, nombre: 'Soja Texturizada', precio: 6000, imagen: '../assets/soja-texturizada.jpg', cantidad: 1, unidad: "500Gr" },
    { id: 10, nombre: 'Garbanzo', precio: 5850, imagen: '../assets/garbanzo.jpg', cantidad: 1, unidad: "1Kg" },
    { id: 11, nombre: 'Poroto Tape', precio: 5000, imagen: '../assets/poroto-tape.jpg', cantidad: 1, unidad: "1Kg" },
    { id: 12, nombre: 'Poroto Aduki', precio: 2900, imagen: '../assets/poroto-aduki.jpg', cantidad: 1, unidad: "1Kg" },
];

let cart = []

function addtoCart(Productoid){
    let product = productos.find(p => p.id === Productoid);
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Verificar si el producto ya está en el carrito
    if (!cart.some(p => p.id === Productoid)) {
        cart.push({
            id: product.id,
            nombre: product.nombre,
            precio: product.precio,
            imagen: product.imagen,
            unidad: product.unidad,
            cantidad: product.cantidad,
        });
        localStorage.setItem('cart', JSON.stringify(cart));
        Toastify({
            text: `${product.nombre} agregad@ al carrito`,
            className: "info",
            duration: 2000,
            style: {
                background: "linear-gradient(to left top, #4de782, #77e47a, #93e176, #aadd76, #bcda78)",
            }
        }).showToast();
    } else {
        Toastify({
            text: `${product.nombre} ya fue agregad@!`,
            className: "info",
            duration: 2000,
            style: {
                background: "linear-gradient(to right, #e1e74d, #e6e850, #ebea53, #efeb57, #f4ec5a)",
            }
        }).showToast();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById("main");
    const divProductos = document.getElementById('prodWrapper');
    const productosRow = document.createElement('div');
    productosRow.id = 'productosRow';
    productosRow.className = 'row';
    
    main.appendChild(divProductos);
    
    divProductos.appendChild(productosRow);

    productos.forEach(producto => {
        const columna = document.createElement('div');
        columna.className = 'col-md-3 mb-4';
        // Crear la tarjeta
        const card = document.createElement('div');
        card.className = 'card border border-success-subtle pb-1';
        card.style.width = '14rem';
        // Crear la imagen
        const img = document.createElement('img');
        img.src = producto.imagen;
        img.alt = producto.nombre;
        img.className = 'card-img-top';
        img.style.alignSelf = 'center';
        // Crear cuerpo de la tarjeta
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        // Crear el nombre del producto
        const nombre = document.createElement('h3');
        nombre.textContent = producto.nombre;
        nombre.className = 'card-title';
        // Crear el precio del producto
        const precio = document.createElement('p');
        precio.textContent = `$${producto.precio} X ${producto.unidad}`;
        // Creat boton
        const botonAdd = document.createElement('button');
        botonAdd.textContent = 'Agregar al Carrito';
        botonAdd.id = 'botonAdd';
        botonAdd.classList = 'btn btn-outline-success btn-sm';

        botonAdd.addEventListener('click', () => {
            addtoCart(producto.id)
        })

        card.appendChild(img);
        card.appendChild(nombre);
        card.appendChild(precio);
        card.appendChild(botonAdd);
        card.appendChild(cardBody);
        columna.appendChild(card);
        productosRow.appendChild(columna);
    });
})