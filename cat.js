/* node cat.js file.txt
Affiche le contenu de file.txt sur l'écran Gestion d'erreur si pas le bon nombre d'arguments.
Gestion d'erreur si file.txt n'existe pas. */

const fs = require('fs')
const { readFileSync } = require('fs')

// Check min et max 3 arguments
if (process.argv.length !== 3) {
    console.log(`usage: node cat.js file.txt`)
    process.exit(1) 
}

// Check si file.txt existe
if (!fs.existsSync(process.argv[2])) {
    console.log('Error: file.txt does not exist')
    process.exit(1)
}

// Check si c'est bien un fichier 
const stats = fs.statSync(process.argv[2])
if (!stats.isFile()) {
    console.log(`Error: ${process.argv[2]} is not a file`)
    process.exit(1)
}

// Read le contenu du file.txt
const content = fs.readFileSync(process.argv[2], 'utf-8')

console.log(content)