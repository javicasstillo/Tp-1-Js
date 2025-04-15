//Escribe un programa que pida un número y diga si es divisible por 2

const numero1 = parseInt(prompt("Escribe un numero y te dire si es divisible por 2"))

if(numero1 %2 === 0){
    document.writeln(`${numero1} es divisible por 2`)
} else {
    document.writeln(`${numero1} no es divisible por 2`)
}