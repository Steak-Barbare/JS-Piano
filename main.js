// clavier définit en qwerty ?


// Associationn d'une variable à un fichier .wav pour chaque élément de la batterie virutelle
var clap = new Audio("sounds/clap.wav");
var hihat = new Audio("sounds/hihat.wav");
var kick = new Audio("sounds/kick.wav");
var openhat = new Audio("sounds/openhat.wav");
var boom = new Audio("sounds/boom.wav");
var ride = new Audio("sounds/ride.wav");
var snare = new Audio("sounds/snare.wav");
var tom = new Audio("sounds/tom.wav");
var tink = new Audio("sounds/tink.wav");



document.addEventListener("keydown", function(event) {
   // ajout évenement quand on appuie sur la touche A du clavier (méthode différente car le navigateur confond "A" et "Q" ? ne marche pas avec un event.code === "KeyA")
  if (event.key === "A" || event.key === "a" ) {
    // cloneNode permet de lire un nouvel enregistrement audio sans attendre la fin de la lecture précédente
    var clapLoop = clap.cloneNode();
    clapLoop.play();
  }
  if (event.code === "KeyS") {
    var hihatLoop = hihat.cloneNode();
    hihatLoop.play();
  }
  if (event.code === "KeyD") {
    var kickLoop = kick.cloneNode();
    kickLoop.play();
  }
  if (event.code === "KeyF") {
    var openhatLoop = openhat.cloneNode();
    openhatLoop.play();
  }
  if (event.code === "KeyG") {
    var boomLoop = boom.cloneNode();
    boomLoop.play();
  }
  if (event.code === "KeyH") {
    var rideLoop = ride.cloneNode();
    rideLoop.play();
  }
  if (event.code === "KeyJ") {
    var snareLoop = snare.cloneNode();
    snareLoop.play();
  }
  if (event.code === "KeyK") {
    var tomLoop = tom.cloneNode();
    tomLoop.play();
  }
  if (event.code === "KeyL") {
    var tinkLoop = tink.cloneNode();
    tinkLoop.play();
  }
});



