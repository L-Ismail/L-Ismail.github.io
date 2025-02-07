let a= document.createElement("div");
let b= document.getElementsByTagName("col border-bottom border-danger");
let c= document.createElement("div");
// let d= document.createElement('img');
// let b=document.getElementsByClassName("poisson");
// b.append(a);
// Create a class attribute:
//b.createAttribute("class");
//b.append(a);
b[0].append(a)
b[0].append(c);
b[1].className= "infos";
b[1].append(d);


class Moi {
    nom = ""; // propriété nom
    age = ""; // propriété age, par défaut 0
    adresse="";
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
        // html+="<div class='image'><img src='media/"+this.image+"' /></div>";
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
        adresse: "28 Avenue du Giffre, Annemasse, Haute-Savoie, 74100",
        courriel: "28avenuearistide@gmail.com",
        telephone: "06 72 37 18 06",
        universite: "IAE Savoie Mont-Blanc, Annecy-Le-Vieux",
        permis: "Permis B",
        display:afficherInfos
    };
    console.log(infos_perso)

document.getElementById("infos").innerHTML=infos_perso.display()



