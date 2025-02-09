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
                    { color: '#833ab4', pos: .2 },
                    { color: '#fd1d1d', pos: .8 },
                    { color: '#38ef7d', pos: 1 }
                ], [
                    { color: '#40e0d0', pos: 0 },
                    { color: '#ff8c00', pos: .2 },
                    { color: '#ff0080', pos: .75 }
                ],
            ]
        }
    }
});