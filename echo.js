/* Ce programme n'utilise pas l'api fs

node echo.js hello hard fork
hello hard fork
Affiche à l'écran les strings passées en arguments. */

// Check si + de 2 arguments minimum
if (process.argv.length === 2) {
    console.log(`usage: node echo.js write something`)
    process.exit(1) 
}

// Boucle sur nombre d'arguments str et concaténation des str
let str = ' '
for (let i = 2; i < process.argv.length; ++i) {
    str += `${process.argv[i]}`
}

console.log(str.trim())