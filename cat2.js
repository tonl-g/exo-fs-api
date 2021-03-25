/* Améliorer l'exercice cat.js précédent en ajoutant la possibilité d'afficher plusieurs fichiers.

node cat.js file1.txt file2.txt file3.txt
Affiche le contenu de file1.txt, file2.txt, file3.txt à la suite sur l'écran.
Gestion de l'erreur si pas le bon nombre d'arguments.
Gestion de l'erreur si l'un des fichiers à afficher n'existe pas. */

const fs = require('fs') 

let path = `./`

// Check
if (process.argv.length <= 2){
  console.log(`Error: node cat2.js file1.txt file2.txt file3.txt`)
  process.exit(1)
}

for (let i = 2; i < process.argv.length; ++i){
  path = `./${process.argv[i]}`
  if (!fs.existsSync(process.argv[i])) {
    console.log(`Error: ${process.argv[i]} file does not exist`)
    process.exit(1)
  }

  test = fs.statSync(process.argv[i])
  
  if (!test.isFile()) {
    console.log(`Error: ${process.argv[i]} is not a file`)
    process.exit(1)
  }

  const content = fs.readFileSync(process.argv[i],'utf-8')
  console.log(content)
}