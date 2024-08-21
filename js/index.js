document.addEventListener('DOMContentLoaded', () => {
    const header = document.createElement("header");
    const main = document.createElement("main");
    const footer = document.createElement("footer");
    const divProductos = document.getElementById('prodWrapper');
    const productosRow = document.createElement('div');
    productosRow.id = 'productosRow';
    productosRow.className = 'row'
    
    document.body.appendChild(header);
    document.body.appendChild(main);
    main.appendChild(divProductos);
    document.body.appendChild(footer);
    
    divProductos.appendChild(productosRow);

    const productos = [
        { nombre: 'Arroz Integral x Kg', precio: '$5100', imagen: '../assets/arrozintegral.jpg' },
        { nombre: 'Lentejas x Kg', precio: '$4400', imagen: '../assets/lenteja.jpg' },
        { nombre: 'Avena Arrollada x Kg', precio: '$4900', imagen: '../assets/avena-arrollada-fina.jpg' },
        { nombre: 'Cebada Perlada x Kg', precio: '$4900', imagen: '../assets/cebada-perlada.jpg' },
        { nombre: 'Couscous x Kg', precio: '$4900', imagen: '../assets/couscous.jpg' },
        { nombre: 'Lenteja Turca x Kg', precio: '$4900', imagen: '../assets/lenteja-turca.jpg' },
        { nombre: 'Poroto Pallar x Kg', precio: '$4900', imagen: '../assets/poroto-pallar.jpg' },
        { nombre: 'Quinoa Roja x Kg', precio: '$4900', imagen: '../assets/quinoa-roja.jpg' },
        { nombre: 'Soja Texturizada x Kg', precio: '$4900', imagen: '../assets/soja-texturizada.jpg' },
        { nombre: 'Garbanzo x Kg', precio: '$4900', imagen: '../assets/garbanzo.jpg' },
        { nombre: 'Poroto Tape x Kg', precio: '$4900', imagen: '../assets/poroto-tape.jpg' },
        { nombre: 'Poroto Aduki x Kg', precio: '$4900', imagen: '../assets/poroto-aduki.jpg' },
    ];
    
    productos.forEach(producto => {
            // Crear la columna
            const columna = document.createElement('div');
            columna.className = 'col-md-4 mb-4';
            // Crear la tarjeta
            const card = document.createElement('div');
            card.className = 'card';
            card.style.width = '18rem';
            // Crear la imagen
            const img = document.createElement('img');
            img.src = producto.imagen;
            img.alt = producto.nombre;
            img.className = 'card-img-top';
            // Crear cuerpo de la tarjeta
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';
            // Crear el nombre del producto
            const nombre = document.createElement('h5');
            nombre.textContent = producto.nombre;
            nombre.className = 'card-title'
            // Crear el precio del producto
            const precio = document.createElement('p');
            precio.textContent = producto.precio;
            // Creat boton
            const botonAdd = document.createElement('button');
            botonAdd.textContent = 'Agregar al Carrito';
            botonAdd.id = 'botonAdd';
            botonAdd.classList = 'btn btn-outline-success'
            botonAdd.addEventListener('click', () => {
                alert(`${producto.nombre} agregado al carrito.`)
            })
            // Añadir la imagen, nombre y precio a la tarjeta
            card.appendChild(img);
            card.appendChild(nombre);
            card.appendChild(precio);
            card.appendChild(botonAdd);
            card.appendChild(cardBody);
            // Añadir la tarjeta al body antes del primer script
            columna.appendChild(card);
            productosRow.appendChild(columna);
        });

})