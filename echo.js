/* Ce programme n'utilise pas l'api fs

node echo.js hello hard fork
hello hard fork
Affiche à l'écran les strings passées en arguments. */

// Vérifier la command line 
if (process.argv.length === 2){
    console.log(`Error: node echo.js and write something`)
    process.exit(1)
}

let str = ' '
for(let i = 2; i < process.argv.length; ++i) {
  str += ` ${process.argv[i]}`
}
console.log(str.trim())