/* Améliorer l'exercice cat.js précédent en ajoutant la possibilité d'afficher plusieurs fichiers.

node cat.js file1.txt file2.txt file3.txt
Affiche le contenu de file1.txt, file2.txt, file3.txt à la suite sur l'écran.
Gestion de l'erreur si pas le bon nombre d'arguments.
Gestion de l'erreur si l'un des fichiers à afficher n'existe pas. */

const fs = require('fs')
const { readFileSync } = require('fs')

const PATH = './' // Pour le directory .txt

// Check si + de 2 arguments minimum
if (process.argv.length === 2) {
    console.log(`usage: node cat2.js .txt and something .txt`)
    process.exit(1) 
}

// Check si .txt existent
for (let i = 2; i < process.argv.length; ++i) {
    path = `./${process.argv[i]}`
    if (!fs.existsSync(process.argv[i])) { // ExistsSync
    console.log(`Error: ${process.argv[i]} Such a file does not exist`)
    process.exit(1)
}
}

// Read le contenu des file.txt
for (let i = 2; i < process.argv.length; ++i) {
    const content = readFileSync(process.argv[i], 'utf-8')
console.log(content)
}
