document.addEventListener('DOMContentLoaded', () => {
    // Recuperar la lista de productos de localStorage
    const carritoGuardado = localStorage.getItem('cart');
    const carritoArray = JSON.parse(carritoGuardado) || [];
    const carritoRow = document.getElementById('cartWrapper');
    carritoArray.forEach((producto, index) => {
        // Crear la columna
        const col = document.createElement('div');
        col.className = 'col-md-3 mb-4 m-4';
        // Crear la tarjeta
        const card = document.createElement('div');
        card.className = 'card border border-success-subtle';
        card.style.width = '20rem';
        // Crear el cuerpo de la tarjeta
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';
        // Crear el nombre del producto
        const nombre = document.createElement('h3');
        nombre.textContent = producto.nombre;
        nombre.className = 'card-title fs-3 fw-semibold';
        // Crear el precio del producto
        const precio = document.createElement('p');
        precio.textContent = `$${producto.precio} X ${producto.unidad}`;
        // botones para aumentar y disminuir cantidad
        const botongrupo = document.createElement('div');
        botongrupo.id = 'botongrupo';
        botongrupo.className = 'btn-group';
        const cant = document.createElement('p');
        cant.textContent = `Cantidad ${producto.cantidad}`;
        const botonres = document.createElement('button');
        botonres.id = 'botonres',
        botonres.className = 'btn btn-outline-success';
        botonres.textContent = '-';
        botonres.addEventListener('click', () => {
            if(producto.cantidad > 1){
                producto.cantidad--;
                cant.textContent = `Cantidad: ${producto.cantidad}`;
                precio.textContent = `Precio $${producto.precio * producto.cantidad}`;
            } else {
                carritoArray.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(carritoArray));
                location.reload();
            }
        })
        const botonsum = document.createElement('button');
        botonsum.id = 'botonsum';
        botonsum.className = 'btn btn-outline-success';
        botonsum.textContent = '+';
        botonsum.addEventListener('click', () => {
            producto.cantidad++;
            cant.textContent = `Cantidad: ${producto.cantidad}`;
            precio.textContent = `Precio: $${producto.precio * producto.cantidad}`;
        })
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
        cardBody.appendChild(cant);
        cardBody.appendChild(botongrupo);
        botongrupo.appendChild(botonres);
        botongrupo.appendChild(botonDel)
        botongrupo.appendChild(botonsum);
        card.appendChild(cardBody);
        // Añadir la tarjeta a la columna
        col.appendChild(card);
        // Añadir la columna a la fila
        carritoRow.appendChild(col);
    });
});