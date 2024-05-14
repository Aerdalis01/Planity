//Navbar -----------------------

// 1 Changer le background color de la Navbar au scroll
const navbar = document.querySelector(".navbar");
//console.log(navbar);
const navbarElements = document.querySelectorAll(".navbar-link");
//console.log(navbarElements);
const navbarLogo = document.querySelector(".logo");
window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const halfPageHeight = window.innerHeight / 2.5;

  if (navbar && navbarLogo && scrollPosition > halfPageHeight) {
    navbar.classList.add("navbar-scroll");
    navbarElements.forEach((element) => {
      element.classList.remove("navbar-link");
      navbarLogo.classList.remove("logo");
    });
  } else if (navbar && navbarLogo && scrollPosition <= halfPageHeight) {
    navbar.classList.remove("navbar-scroll");
    navbarElements.forEach((element) => {
      element.classList.add("navbar-link");
      navbarLogo.classList.add("logo");
    });
  }
});

// 2 Ouvrir la navbar mobil modal au clique sur le menu burger

// Sélection des éléments HTML
const icone = document.querySelector(".container-faBurger") as HTMLElement;
const modal = document.querySelector(".mobil") as HTMLElement;
const iconeXmark = document.querySelector(".container-fa-xmark") as HTMLElement;

if (icone && modal && iconeXmark) {
  // Lorsque vous cliquez sur 'burger', affichez 'modal'
  icone.addEventListener("click", (event) => {
    event.stopPropagation(); // Empêche l'événement de se propager au document
    modal.classList.add("change-mobil");
  });

  // Lorsque vous cliquez sur iconeXmark, cachez modal
  iconeXmark.addEventListener("click", (event) => {
    event.stopPropagation(); // Empêche l'événement de se propager au document
    modal.classList.remove("change-mobil");
  });
}

// Lorsque vous cliquez en dehors de modal, cachez modal
if (modal) {
  document.addEventListener("click", (event) => {
    if (!modal.contains(event.target as Node)) {
      modal.classList.remove("change-mobil");
    }
  });
}

// Section carousel  ------------------------------

//1 au clic sur les btn(id) next/next et prev/prev1 l'image change dans les 3 carousels

// Je stocke les sources des svg dans des listes
const carousel1: string[] = [
  "/assets/css/img/barbier-svg.svg",
  "/assets/css/img/manucure-svg.svg",
  "/assets/css/img/institut-svg.svg",
  "/assets/css/img/coiffeur-svg.svg",
];
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
//Je stock mes 3 carousels dans un tableau
const carouselIds = [
  "carousel0",
  "carousel1",
  "carousel2",
  "carousel3",
  "carousel4",
];

// Initialise un index pour chaque carrousel
let carousel1Index = 0;
let carousel2Index = 0;
let carousel3Index = 0;

// Écoutez le clic sur les boutons
const nextButton = document.getElementById("next");
const nextButton1 = document.getElementById("next1");
//console.log(nextButton);
const prevButton = document.getElementById("prev");
const prevButton1 = document.getElementById("prev1");
//console.log(prevButton);

