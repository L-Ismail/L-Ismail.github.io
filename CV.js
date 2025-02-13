src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"
// La classe Moi contient un constructeur qui me permettra d'entrer mes informations comme attributs, ces attributs, créer 
// dans l'instance de la classe Moi infos_persos seront afficher avec la fonction afficherInfos() dans la division
// d'identifiant: infos

class Moi {
    nom = ""; // propriété nom
    age = ""; // propriété age, par défaut 0
    adresse="";// propriété adresse etc.
    courriel=""
    telephone=""
    universite=""
    permis=""
    // Constructeur
    constructor(nom, age, adresse, courriel, telephone, universite, permis) {
        this.nom = nom;
        this.age = age;
        this.adresse=adresse;
        this.courriel=courriel;
        this.telephone=telephone;
        this.universite=universite;
        this.permis=permis;
    }
}

function afficherInfos() {
    var html="<div class='nom'><h1>"+this.nom+"</span></h1>";
        html+="<div class='age'>"+this.age+"</div>";
        html+="<div class='adresse'>"+this.adresse+"</div>";
        html+="<div class='courriel'>"+this.courriel+"</div>";
        html+="<div class= 'telephone'> "+this.telephone+"</div>";
        html+="<div class= 'universite'> "+this.universite+"</div>";
        html+="<div class='permis'>"+this.permis+"</div>";
        return html;
    }
    var infos_perso = new Moi; 
    infos_perso={
        nom: "Ismaël Diallo",
        age: "23 ans" ,
        adresse: "Annemasse, Haute-Savoie, 74100",
        courriel: "28avenuearistide@gmail.com",
        telephone: "06 72 37 18 06",
        universite: "IAE Savoie Mont-Blanc, Annecy-Le-Vieux",
        permis: "Permis B",
        display:afficherInfos
    };
    console.log(infos_perso)

document.getElementById("infos").innerHTML=infos_perso.display()


// Partie typed.js
// typed est une instance de la classe Typed, propre à la bibliothèque typed.js.
// Dans cette instance de classe, on récupère l'élément associé à l'identifiant #element
// dans la page html (ici le titre paragraphe), on applique les modalité de transformation dans string:
// (apparition de la première lettre avec '<i>First</i> sentence.', puis de la suite avec '&amp; a second sentence.' ),
// et on applique une rapidité de transition de l'apparition des lettre à 50.



var typed = new Typed('#element', {
    strings: ['Profil 形状'],
    typeSpeed: 50,
  });




