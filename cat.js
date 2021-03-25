/* node cat.js file.txt
Affiche le contenu de file.txt sur l'écran Gestion d'erreur si pas le bon nombre d'arguments.
Gestion d'erreur si file.txt n'existe pas. */

const fs = require('fs') // Importe tout le module FS

// Vérifier la command line
if (process.argv.length !==3) {
    console.log(`usage: node cat.js text.txt`)
    process.exit(1)
}

// Check if file exists
if (!fs.existsSync(process.argv[2])) {
    console.log(`Error: ${process.argv[2]} does not exist`)
    process.exit(1)
}

let content = fs.readFileSync(process.argv[2], 'utf-8')

console.log(content)