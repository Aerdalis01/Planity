//Navbar
// 1 Changer le background color de la Navbar au scroll
var navbar = document.querySelector('.navbar');
//console.log(navbar);
var navbarElements = document.querySelectorAll('.navbar-link');
//console.log(navbarElements);
var navbarLogo = document.querySelector('.logo');
window.addEventListener('scroll', function () {
    var scrollPosition = window.scrollY;
    var halfPageHeight = window.innerHeight / 2.5;
    if (navbar && navbarLogo && scrollPosition > halfPageHeight) {
        navbar.classList.add('navbar-scroll');
        navbarElements.forEach(function (element) {
            element.classList.remove('navbar-link');
            navbarLogo.classList.remove('logo');
        });
    }
    else if (navbar && navbarLogo && scrollPosition <= halfPageHeight) {
        navbar.classList.remove('navbar-scroll');
        navbarElements.forEach(function (element) {
            element.classList.add('navbar-link');
            navbarLogo.classList.add('logo');
        });
    }
});
// 2 Ouvrir la navbar mobil modal au clique sur le menu burger
//Je stocke l'icone burger
var icone = document.querySelector('.container-faBurger');
//la div Modal
var modal = document.querySelector('.mobil');
//L'icnone croix
var iconeXmark = document.querySelector('.container-fa-xmark');
if (icone && (modal && iconeXmark)) {
    // Lorsque vous cliquez sur 'burger', affichez 'modal'
    icone.addEventListener('click', function (event) {
        event.stopPropagation(); // Empêche l'événement de se propager au document
        //  console.log('icone cliqué')
        modal.classList.add('change-mobil');
    });
    // Lorsque vous cliquez sur iconeXmark, cachez modal
    iconeXmark.addEventListener('click', function (event) {
        event.stopPropagation(); // Empêche l'événement de se propager au document
        modal.classList.remove('change-mobil');
    });
    // Lorsque vous cliquez en dehors de modal, cachez modal
    document.addEventListener('click', function () {
        modal.classList.remove('change-mobil');
    });
}
else {
    //console.log("La div 'modal' ou les boutons 'burger' ou 'croix' n'ont pas été trouvés.");
}
// Dans la section carousel 
//1 => au clic sur un des chevrons passé à l'image suivantes
//1 au clic sur le btnNext et le btnPrevious l'image change
// Je stocke les sources des svg dans des listes
var carousel1 = [
    "/assets/css/img/barbier-svg.svg",
    "/assets/css/img/manucure-svg.svg",
    "/assets/css/img/institut-svg.svg",
    "/assets/css/img/coiffeur-svg.svg",
];
//console.log(carousel1);
var carousel2 = [
    "/assets/css/img/coiffeur-svg.svg",
    "/assets/css/img/barbier-svg.svg",
    "/assets/css/img/manucure-svg.svg",
    "/assets/css/img/institut-svg.svg",
];
var carousel3 = [
    "/assets/css/img/manucure-svg.svg",
    "/assets/css/img/institut-svg.svg",
    "/assets/css/img/barbier-svg.svg",
    "/assets/css/img/coiffeur-svg.svg",
];
// Initialisez un index pour chaque carrousel
var carousel1Index = 0;
var carousel2Index = 0;
var carousel3Index = 0;
// Écoutez le clic sur le bouton "Next" pour chaque carrousel
var nextButton = document.getElementById('next');
//console.log(nextButton);
var prevButton = document.getElementById('prev');
//console.log(prevButton);
if (nextButton && prevButton) {
    nextButton.addEventListener('click', function () {
        //  console.log("btn next cliqué");
        carousel1Index = (carousel1Index + 1) % carousel1.length;
        updateCarouselImage("carousel1", carousel1Index);
        carousel2Index = (carousel2Index + 1) % carousel2.length;
        updateCarouselImage("carousel2", carousel2Index);
        carousel3Index = (carousel3Index + 1) % carousel3.length;
        updateCarouselImage("carousel3", carousel3Index);
    });
    prevButton.addEventListener('click', function () {
        //console.log("btn prev cliqué");
        carousel1Index = (carousel1Index - 1) % carousel1.length;
        updateCarouselImage("carousel1", carousel1Index);
        carousel2Index = (carousel2Index - 1) % carousel2.length;
        updateCarouselImage("carousel2", carousel2Index);
        carousel3Index = (carousel3Index - 1) % carousel3.length;
        updateCarouselImage("carousel3", carousel3Index);
    });
}
// Fonction pour mettre à jour l'image d'un carrousel
function updateCarouselImage(carouselAutoplaying, index) {
    var carouselItems = document.querySelectorAll("#".concat(carouselAutoplaying, " .carousel-item--main"));
    //console.log(carouselItems);
    //console.log(index);
    carouselItems.forEach(function (item, i) {
        if (i = index) {
            item.classList.add("active");
        }
        else {
            item.classList.remove("active");
        }
    });
}
//2
//3 au clic sur 'voir plus' afficher une div avec le text 
var textItem = document.querySelectorAll('.text-container');
//console.log(textItem);
textItem.forEach(function (item) {
    var SeeMore = item.querySelector('.btn-VoirPlus');
    if (SeeMore) {
        SeeMore.addEventListener('click', function () {
            console.log("btn cliqué");
            item.classList.toggle('text-change');
        });
    }
});
//section promotion
//Au survol des div promotion-content faire apparaître un before avec animation
// const promoHover = document.querySelectorAll('.promotion-content');
// console.log(promoHover);
// promoHover.forEach((item) => {
//   item.addEventListener('mousenter', () => {
//     console.log(item);
//     item.classList.add('promotion-content2');
//   });
// });
