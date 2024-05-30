//Tipo de dato primitivo -  inmutable
let numero =23
numero = numero +10
console.log(numero)


let verdadero=true
verdadero=false
console.log(verdadero)


//Tipo de dato complejo - mutable
//objeto
let usuario ={nombre:'pepito',edad: 15}
usuario.edad=20
console.log(usuario)

//array
let frutas=['manzana','pera']
frutas[0]='naranja'
console.log(frutas)

//function
function cambiaNombre(objeto){//se crea la funcion
    objeto.nombre='Nuevo Nombre'
}
let persona={nombre:'Antonio'}//se crea el objeto

cambiaNombre(persona)//se ejecuta la funcion

console.log(persona)
