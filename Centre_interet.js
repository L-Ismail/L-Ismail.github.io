// Partie typed.js
// typed est une instance de la classe Typed, propre à la bibliothèque typed.js.
// Dans cette instance de classe, on récupère l'élément associé à l'identifiant #element
// dans la page html (ici le titre paragraphe), on applique les modalité de transformation dans string:
// (apparition de la première lettre avec '<i>First</i> sentence.', puis de la suite avec '&amp; a second sentence.' ),
// et on applique une rapidité de transition de l'apparition des lettre à 50.



var typed = new Typed('#element', {
    strings: ['Passions et Intérêts 催し物'],
    typeSpeed: 50,
  });


// J'ai pris l'exemple basique donné par granim pour le fond d'écran, ici, la variable granimInstance est une instance 
// de la classe Granim, qui lui permet d'utiliser les fonctionnalité de granim.js, on y règle les options comme la
// direction du dégradé avec direction, permettant de balayer les couleurs de droite à gauche, ou bien de mettre en pause
// le fond d'écran lorsqu'il n'est pas affiché. Et gradients permet de choisir les couleurs du dégradé ainsi que 
// leur position dans le balayage

var granimInstance = new Granim({
    element: '#canvas-basic',
    direction: 'left-right',
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                [
                    { color: '#ffffff', pos: .2 }, // Blanc
                    { color: '#a8dadc', pos: .8 }, // Bleu pastel
                    { color: '#457b9d', pos: 1 }   // Bleu légèrement soutenu
                ], [
                    { color: '#f1faee', pos: 0 },  // Blanc cassé
                    { color: '#cdeefb', pos: .2 }, // Bleu ciel très clair
                    { color: '#1d3557', pos: .75 } // Bleu profond mais pas trop sombre
                ]
                

                // [
                //     { color: '#1b4332', pos: .2 }, // Vert forêt foncé
                //     { color: '#0a3d62', pos: .8 }, // Bleu nuit
                //     { color: '#206a5d', pos: 1 }   // Vert émeraude
                // ], [
                //     { color: '#003566', pos: 0 },  // Bleu profond
                //     { color: '#0b525b', pos: .2 }, // Bleu canard foncé
                //     { color: '#1e6091', pos: .75 } // Bleu acier
                // ]
                
                // [
                //     { color: '#2a9d8f', pos: .2 }, // Vert d'eau
                //     { color: '#264653', pos: .8 }, // Bleu pétrole
                //     { color: '#48cae4', pos: 1 }   // Bleu clair
                // ], [
                //     { color: '#0077b6', pos: 0 },  // Bleu océan
                //     { color: '#00b4d8', pos: .2 }, // Bleu turquoise
                //     { color: '#90e0ef', pos: .75 } // Bleu pastel
                // ]
                
                // [
                //     { color: '#833ab4', pos: .2 },
                //     { color: '#fd1d1d', pos: .8 },
                //     { color: '#38ef7d', pos: 1 }
                // ], [
                //     { color: '#40e0d0', pos: 0 },
                //     { color: '#ff8c00', pos: .2 },
                //     { color: '#ff0080', pos: .75 }
                // ],
            ]
        }
    }
});