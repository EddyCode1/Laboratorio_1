document.addEventListener('DOMContentLoaded', () => {
    console.log("Menú Lab cargado correctamente");
    
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transition = 'all 0.5s ease';
        setTimeout(() => {
            card.style.opacity = '1';
        }, 200 * index);
    });
});