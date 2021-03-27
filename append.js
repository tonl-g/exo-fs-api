/* node append.js src1.txt src2.txt src3.txt dst.txt
Copie le contenu de src1.txt, src2.txt, src3.txt vers dst.txt.
append.js prend un nombre variable d'arguments, minimum 2 arguments.
Le fichier de destination sera toujours le dernier de la liste:

node append.js src.txt dst.txt
node append.js src1.txt src2.txt dst.txt
Gestion de l'erreur si pas le bon nombre d'arguments.
Gestion de l'erreur si l'un des fichiers sources à copier n'existe pas. */

const fs = require('fs')
const { readFileSync } = require('fs')
const { writeFileSync } = require('fs')
const { copyFileSync } = require('fs')

// Check si + de 2 arguments minimum
if (process.argv.length === 3) {
    console.log(`usage: node append.js src1.txt... dst.txt`)
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

// Copy les contenus des src.txt dans dst.txt
for (let i = 2; i < process.argv.length; ++i) {
    const copyAll = fs.copyFileSync(process.argv[i], './dst.txt') // Ne copie que le dernier src.txt
}

