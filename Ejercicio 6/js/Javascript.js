//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

const numero1 = parseInt(prompt("Ingrese un numero"))
const numero2 = parseInt(prompt("Ingrese otro numero"))

if (numero1 > numero2){
    document.writeln(`${numero1} es mayor a ${numero2}`)
} else if (numero1 < numero2){
    document.writeln(`${numero1} es menor a ${numero2}`)
} else {
    document.writeln(`${numero1} es igual a ${numero2}`)
}