//Je créé une fonction au clic sur les bouton next/next1 et prev/prev1 qui incrémente de 1 a chaque clique le carouselIndex ou qui décrémente celui-ci.
if (nextButton && prevButton) {
  nextButton.addEventListener("click", () => {
    //console.log("btn next cliqué");
    carousel1Index = (carousel1Index + 1) % carousel1.length;
    updateCarouselImage("carousel1", carousel1Index);
    carousel2Index = (carousel2Index + 1) % carousel2.length;
    updateCarouselImage("carousel2", carousel2Index);
    carousel3Index = (carousel3Index + 1) % carousel3.length;
    updateCarouselImage("carousel3", carousel3Index);
  });

  prevButton.addEventListener("click", () => {
    //console.log("btn prev cliqué")
    carousel1Index = (carousel1Index - 1 + carousel1.length) % carousel1.length;
    updateCarouselImage("carousel1", carousel1Index);
    carousel2Index = (carousel2Index - 1 + carousel2.length) % carousel2.length;
    updateCarouselImage("carousel2", carousel2Index);
    carousel3Index = (carousel3Index - 1 + carousel3.length) % carousel3.length;
    updateCarouselImage("carousel3", carousel3Index);
  });
}
if (nextButton1 && prevButton1) {
  nextButton1.addEventListener("click", () => {
    //console.log("btn next cliqué");
    carousel1Index = (carousel1Index + 1) % carousel1.length;
    updateCarouselImage("carousel1", carousel1Index);
    carousel2Index = (carousel2Index + 1) % carousel2.length;
    updateCarouselImage("carousel2", carousel2Index);
    carousel3Index = (carousel3Index + 1) % carousel3.length;
    updateCarouselImage("carousel3", carousel3Index);
  });

  prevButton1.addEventListener("click", () => {
    //console.log("btn prev cliqué")
    carousel1Index = (carousel1Index - 1 + carousel1.length) % carousel1.length;
    updateCarouselImage("carousel1", carousel1Index);
    carousel2Index = (carousel2Index - 1 + carousel2.length) % carousel2.length;
    updateCarouselImage("carousel2", carousel2Index);
    carousel3Index = (carousel3Index - 1 + carousel3.length) % carousel3.length;
    updateCarouselImage("carousel3", carousel3Index);
  });
}

// Je créé un fonction pour mettre à jour les images, en modifiant la classe active au sein des carousels
function updateCarouselImage(carouselIds: any, index: any) {
  const carouselItems = document.querySelectorAll(
    `#${carouselIds} .carousel-item--main`
  );
  //console.log(carouselItems);
  //console.log(index);
  carouselItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}

//2 Je créé une fonction pour modifier la classe active du carousel4

// Stocker les éléments du carrousel dans un tableau
const carouselTexts = Array.prototype.slice.call(
  document.querySelectorAll(".carousel-item--text")
);
//console.log(carouselTexts);
const carousel0Texts = Array.prototype.slice.call(
  document.querySelectorAll(".carousel0-item--text")
);
//console.log(carousel0Texts);

// Fonction pour passer à l'élément suivant du carousel3
function nextItem() {
  // Trouver l'élément actif
  let activeItem = carouselTexts.find((item) =>
    item.classList.contains("active")
  );
  if (activeItem) {
    // Enlever la classe 'active'
    activeItem.classList.remove("active");

    // Trouver l'index de l'élément actif
    let activeIndex = carouselTexts.indexOf(activeItem);

    // Si on est à la fin du tableau, retourner au début, sinon passer à l'élément suivant
    if (activeIndex === carouselTexts.length - 1) {
      carouselTexts[0].classList.add("active");
    } else {
      carouselTexts[activeIndex + 1].classList.add("active");
    }
  }
}

// Fonction pour passer à l'élément précédent
function prevItem() {
  // Trouver l'élément actif
  let activeItem = carouselTexts.find((item) =>
    item.classList.contains("active")
  );
  if (activeItem) {
    // Enlever la classe 'active'
    activeItem.classList.remove("active");

    // Trouver l'index de l'élément actif
    let activeIndex = carouselTexts.indexOf(activeItem);

    // Si on est au début du tableau, aller à la fin, sinon passer à l'élément précédent
    if (activeIndex === 0) {
      carouselTexts[carouselTexts.length - 1].classList.add("active");
    } else {
      carouselTexts[activeIndex - 1].classList.add("active");
    }
  }
}
// Ajouter des écouteurs d'événements aux boutons
if (nextButton && prevButton) {
  nextButton.addEventListener("click", nextItem);
  //console.log('bouton nextButton cliqué');
  prevButton.addEventListener("click", prevItem);
}
// Fonction pour passer à l'élément suivant du carousel0
function nextItem1() {
  // Trouver l'élément actif
  let activeItem0 = carousel0Texts.find((item) =>
    item.classList.contains("active")
  );
  if (activeItem0) {
    // Enlever la classe 'active'
    activeItem0.classList.remove("active");

    // Trouver l'index de l'élément actif
    let activeIndex0 = carousel0Texts.indexOf(activeItem0);

    // Si on est à la fin du tableau, retourner au début, sinon passer à l'élément suivant
    if (activeIndex0 === carousel0Texts.length - 1) {
      carousel0Texts[0].classList.add("active");
    } else {
      carousel0Texts[activeIndex0 + 1].classList.add("active");
    }
  }
}

