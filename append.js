/* node append.js src1.txt src2.txt src3.txt dst.txt
Copie le contenu de src1.txt, src2.txt, src3.txt vers dst.txt.
append.js prend un nombre variable d'arguments, minimum 2 arguments.
Le fichier de destination sera toujours le dernier de la liste:

node append.js src.txt dst.txt
node append.js src1.txt src2.txt dst.txt
Gestion de l'erreur si pas le bon nombre d'arguments.
Gestion de l'erreur si l'un des fichiers sources à copier n'existe pas. */

const fs = require('fs') // Importe tout le module FS
const { copyFileSync } = require('fs')

// Vérifier la command line
if (process.argv.length !==6) {
    console.log(`usage: append.js src1.txt src2.txt src3.txt dst.txt`)
    process.exit(1)
}

// Check if file exists
if (!fs.existsSync(process.argv[2] || process.argv[3] || process.argv[4] || process.argc[5])) {
    console.log(`Error: ${process.argv[2]} does not exist`) // A revoir
    process.exit(1)
}

let copy1 = copyFileSync('./src1.txt', './dst.txt') // A revoir
let copy2 = copyFileSync('./src2.txt', './dst.txt')
let copy3 = copyFileSync('./src3.txt', './dst.txt')

let contentSrc1 = fs.readFileSync(process.argv[2], 'utf-8')
let contentSrc2 = fs.readFileSync(process.argv[3], 'utf-8')
let contentSrc3 = fs.readFileSync(process.argv[4], 'utf-8')
let contentDst = fs.readFileSync(process.argv[5], 'utf-8')

console.log('Les contenus de src1.txt, src2.txt et src3.txt ont bien été copié dans dst.txt')
console.log(`Le contenu de src1.txt ${contentSrc1}, src2.txt ${contentSrc2}, src3.txt ${contentSrc3} et le contenu de dst.txt ${contentDst}`)




