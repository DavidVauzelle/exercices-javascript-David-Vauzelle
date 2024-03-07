// Pour connaitre le prix HT
let prixHT = prompt("Quel est le prix HT ?");

// Pour changer un string en number
let numPrixHT = parseInt(prixHT);

// Résultat attendu dans la console, pour un prixHT de 100€ : 
// prix HT : 100 €
console.log(`prix HT : ${numPrixHT}`);

// Pour connaitre la taxe
let taxe = prompt("Quel est la taxe ?");

// Pour changer un string en number
let numTaxe = parseInt(taxe);

// Pour calculer le montant de la taxe
let tauxDeTaxe = numPrixHT * 0.15;

// Pour changer un string en number
let numTauxDeTaxe = parseInt(tauxDeTaxe);

// prix TTC : 115 €
let prixTTC = numPrixHT + numTauxDeTaxe;
console.log(`prix TTC : ${prixTTC}`);


