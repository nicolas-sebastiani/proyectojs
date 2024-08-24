const productos = [
    { id: 1, nombre: 'Arroz Integral x Kg', precio: 5100, imagen: '../assets/arrozintegral.jpg' },
    { id: 2, nombre: 'Lentejas x Kg', precio: 4400, imagen: '../assets/lenteja.jpg' },
    { id: 3, nombre: 'Avena Arrollada x Kg', precio: 3900, imagen: '../assets/avena-arrollada-fina.jpg' },
    { id: 4, nombre: 'Cebada Perlada x Kg', precio: 6000, imagen: '../assets/cebada-perlada.jpg' },
    { id: 5, nombre: 'Couscous x Kg', precio: 2900, imagen: '../assets/couscous.jpg' },
    { id: 6, nombre: 'Lenteja Turca x Kg', precio: 3500, imagen: '../assets/lenteja-turca.jpg' },
    { id: 7, nombre: 'Poroto Pallar x Kg', precio: 3100, imagen: '../assets/poroto-pallar.jpg' },
    { id: 8, nombre: 'Quinoa Roja x Kg', precio: 5150, imagen: '../assets/quinoa-roja.jpg' },
    { id: 9, nombre: 'Soja Texturizada x Kg', precio: 6000, imagen: '../assets/soja-texturizada.jpg' },
    { id: 10, nombre: 'Garbanzo x Kg', precio: 5850, imagen: '../assets/garbanzo.jpg' },
    { id: 11, nombre: 'Poroto Tape x Kg', precio: 5000, imagen: '../assets/poroto-tape.jpg' },
    { id: 12, nombre: 'Poroto Aduki x Kg', precio: 2900, imagen: '../assets/poroto-aduki.jpg' },
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
        });
        localStorage.setItem('cart', JSON.stringify(cart));
        alert(`${product.nombre} agregado al carrito.`);
    } else {
        alert(`${product.nombre} ya está en el carrito.`);
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
        columna.className = 'col-md-4 mb-4';
        // Crear la tarjeta
        const card = document.createElement('div');
        card.className = 'card border border-success-subtle';
        card.style.width = '16rem';
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
        precio.textContent = `$${producto.precio}`;
        // Creat boton
        const botonAdd = document.createElement('button');
        botonAdd.textContent = 'Agregar al Carrito';
        botonAdd.id = 'botonAdd';
        botonAdd.classList = 'btn btn-outline-success';

        botonAdd.addEventListener('click', () => {
            // alert(`${producto.nombre} agregado al carrito.`)
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