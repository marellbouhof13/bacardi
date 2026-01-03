// JavaScript Document
console.log("hi");




var openButton = document.querySelector('nav button[aria-label="open menu"]');
var sluitButton = document.querySelector('nav button[aria-label="sluit menu"]');
var deNav = document.querySelector('nav');

var titel = document.querySelectorAll("h2");
var tekst = document.querySelectorAll("p");

var header = document.querySelector('header');

var laadButton = document.querySelector(".laadButton");
var artikelSection = document.querySelector(".artikels");

// Menu /*bron node pen*/
openButton.addEventListener("click", function() {
  deNav.classList.add("toonMenu");
});

sluitButton.addEventListener("click", function() {
  deNav.classList.remove("toonMenu");
});

window.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    deNav.classList.remove("toonMenu");
  }
});


// Sluit menu
sluitButton.onclick = sluitMenu;

function sluitMenu() {
  deNav.classList.remove("toonMenu");
}


// kleur header
window.addEventListener("scroll", function() {
  if (window.scrollY > 50) {
    header.classList.add("wit");
    header.classList.remove("doorzichtig");
  } else {
    header.classList.remove("wit");
    header.classList.add("doorzichtig");
  }
});

// teskt slide-in /*bron node pen*/ /*behulp van studentenassistent*/
if (window.location.pathname === "/" || window.location.pathname.endsWith("/index.html")) { //Hiermee kijk je naar de url waar de gebruiker op zit. als dit de index is, begint de functie pas met uitvoeren
  var observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      var intersecting = entry.isIntersecting;
 
      console.log(entry);
      if (intersecting) {
        entry.target.classList.add("inbeeld");
      }
    });
  });
 
  document.querySelectorAll("h2, p").forEach((el) => {
    observer.observe(el);
  });
}



// image zoom-in met scrollen 
window.addEventListener("scroll", () => {
  const img = document.querySelector("section:nth-of-type(3) img");

  const scrollY = window.scrollY;
  const scale = 1 + scrollY / 3000;
});


// laad button over ons pagina
if (window.location.pathname === "/" || window.location.pathname.endsWith("/overons.html"))
  laadButton.onclick = function () {
  artikelSection.classList.add("toonArtikels");
};



// video op pauze
  var video = document.querySelector("video");

  video.addEventListener("click", () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });

