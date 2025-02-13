// Partie typed.js
// typed est une instance de la classe Typed, propre à la bibliothèque typed.js.
// Dans cette instance de classe, on récupère l'élément associé à l'identifiant #element
// dans la page html (ici le titre paragraphe), on applique les modalité du texte à faire apparaître dans string:
// (Le mot que l'on souhaite voir apparaitre), et on applique une rapidité de transition de l'apparition des lettre à 50.



var typed = new Typed('#element', {
  strings: ['Compétences スキル'],
  typeSpeed: 50,
});





// fullpage est une instance propre à fullpage.js, elle permet via autoscrolling  et scrollHorizontally de naviguer
// dynamiquement et de centrer automatiquement sur les sections, elle rajoute des ancres comme "first page" 
// afin de s'y retrouver.
new fullpage('#fullpage', {
  autoScrolling:true,
  scrollHorizontally: true,
  sectionsColor : ['#fe5f46', '#0998ec', '#fc6c7c', '#fec304'],
  navigation: true,
  slidesNavigation: true,
  anchors:['firstPage', 'secondPage', 'thirdPage', 'finalPage'],
  navigationTooltips: ['first', 'second']
});



// J'ai utilisé deux graphiques JS, l'un pour mes compétences logiciels, l'autres linguistiques, les constantes permettent
// d'initier les valeurs, les axes et les couleurs de barres du graphiques, new Chart est une fonction propre à chart.js et
// permet d'instancier le graphique avec les options voulues, comme son orientation (vertical/horizontal) et son titre.

const xValues = ["C/C++", "Python", "Javascript/HTML/CSS", "SQL", "C#"];
const yValues = [100, 95, 70, 98, 55, 0];
const barColors = ["red", "green","blue","orange","brown"];

new Chart("graph", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false
    },
    title: {
      display: true,
      text: "Compétences logiciels en %"
    }
  }
});

const x1Values = ["Français 🇫🇷", "Allemand 🇩🇪", "Espagnol 🇪🇸", "Anglais 🇬🇧", "Arabe Standard 🇸🇦"];
const y1Values = [100, 75, 80, 95, 58, 0];
const barColors1 = ["blue", "yellow", "orange", "white", "green"];

new Chart("graph1", {
  type: "horizontalBar",
  data: {
    labels: x1Values,
    datasets: [{
      backgroundColor: barColors1,
      data: y1Values,

    }]
  },

  options: {
        // indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          bar: {
            borderWidth: 2,
          }
        },

     responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      
  
    title: {
      display: true,
      text: "Compétence Linguistique en %"
    }
  }
}
},
);


