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

// Read le 10 dernières lignes du contenu du file.txt
const content = fs.readFileSync('file.txt', 'utf-8') // Read
const last10Line = content.split(`\n`) // Array
const str = last10Line.join('\n') // Array => str
console.log(str.slice((str.length)-20))
