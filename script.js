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
var mensen;
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
  mensen = [{
    xPosities: 320,
    yPosities: 100,
    speedsX: random(-5, 5),
    speedsY: random(-5, 5)
  },
  {
    xPosities: 500,
    yPosities: 490,
    speedsX: random(-5, 5),
    speedsY: random(-5, 5)
  },
  {
    xPosities: 450,
    yPosities: 200,
    speedsX: random(-5, 5),
      speedsY: random(-5, 5)
  },
  {
    xPosities: 400,
    yPosities: 300,
    speedsX: random(-5, 5),
      speedsY: random(-5, 5)
  },
  {
    xPosities: 520,
    yPosities: 230,
    speedsX: random(-5, 5),
        speedsY: random(-5, 5)
  }
  ];
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // zwarte achtergrond
  background(0, 0, 0);





  

  // update positie
  for (var i = 0; i < mensen.length; i++) {

    // teken
    noStroke;
    fill(255, 255, 255);
    rect(mensen[i].xPosities, mensen[i].yPosities, BREEDTE, BREEDTE);

    mensen[i].xPosities = mensen[i].xPosities + mensen[i].speedsX[i];
    mensen[i].yPosities = mensen[i].yPosities + mensen[i].speedsY[i];

    // stuiter evt. tegen de kanten
    if (mensen[i].xPosities <= 0 || mensen[i].xPosities + BREEDTE >= width) {
      mensen[i].speedsX[i] = mensen[i].speedsX[i] * -1;
    }

    if (mensen[i].yPosities <= 0 || mensen[i].yPosities + BREEDTE >= height) {
      mensen[i].speedsY[i] = mensen[i].speedsY[i] * -1;
    }

  }
}