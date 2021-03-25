/* Ce programme n'utilise pas l'api fs

node echo.js hello hard fork
hello hard fork
Affiche à l'écran les strings passées en arguments. */

if (process.argv.length !==5) {
    console.log(`usage: node echo.js hello hard folk`)
    process.exit(1)
    }

let str1 = (process.argv[2])
let str2 = (process.argv[3])
let str3 = (process.argv[4])

console.log(`${str1} ${str2} ${str3}`)