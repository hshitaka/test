document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

// Fonction pour générer une couleur aléatoire
function randomColor() {
    // Générer des valeurs RGB aléatoires
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    // Appliquer la couleur de fond aléatoire au body
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
}

// Ajouter un écouteur d'événement pour le clic sur le titre h1
document.querySelector("h1").addEventListener("click", randomColor);
