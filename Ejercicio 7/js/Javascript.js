//Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

const numero1 = parseInt(prompt("Ingrese un numero"))
const numero2 = parseInt(prompt("Ingrese otro numero"))
const numero3 = parseInt(prompt("Ingrese otro numero"))

if (numero1 > numero2 && numero1 > numero3){
    document.writeln(`${numero1} es el mayor de todos numeros que usted ingreso`)
} else if (numero2 > numero1 && numero2 > numero3) {
    document.writeln(`${numero2} es el mayor de todos numeros que usted ingreso`)
} else if (numero3 > numero1 && numero3 > numero2) {
    document.writeln(`${numero3} es el mayor de todos numeros que usted ingreso`)
} else {
    document.writeln("Los numeros son iguales")
}
