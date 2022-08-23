// muestre los primeros 10 numeros de sucesion Fibonacci
// las sucesion inicia con 0 y 1, la sucesion siguiente = las suma de los dos anteriores

// declamos las varible de inicio de la sucesion
var num1 = 0
var num2 = 1

// la funcion para que sume num1 + num2 = resultado
// index = iteraccion, mientras index sea menor a 10 ejecutar el codigog


for (let index = 0; index < 10; index ++){
    console.log("soy iteracion " + index)
    
    resultado = num1 + num2
    console.log(num1 + " + " + num2 + " = " + resultado)
    num1 = num2
    num2 = resultado

    }
    // if (index < 3)
    // var num1= 0 + num3; num2 = 1, num3 = num1 + num2;
    // console.log(num3)
