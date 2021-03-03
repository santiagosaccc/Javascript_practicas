const numero = 'santago';
let numeros= 24;
console.log(numeros + " " + numero);
//resordemos que el cosnt tiene un avariable que no puede ser cambiada 
//let es una variable de bloque

if (true){

    let numeros = 60;// que sucede aca que la variable 
    console.log(numeros)
}
console.log(numeros)

///parametros para funcion de flecha y funcion normal 
function myFuction(){
   console.log(50)
}
myFuction()//por medio de esta declaracion 

///funciones de flecha
let newFuction = () =>{//por medio de esto podemos ver la diferencia de argumentos para ejecutar la funcion de flecha 

    console.log(800)
}
newFuction()
//pramentros

const parametrosNew = (numeroz) =>{

    console.log(numeroz)
}
parametrosNew(5)/// aca me retorna el parametro que le estoy indicando 

///tipificacion cuando tenemos una funcion con return tenemos que poner el valor en un resultado
const RetornandoLos = (nub,ned) =>{

    return ( nub + ned)
}
const resultado = RetornandoLos(40,30)
console.log(resultado)// aca estamos llmando a la variable a la cual le aviamos guardado el valor de los parametros de mi funcion 

<<<<<<< HEAD
//como usar la funcion de flecha sin un return
let funcionsin =(b2,b4) => (b2 = b4)
const total = funcionsin(88,77)
console.log(total)
=======
>>>>>>> main



