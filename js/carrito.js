document.addEventListener('DOMContentLoaded', () => {
    // Recuperar la lista de productos de localStorage
    const carritoGuardado = localStorage.getItem('cart');
    const carritoArray = JSON.parse(carritoGuardado) || [];

    const carritoRow = document.getElementById('carritoRow');

    carritoArray.forEach((producto, index) => {
        // Crear la columna
        const col = document.createElement('div');
        // col.className = 'col-md-4 mb-4';

        // Crear la tarjeta
        const card = document.createElement('div');
        card.className = 'card border border-success-subtles';
        card.style.width = '20rem';

        // Crear el cuerpo de la tarjeta
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        // Crear el nombre del producto
        const nombre = document.createElement('h4');
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
            Toastify({
                text: `Producto eliminado`,
                className: "info",
                duration: 2000,
                style: {
                    background: "linear-gradient(to left top, #4de782, #77e47a, #93e176, #aadd76, #bcda78)",
                }
            }).showToast();
        })

        // Añadir el nombre, precio y cuerpo a la tarjeta
        cardBody.appendChild(nombre);
        cardBody.appendChild(precio);
        cardBody.appendChild(botonDel);
        // card.appendChild(img);
        card.appendChild(cardBody);

        // Añadir la tarjeta a la columna
        col.appendChild(card);

        // Añadir la columna a la fila
        carritoRow.appendChild(col);
    });
});