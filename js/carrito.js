document.addEventListener('DOMContentLoaded', () => {
    // Recuperar la lista de productos de localStorage
    const carritoGuardado = localStorage.getItem('cart');
    const carritoArray = JSON.parse(carritoGuardado) || [];

    const carritoRow = document.getElementById('carritoRow');

    carritoArray.forEach((producto, index) => {
        // Crear la columna
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';

        // Crear la tarjeta
        const card = document.createElement('div');
        card.className = 'card border border-success-subtle';
        card.style.width = '14rem';

        // Crear la imagen
        const img = document.createElement('img');
        img.src = producto.imagen;
        img.alt = producto.nombre;
        img.className = 'card-img-top';
        img.style.alignSelf = 'center';

        // Crear el cuerpo de la tarjeta
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        // Crear el nombre del producto
        const nombre = document.createElement('h3');
        nombre.textContent = producto.nombre;
        nombre.className = 'card-title';

        // Crear el precio del producto
        const precio = document.createElement('p');
        precio.textContent = `$${producto.precio}`;
        
        // boton para eliminar
        const botonDel = document.createElement('button');
        botonDel.id = 'botonDel';
        botonDel.className = 'btn btn-outline-danger';
        botonDel.textContent = 'Quitar del carrito'
        botonDel.addEventListener('click', () => {
            carritoArray.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(carritoArray));
            location.reload();
        })

        // Añadir el nombre, precio y cuerpo a la tarjeta
        cardBody.appendChild(nombre);
        cardBody.appendChild(precio);
        cardBody.appendChild(botonDel);
        card.appendChild(img);
        card.appendChild(cardBody);

        // Añadir la tarjeta a la columna
        col.appendChild(card);

        // Añadir la columna a la fila
        carritoRow.appendChild(col);
    });
});