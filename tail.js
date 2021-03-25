/* node tail.js file.txt
Affiche les 10 dernières lignes du fichier file.txt.
Gestion de l'erreur si pas le bon nombre d'arguments.
Gestion de l'erreur si file.txt n'existe pas. */

const fs = require('fs') // Importe tout le module FS

// Vérifier la command line
if (process.argv.length !==3) {
    console.log(`usage: node tail.js file.txt`)
    process.exit(1)
}

// Check if file exists
if (!fs.existsSync(process.argv[2])) {
    console.log(`Error: ${process.argv[2]} does not exist`)
    process.exit(1)
}

let lastContent = fs.readFileSync(process.argv[2], 'utf-8')

console.log(lastContent)