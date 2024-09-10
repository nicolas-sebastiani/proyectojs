let cart = []

fetch("/productos.json")
    .then((response) => response.json())
    .then((data) => {
        productos = data;
        createCards(data)})
    .catch(error => console.error('Error al cargar los datos:', error));

function addtoCart(Productoid){
    let product = productos.find(p => p.id === Productoid);
    cart = JSON.parse(localStorage.getItem('cart')) || [];
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

function createCards(productos){
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
        card.className = 'card border border-success-subtle pb-1 opa07';
        card.style.width = '14rem';
        // Crear la imagen
        const img = document.createElement('img');
        img.src = producto.imagen;
        img.alt = producto.nombre;
        img.className = 'card-img-top opa1';
        img.style.alignSelf = 'center';
        // Crear cuerpo de la tarjeta
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        // Crear el nombre del producto
        const nombre = document.createElement('h3');
        nombre.textContent = producto.nombre;
        nombre.className = 'card-title opa1 fw-bold';
        // Crear el precio del producto
        const precio = document.createElement('p');
        precio.textContent = `$${producto.precio} X ${producto.unidad}`;
        // Creat boton
        const botonAdd = document.createElement('button');
        botonAdd.textContent = 'Agregar al Carrito';
        botonAdd.id = 'botonAdd';
        botonAdd.classList = 'btn btn-outline-success btn-sm opa1';
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
}
