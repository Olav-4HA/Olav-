 /* Opdracht Objectgeorienteerd programmeren
    Informatica - Emmauscollege Rotterdam
 */

/* ******************************************************* */
/* instellingen om foutcontrole van je code beter te maken */
/* ******************************************************* */
///<reference path="p5.global-mode.d.ts" />
"use strict"


/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */
var xPosities;
var yPosities;
var speedX;
var speedY;
const BREEDTE = 20;



/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
  xPosities = [130, 60, 470];
  yPosities = [700, 1010, 40];
  // initialiseer waarden
  // midden van de hoogte van het canvas
  speedX = random(-5, 5);      // random waarde tussen -5 en 5
  speedY = random(-5, 5);      // 👆
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // zwarte achtergrond
  background(0, 0, 0);

  for (var i = 0; i < xPosities.length; i++) {
    rect(xPosities[i], yPosities[i], BREEDTE, BREEDTE);

  // teken
  noStroke;
  fill(255, 255, 255);
  rect(xPosities[i], yPosities[i], BREEDTE, BREEDTE);

  // update positie
  xPosities[i] = xPosities[i] + speedX;
  yPosities[i] = yPosities[i] + speedY;

  // stuiter evt. tegen de kanten
  if (xPosities[i] <= 0 || xPosities[i] + xPosities.length >= width) {
    speedX = speedX * -1;
  }

  if (yPosities[i] <= 0 || yPosities[i] + yPosities.lentgh >= height) {
    speedY = speedY * -1;
  }
  }
}
