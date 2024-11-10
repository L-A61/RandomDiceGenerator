const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const myResult = document.getElementById("myResult");
const myProficiency = document.getElementById("myProficiency");
const myOption = document.getElementById("myOption");

const min = 1; // constante du nombre de face minimal lors du lancement de page
let max = 4; // valeur par défaut du nombre de face maximal lors du lancement de page
let proficiencyBonus = "";
let DC;

let randomNum;

// Mise à jour du bonus pour le lancer de dés selon la quantité selectionné sur la page
myProficiency.addEventListener("change", function() {
    proficiencyBonus = parseInt(myProficiency.value) || 0;
});

// Mise à jours du nombre de face maximal le dés aura selon l'option de dés selectionner sur la page
myOption.addEventListener("change", function() {
    switch(myOption.value) {
        case "d4":
            max = 4;
            break;
        case "d6":
            max = 6;
            break;
        case "d8":
            max = 8;
            break;
        case "d10":
            max = 10;
            break;
        case "d12":
            max = 12;
            break;
        case "d20":
            max = 20;
            break;
        case "d100":
            max = 100;
            break;
        default:
            break;
    }
    DC = max / 2;  // Assigner la valeur minimal à atteindre pour que le lancer soit considérer comme un succès (ici: nombre face maximum diviser par 2)
});

// Fonction de lancer de dès quand on clique sur le bouton nommé myButton.
myButton.onclick = function(){
    
    // Chiffre aléatoire entre le chiffre minimum et maximal de face, prenant en compte le bonus. myLabel affichera le résultat du calcul
    randomNum = Math.floor(Math.random() * max) + min + proficiencyBonus;
    myLabel.textContent = randomNum;
    
    // Si la valeur du randomNum est supérieur à la valeur de la variable DC, le HTML et CSS de myLabel et myResult sera changer pour que le nombre soit vert et myLabel montrant "Success",
    // sinon le chiffre devient rouge et myLabel montre "Failure"
    if (randomNum >= DC) {
        myLabel.style.color = "green";
        myResult.innerHTML = "Success!";
    } else {
        myLabel.style.color = "red";
        myResult.innerHTML = "Failure!";
    }
    
    console.log(randomNum);

    // Si le résultat est le maximum possible (prenant en compte le bonus), l'HTML et le CSS de myLabel et myResult change pour afficher "Critical Success" avec le nombre en vert clair. 
    // Un "Critical Failure" avec un nombre rouge foncé si c'est le minimum possible.
    switch(randomNum) {
        case max + proficiencyBonus:
            myLabel.style.color = "lightgreen";
            myResult.innerHTML = "Critical Success!";
            break;
        case min + proficiencyBonus:
            myLabel.style.color = "darkred";
            myResult.innerHTML = "Critical Failure!";
            break;
        default:
            break;
    }
};


