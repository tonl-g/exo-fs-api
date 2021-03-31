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

// Check si + de 2 arguments minimum
if (process.argv.length < 3) {
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

// Check si c'est bien un fichier 
const stats = fs.statSync(process.argv[2])
if (!stats.isFile()) {
    for (let i = 2; i < process.argv.length; ++i) {
    console.log(`Error: ${process.argv[i]} is not a file`)
    process.exit(1)
}
}

/* if file is a file and if that exist
process.argv.slice(2, -1).forEach((el) => { //.slice 2, -1  argv array tranche de argv2 au dernier el
    if (!fs.existsSync(el)) {
      console.log(`warning : ${el} n'existe pas.`);
      process.exit(1);
    }
    const stats = fs.statSync(el);
    if (!stats.isFile()) {
      console.log(`warning : ${el} pas un fichier.`);
      process.exit(1);
    }
  }); */

// Read les contenus des src.txt dans dst.txt
let contentFile = ''
for (let i = 2; i < process.argv.length -1; ++i) {
    contentFile += fs.readFileSync(process.argv[i], 'utf-8') + '\n'
    // console.log(readFile)
}

// Copy les contenus des src.txt dans dst.txt
const copyAllContent = process.argv[process.argv.length -1]
fs.writeFileSync(copyAllContent, contentFile)

// fs.appendFileSync / read and write

