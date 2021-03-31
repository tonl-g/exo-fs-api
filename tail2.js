/* Améliorer le programme précédent pour prendre en compte le paramètre optionnel -n. Par défaut tail affiche les 10 dernières ligne du fichier passé en paramètres, -n permet d'indiquer le nombre de dernières lignes à afficher:

node tail.js -n 20 file.txt
Affiche les 20 dernières lignes du fichier file.txt.
Attention -n suivi d'un nombre est optionnel, ne pas l'utiliser doit exécuter un affichage des 10 dernières ligne du fichier par défaut.
Gestion de l'erreur si pas le bon nombre d'arguments.
Gestion de l'erreur si file.txt n'existe pas.
Gestion de l'erreur si un mauvais argument optionnel est passé.
Gestion de l'erreur si le nombre ligne passé en arguments n'est pas convertible en nombre. */

const fs = require('fs')
const { readFileSync } = require('fs')

let nbLines = 10
let indexFile = 2

// Check si + de 2 arguments minimum
if (process.argv.length !== 3 && process.argv.length !== 5) {
    console.log(`usage: node tail2.js [-n nb] file.txt`)
    process.exit(1) 
}

// Check -n et que l'argument passé à notre programme peut être converti en nombre
if (process.argv[2] === '-n') {
    if (isNaN(process.argv[3])) {
      console.log('Choose the number of lines')
      process.exit(1)
}
nblines = Number(process.argv[3])
  indexFile += 2
}

// Read leslignes du contenu du file.txt
const content = readFileSync(process.argv[indexFile], 'utf-8').split('\n').slice(-nblines).join('\n')
console.log(content)