let indiceActual = 0;

function cambiarItem(direccion) {
    const items = document.querySelectorAll('.item-multimedia');
    
    items[indiceActual].classList.remove('active');
    
    indiceActual += direccion;
    
    if (indiceActual >= items.length) {
        indiceActual = 0;
    } else if (indiceActual < 0) {
        indiceActual = items.length - 1;
    }
    
    items[indiceActual].classList.add('active');
}
