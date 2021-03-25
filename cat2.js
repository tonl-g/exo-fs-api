/* Améliorer l'exercice cat.js précédent en ajoutant la possibilité d'afficher plusieurs fichiers.

node cat.js file1.txt file2.txt file3.txt
Affiche le contenu de file1.txt, file2.txt, file3.txt à la suite sur l'écran.
Gestion de l'erreur si pas le bon nombre d'arguments.
Gestion de l'erreur si l'un des fichiers à afficher n'existe pas. */

const fs = require('fs') // Importe tout le module FS

// Vérifier la command line
if (process.argv.length !==5) {
    console.log(`usage: node cat2.js file1.txt file2.txt file3.txt`)
    process.exit(1)
}

// Check if file exists
if (!fs.existsSync(process.argv[2] || process.argv[3] || process.argv[4])) {
    console.log(`Error: ${process.argv[2]} ${process.argv[3]} ${process.argv[4]} does not exist`) // A revoir
    process.exit(1)
}

let content1 = fs.readFileSync(process.argv[2], 'utf-8')
let content2 = fs.readFileSync(process.argv[3], 'utf-8')
let content3 = fs.readFileSync(process.argv[4], 'utf-8')

console.log(`Voici le contenu de file1.txt ${content1}`)
console.log(`Voici le contenu de file2.txt ${content2}`)
console.log(`Voici le contenu de file3.txt ${content3}`)