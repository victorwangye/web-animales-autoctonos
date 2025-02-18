document.addEventListener('DOMContentLoaded', function() {
    const botonesFiltro = document.querySelectorAll('.filtro_btn');
    const articulos = document.querySelectorAll('.articulo_fauna');

    botonesFiltro.forEach(boton => {
        boton.addEventListener('click', () => {
            // Remover clase activo de todos los botones
            botonesFiltro.forEach(b => b.classList.remove('activo'));
            // Añadir clase activo al botón clickeado
            boton.classList.add('activo');

            const filtro = boton.getAttribute('data-filter');

            articulos.forEach(articulo => {
                if (filtro === 'todos') {
                    articulo.classList.remove('oculto');
                } else {
                    if (articulo.getAttribute('data-categoria') === filtro) {
                        articulo.classList.remove('oculto');
                    } else {
                        articulo.classList.add('oculto');
                    }
                }
            });
        });
    });
});