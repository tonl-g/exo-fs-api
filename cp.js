/* node cp.js src.txt dst.txt
Copie src.txt vers dst.txt.
Gestion d'erreur si pas le bon nombre d'arguments.
Gestion d'erreur si src.txt n'existe pas. */

const fs = require('fs') // Importe tout le module FS
const { copyFileSync } = require('fs')

const srcPath = `./${process.argv[2]}`

// Vérifier la command line
if (process.argv.length !==4) {
    console.log(`usage: node cp.js src.txt dst.txt`)
    process.exit(1)
}

// Check if file exists
if (!fs.existsSync(process.argv[2])) {
    console.log(`Error: ${process.argv[2]} does not exist`)
    process.exit(1)
}

if(!fs.existsSync(srcPath)){
    console.log(`Error: srcFile does not exist`)
    process.exit(1)
}

let srcTest = fs.statSync(srcPath)

if (!srcTest.isFile()) {
  console.log(`Error: ${process.argv[2]} is not a file`)
  process.exit(1)
}

let copy = copyFileSync('./src.txt', './dst.txt')
let contentSrc = fs.readFileSync(process.argv[2], 'utf-8')
let contentDst = fs.readFileSync(process.argv[3], 'utf-8')

console.log('Le contenu de src.txt à bien été copié dans dst.txt')
console.log(`Le contenu de src.txt ${contentSrc} et le contenu de dst.txt ${contentDst}`)

