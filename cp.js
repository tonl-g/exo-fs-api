/* node cp.js src.txt dst.txt
Copie src.txt vers dst.txt.
Gestion d'erreur si pas le bon nombre d'arguments.
Gestion d'erreur si src.txt n'existe pas. */

const fs = require('fs')
const { copyFileSync } = require('fs')

// Check min et max 4 arguments
if (process.argv.length !== 4) {
    console.log(`usage: node cp.js src.txt dst.txt`)
    process.exit(1) 
}

// Check si src.txt existe
if (!fs.existsSync(process.argv[2])) {
    console.log('Error: src.txt does not exist')
    process.exit(1)
}

// Copy src.txt dans dst.txt
const copyFile = copyFileSync('./src.txt', './dst.txt')

console.log('Le contenu de src.txt à bien été copié dans dst.txt')

