document.addEventListener('DOMContentLoaded', () => {
    const botonFin = document.getElementById('botonFinalizar');
    botonFin.addEventListener('click', () => {
        Swal.fire({
            title: "Finalizar Compra?",
            text: "Veamos las formas de pago",
            icon: "success",
            showCancelButton: true,
            confirmButtonColor: "#198754",
            cancelButtonColor: "#3085d6",
            cancelButtonText: "Seguir comprando...",
            confirmButtonText: "Si, finalizar"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    icon: "sucess",
                    title: "Compra Finalizada",
                    confirmButtonColor: "#198754",
                    // text: "Your file has been deleted."
                });
                localStorage.clear();
                location.reload();
            }
        });
    })
}
)
