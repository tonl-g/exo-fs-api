/* node tail.js file.txt
Affiche les 10 dernières lignes du fichier file.txt.
Gestion de l'erreur si pas le bon nombre d'arguments.
Gestion de l'erreur si file.txt n'existe pas. */

const fs = require('fs')
const { readFileSync } = require('fs')

// Check min et max 3 arguments
if (process.argv.length !== 3) {
    console.log(`usage: node tail.js file.txt`)
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

// Read le 10 dernières lignes du contenu du file.txt
let last10Lines = 10
const content = readFileSync(process.argv[2], 'utf-8').split('\n').slice(-last10Lines).join('\n')
console.log(content)
