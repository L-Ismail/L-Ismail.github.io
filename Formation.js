// FULLPAGE

// fullpage est une instance propre à fullpage.js, elle permet via autoscrolling  et scrollHorizontally de naviguer
// dynamiquement et de centrer automatiquement sur les sections, elle rajoute des ancres comme "first page" 
// afin de s'y retrouver.

new fullpage('#fullpage', {
    autoScrolling:true,
    scrollHorizontally: true,
    sectionsColor : ['black', '#0998ec', '#fc6c7c', '#fec304'],
    navigation: true,
    slidesNavigation: true,
    anchors:['firstPage', 'secondPage', 'thirdPage', 'finalPage'],
    navigationTooltips: ['first', 'second']
  });





// FRISE CHRONOLOGIQUE 1

// Cette frise chronologique a une animation d'affichage pour l’apparition progressive des événements avec showTime(e):, 
// qui change la couleur du point en bleu et fait apparaître la date et le texte en douceur (voir CV.css).
// mais aussi à l'inverse hideTime(e): lors de réinitialisation de la page ou de mouvement du curseur afin de réinitialise l’événement pour le cacher.
// On a aussi un défilement automatique avec slowLoop()pour afficher progressivement les événements avec un délai de 800ms;
// quant à IntersectionObserver :, il permet de détecter quand un élément entre dans la vue (intersectionRatio > 0.9) et il
// déclenche slowLoop() dans ce cas.
// timelineProgress(value) permet de calculer l’avancement de la barre de progression (.timeline-innerline, voir Formation.html).
// et aussi d'ajuster la largeur (width) ou la hauteur (height) selon l’écran.
// Enfin lorsqu’un utilisateur clique sur un événement, les événements antérieurs apparaissent et les suivants peuvent être masqués.

const line = document.querySelector(".timeline-innerline");

let i = 0;
let i2 = 1;
let target1 = document.querySelector(".timeline ul");
let target2 = document.querySelectorAll(".timeline ul li");

const timeline_events = document.querySelectorAll("ul li");

function showTime(e) {
  e.setAttribute("done", "true");
  e.querySelector(".timeline-point").style.background = "blue";
  e.querySelector(".date").style.opacity = "100%";
  e.querySelector("p").style.opacity = "100%";
  e.querySelector("p").style.transform = "translateY(0px)";
}

function hideTime(e) {
  e.removeAttribute("done");
  e.querySelector(".timeline-point").style.background = "rgb(228, 228, 228)";
  e.querySelector(".date").style.opacity = "0%";
  e.querySelector("p").style.opacity = "0%";
  e.querySelector("p").style.transform = "translateY(-10px)";
}

function slowLoop() {
  setTimeout(function () {
    showTime(timeline_events[i]);
    timelineProgress(i + 1);
    i++;
    if (i < timeline_events.length) {
      slowLoop();
    }
  }, 800);
}


function timelineProgress(value) {
  let progress = `${(value / timeline_events.length) * 100}%`;
  if (window.matchMedia("(min-width: 728px)").matches) {
    line.style.width = progress;
    line.style.height = "4px";
  } else {
    line.style.height = progress;
    line.style.width = "4px";
  }
}

let observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0.9) {
        if (window.matchMedia("(min-width: 728px)").matches) {
          slowLoop();
        } else {
          showTime(entry.target);
          timelineProgress(i2);
          i2++;
        }
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 1, rootMargin: "0px 0px -50px 0px" }
);

if (window.matchMedia("(min-width: 728px)").matches) {
  observer.observe(target1);
} else {
  target2.forEach((t) => {
    observer.observe(t);
  });
}


timeline_events.forEach((li, index) => {
  li.addEventListener("click", () => {
    if (li.getAttribute("done")) {
      timelineProgress(index);

      // hide all timeline events from last upto the point clicked
      timeline_events.forEach((ev, idx) => {
        if (idx >= index) {
          hideTime(ev);
        }
      });
    } else {
      timelineProgress(index + 1);
      // show all timeline events from first upto the point clicked
      timeline_events.forEach((ev, idx) => {
        if (idx <= index) {
          showTime(ev);
        }
      });
    }
  });
});

var doit;
window.addEventListener("resize", () => {
  clearTimeout(doit);
  doit = setTimeout(resizeEnd, 1200);
});

function resizeEnd() {
  i = 0;
  slowLoop();
}
