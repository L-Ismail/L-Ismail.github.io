// Granim est une commandre propre à granim.js permettant de générer un élément graphique dynamique sujet au langage propre
// de cette bibliothèque. Ici, la balise dans le fichier html #canvas-image-blending permet d'y afficher l'image bg-forest,
// d'y appliquer des options comme lighten pour éclaircir l'image, stretch pour l'étendre sur toute la page,on y applique
//  aussi gradients, qui fera un dégradé dynamique des couleurs précisées avec transitionSpeed pour animer le tout 

var granimInstance = new Granim({
element: '#canvas-image-blending',
direction: 'top-bottom',
isPausedWhenNotInView: true,
image : {
    source: 'granim.js-2.0.0/docs/assets/img/bg-forest.jpg',
    blendingMode: 'lighten',
    stretchMode: ['stretch', 'stretch-if-smaller'],
},
states : {
    "default-state": {
        gradients: [
            ['#29323c', '#485563'],
            ['#FF6B6B', '#556270'],
            ['#80d3fe', '#7ea0c4'],
            ['#f0ab51', '#eceba3']
        ],
        transitionSpeed: 7000
    }
}
});
