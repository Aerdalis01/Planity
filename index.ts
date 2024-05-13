//Navbar

// 1 Changer le background color de la Navbar au scroll
const navbar = document.querySelector('.navbar')
//console.log(navbar);
const navbarElements = document.querySelectorAll('.navbar-link')
//console.log(navbarElements);
const navbarLogo = document.querySelector('.logo')
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const halfPageHeight = window.innerHeight / 2.5;


  if (navbar && navbarLogo && scrollPosition > halfPageHeight) {
    
    navbar.classList.add('navbar-scroll')
    navbarElements.forEach((element) => {
    element.classList.remove('navbar-link');
    navbarLogo.classList.remove('logo')
    });
  } else if (navbar && navbarLogo && scrollPosition <= halfPageHeight) {
    
    navbar.classList.remove('navbar-scroll')  
    navbarElements.forEach((element) => {
    element.classList.add('navbar-link');
    navbarLogo.classList.add('logo')
    });
  }
});

// 2 Ouvrir la navbar mobil modal au clique sur le menu burger

//Je stocke l'icone burger
const icone:HTMLElement | null = document.querySelector('.container-faBurger');
//la div Modal
const modal:HTMLElement | null = document.querySelector('.mobil')
//L'icnone croix
const iconeXmark:HTMLElement | null = document.querySelector('.container-fa-xmark');

if ( icone && (modal && iconeXmark)) {
  // Lorsque vous cliquez sur 'burger', affichez 'modal'
  icone.addEventListener('click', function(event) {
    event.stopPropagation(); // Empêche l'événement de se propager au document
  //  console.log('icone cliqué')
    modal.classList.add('change-mobil');
  });

  // Lorsque vous cliquez sur iconeXmark, cachez modal
  iconeXmark.addEventListener('click', function(event) {
    event.stopPropagation(); // Empêche l'événement de se propager au document
    modal.classList.remove('change-mobil');
  });

  // Lorsque vous cliquez en dehors de modal, cachez modal
  document.addEventListener('click', function() {
    modal.classList.remove('change-mobil');
  });
} else {
  //console.log("La div 'modal' ou les boutons 'burger' ou 'croix' n'ont pas été trouvés.");
}

// Dans la section carousel 

//1 => au clic sur un des chevrons passé à l'image suivantes



//1 au clic sur le btnNext et le btnPrevious l'image change



// Je stocke les sources des svg dans des listes et les textes 
// const carousel0: string[] = [
//   ".text-container1",
//   ".text-container2",
//   ".text-container3",
//   ".text-container4",
// ];
const carousel1: string[] = [
  "/assets/css/img/barbier-svg.svg",
  "/assets/css/img/manucure-svg.svg",
  "/assets/css/img/institut-svg.svg",
  "/assets/css/img/coiffeur-svg.svg",
];
//console.log(carousel1);

const carousel2: string[] = [
  "/assets/css/img/coiffeur-svg.svg",
  "/assets/css/img/barbier-svg.svg",
  "/assets/css/img/manucure-svg.svg",
  "/assets/css/img/institut-svg.svg",
];
const carousel3: string[] = [
  "/assets/css/img/manucure-svg.svg",
  "/assets/css/img/institut-svg.svg",
  "/assets/css/img/barbier-svg.svg",
  "/assets/css/img/coiffeur-svg.svg",
];
//
const carouselIds = ['carousel1', 'carousel2', 'carousel3'];
// Initialisez un index pour chaque carrousel

let carousel1Index = 0;
let carousel2Index = 0;
let carousel3Index = 0;

// Écoutez le clic sur le bouton "Next" pour chaque carrousel
const nextButton = document.getElementById('next');
const nextButton1 = document.getElementById('next1');
//console.log(nextButton);
const prevButton = document.getElementById('prev');
const prevButton1 = document.getElementById('prev1');
//console.log(prevButton);


// Supposons que votre bouton ait l'ID 'nextButton'

if (nextButton)
nextButton.addEventListener('click', function() {
  const carouselTexts = document.getElementById('carousel4');
  if(carouselTexts)
  carouselTexts.setAttribute('data-bs-slide', 'next');
});

if (nextButton && prevButton) {

  nextButton.addEventListener('click', () => {
    //console.log("btn next cliqué");
    carousel1Index = (carousel1Index + 1) % carousel1.length;
    updateCarouselImage("carousel1", carousel1Index);
    carousel2Index = (carousel2Index + 1) % carousel2.length;
    updateCarouselImage("carousel2", carousel2Index);
    carousel3Index = (carousel3Index + 1) % carousel3.length;
    updateCarouselImage("carousel3", carousel3Index);
  });

  prevButton.addEventListener('click', () => {
    //console.log("btn prev cliqué")
    carousel1Index = (carousel1Index - 1 + carousel1.length) % carousel1.length;
    updateCarouselImage("carousel1", carousel1Index);
    carousel2Index = (carousel2Index - 1 + carousel2.length ) % carousel2.length;
    updateCarouselImage("carousel2", carousel2Index);
    carousel3Index = (carousel3Index - 1 + carousel3.length ) % carousel3.length;
    updateCarouselImage("carousel3", carousel3Index);
  });
}
if (nextButton1 && prevButton1) {

  nextButton1.addEventListener('click', () => {
    //console.log("btn next cliqué");
    carousel1Index = (carousel1Index + 1) % carousel1.length;
    updateCarouselImage("carousel1", carousel1Index);
    carousel2Index = (carousel2Index + 1) % carousel2.length;
    updateCarouselImage("carousel2", carousel2Index);
    carousel3Index = (carousel3Index + 1) % carousel3.length;
    updateCarouselImage("carousel3", carousel3Index);
  });

  prevButton1.addEventListener('click', () => {
    //console.log("btn prev cliqué")
    carousel1Index = (carousel1Index - 1 + carousel1.length) % carousel1.length;
    updateCarouselImage("carousel1", carousel1Index);
    carousel2Index = (carousel2Index - 1 + carousel2.length ) % carousel2.length;
    updateCarouselImage("carousel2", carousel2Index);
    carousel3Index = (carousel3Index - 1 + carousel3.length ) % carousel3.length;
    updateCarouselImage("carousel3", carousel3Index);
  });
}
// Fonction pour mettre à jour l'image d'un carrousel



function updateCarouselImage(carouselIds:any , index:any) {
  const carouselItems = document.querySelectorAll(`#${carouselIds} .carousel-item--main`);
  console.log(carouselItems);
  //console.log(index);
  carouselItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

//2


//3 au clic sur 'voir plus' afficher une div avec le text 


const textItem = document.querySelectorAll('.text-container');
//console.log(textItem);


textItem.forEach((item) => {
    const SeeMore = item.querySelector('.btn-VoirPlus');
    if (SeeMore) {
    SeeMore.addEventListener('click', () => {
      console.log("btn cliqué");
      item.classList.toggle('text-change');
    })}
  })




