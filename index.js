// Ouvrir la navbar mobil modal au clique sur le menu burger
//Je stocke l'icone burger
var icone = document.querySelector('.container-faBurger');
//console.log(icone);
//la div Modal
var modal = document.querySelector('.mobil');
//console.log(modal)
//L'icnone croix
var iconeXmark = document.querySelector('.container-fa-xmark');
//console.log(iconeXmark);
if (icone && (modal && iconeXmark)) {
    // Lorsque vous cliquez sur 'burger', affichez 'modal'
    icone.addEventListener('click', function (event) {
        event.stopPropagation(); // Empêche l'événement de se propager au document
        console.log('icone cliqué');
        modal.classList.add('change-mobil');
    });
    // Lorsque vous cliquez sur 'croix', cachez 'modal'
    iconeXmark.addEventListener('click', function (event) {
        event.stopPropagation(); // Empêche l'événement de se propager au document
        modal.classList.remove('change-mobil');
    });
    // Lorsque vous cliquez en dehors de 'modal', cachez 'modal'
    document.addEventListener('click', function () {
        modal.classList.remove('change-mobil');
    });
}
else {
    console.log("La div 'modal' ou les boutons 'burger' ou 'croix' n'ont pas été trouvés.");
}