// Fonction pour passer à l'élément précédent
function prevItem1() {
  // Trouver l'élément actif
  let activeItem0 = carousel0Texts.find((item) =>
    item.classList.contains("active")
  );
  if (activeItem0) {
    // Enlever la classe 'active'
    activeItem0.classList.remove("active");

    // Trouver l'index de l'élément actif
    let activeIndex0 = carousel0Texts.indexOf(activeItem0);

    // Si on est au début du tableau, aller à la fin, sinon passer à l'élément précédent
    if (activeIndex0 === 0) {
      carousel0Texts[carousel0Texts.length - 1].classList.add("active");
    } else {
      carousel0Texts[activeIndex0 - 1].classList.add("active");
    }
  }
}
// Ajouter des écouteurs d'événements aux boutons
if (nextButton1 && prevButton1) {
  nextButton1.addEventListener("click", nextItem1);
  //console.log('bouton nextButton cliqué');
  prevButton1.addEventListener("click", prevItem1);
}

//3 au clic sur 'voir plus' afficher une div avec le text
const textItem = document.querySelectorAll(".text-container2");
//console.log(textItem);

//Je créé une fonction au clic sur le bouton voir plus une classe est ajouter ou enlever pour laisser apparaître le contenu
textItem.forEach((item) => {
  const SeeMore = item.querySelector(".btn-VoirPlus");
  if (SeeMore) {
    SeeMore.addEventListener("click", () => {
      console.log("btn cliqué");
      item.classList.toggle("text-change");
    });
  }
});

//section promotion

//Je créé une fonction pour qu'au clic sur le bouton next2 et le bouton prev2 le carousel change de slide

const carousel2Texts = Array.prototype.slice.call(
  document.querySelectorAll(".carousel6-item--text")
);
console.log(carousel2Texts);

const nextButton2 = document.getElementById("next2");
const prevButton2 = document.getElementById("prev2");

function nextItem2() {
  // Trouver l'élément actif
  let activeItem2 = carousel2Texts.find((item) =>
    item.classList.contains("active")
  );
  if (activeItem2) {
    // Enlever la classe 'active'
    activeItem2.classList.remove("active");

    // Trouver l'index de l'élément actif
    let activeIndex2 = carousel2Texts.indexOf(activeItem2);

    // Si on est à la fin du tableau, retourner au début, sinon passer à l'élément suivant
    if (activeIndex2 === carousel2Texts.length - 1) {
      carousel2Texts[0].classList.add("active");
    } else {
      carousel2Texts[activeIndex2 + 1].classList.add("active");
    }
  }
}

// Fonction pour passer à l'élément précédent
function prevItem2() {
  // Trouver l'élément actif
  let activeItem2 = carousel2Texts.find((item) =>
    item.classList.contains("active")
  );
  if (activeItem2) {
    // Enlever la classe 'active'
    activeItem2.classList.remove("active");

    // Trouver l'index de l'élément actif
    let activeIndex2 = carousel2Texts.indexOf(activeItem2);

    // Si on est au début du tableau, aller à la fin, sinon passer à l'élément précédent
    if (activeIndex2 === 0) {
      carousel2Texts[carousel2Texts.length - 1].classList.add("active");
    } else {
      carousel2Texts[activeIndex2 - 1].classList.add("active");
    }
  }
}
// Ajouter des écouteurs d'événements aux boutons
if (nextButton2 && prevButton2) {
  nextButton2.addEventListener("click", nextItem2);
  //console.log('bouton nextButton cliqué');
  prevButton2.addEventListener("click", prevItem2);
}
