//let es una variable de bloque y var es una variable global
let numero = "numero uno";

//const es una variable constante cuando este usando el dom lo vere mas a a fondo
const nombre = "sara";
 var edad = 23;

//con console.log nos muestra en consola los valores
 console.log(nombre,numero,edad);


 //arrays 
 const myArray =[ "sara","santiago","camila","papa" ];
 console.log(myArray);

 //crear un array con los valores qque yo le indique 
const newArray = new Array(1,2,3,4,5,6);
console.log(newArray)
// objetos y entrada en ellos
const miObjeto ={
    nombre:"santiago", edad:19, pais:"colombia"
}
console.log(miObjeto)
//movernos en los objetos
console.log(miObjeto.edad)//mostrara la edad ya que lo estamos iterando

// operaciones aritmeticas
const operacionAritmetica = 5;
let resultado , opereacion;

operacion = (operacionAritmetica + 3)*5+(4*8)/1; //respuesta 72
console.log(operacion);

//funciones

function numerosts (cs ,cd){

    return cs + cd
}
console.log(numerosts(4,4))

//introducir elementos por medio de una variable a una funcion

const integra = mysnumeros(8,6);
function mysnumeros(p,q){
    return p/q
}
//recordemos que el return y nos retorna el valor 
console.log(integra)/// estamos guardando lavariable 

// numeros

let nul = 32;
console.log(nul)
// return numeros
// para cacceder a los elemntos de una matriz usaremos 
const mimatriz=["numero1","numero2","numero3","numero4"];

console.log(mostrarmatriz[1]);
