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
var speedsX;
var speedsY;
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

  // initialiseer waarden
  xPosities = [130, 60, 470, 560, 23];
  yPosities = [700, 1010, 40, 80, 900];
  speedsX = [random(4,3), random(-5, 5), random(3,4), random(2,2), random(1,1)];      // random waarde tussen -5 en 5
  speedsY = [random(4,3), random(-5, 5), random(3,4), random(2,2), random(1,1)];      // 👆
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // zwarte achtergrond
  background(0, 0, 0);

  // teken
  noStroke;
  fill(255, 255, 255);
  rect(x, y, BREEDTE, BREEDTE);

  // update positie
  for (var i = 0; i < xPosities.length; i++) {
  xPosities[i] = xPosities[i] + speedsX[i];
  yPosities[i] = yPosities[i] + speedsY[i];

  // stuiter evt. tegen de kanten
  if (x <= 0 || x + BREEDTE >= width) {
    speedsX[1] = speedsX[i] * -1;
  }

  if (y <= 0 || y + BREEDTE >= height) {
    speedsY[i] = speedsY[i] * -1;
  }

}
}