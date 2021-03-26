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
const { copyFileSync } = require('fs')

const TAB = []

// Read le contenu des file.txt => un array
for (let i = 2; i < process.argv.length -1; ++i) {
    TAB.push(fs.readFileSync(process.argv[i], 'utf-8'))
    console.log(TAB)
}

// TAB => str
const str = TAB.join('\n')
console.log(str)





