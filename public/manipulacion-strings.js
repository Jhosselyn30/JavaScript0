//ESCRITURA DE STRINGS PRIMITIVOS

const stringprimitivo='Soy un string primitivo'
console.log(typeof stringprimitivo)

const stringprimitivo2=String('Soy un string primitivo')
console.log(typeof stringprimitivo2)

//ESCRITURA DE STRINGS OBJETO(COMPLEJOS)

const STRINGoBJETO=new String('Soy un string objeto')
console.log(typeof STRINGoBJETO)

//Acceder a caracteres

const saludo='Hola. ¿Como estas?'
console.log(saludo[2])
console.log(saludo.charAt(2))

/*El método `indexOf()` en JavaScript se usa para determinar la primera posición
en la que se encuentra un valor especificado dentro de una cadena o de una matriz.
Si el valor se encuentra en la cadena o matriz, `indexOf()` devuelve el índice de
 la primera aparición. Si el valor no se encuentra, devuelve -1.  */
console.log(saludo.indexOf('o'))
console.log(saludo.indexOf('Como'))
console.log(saludo.indexOf('como'))//buscar una palabra que no existe -1
console.log(saludo.lastIndexOf('o'))//posicion de la ultima aparacion 10

console.log(saludo.slice(3,5))//encontrar letras entre caracteres a.
console.log(saludo.length)//longitud del string 18
console.log(saludo.toLocaleUpperCase())//poner todo en mayuscula
console.log(saludo.toLocaleLowerCase())//poner todo en minuscula

const saludoDividido=saludo.split(' ')//dividir un strings egun espacios
console.log(saludoDividido)
console.log(saludoDividido[1])//¿Como

const saludoEspacios=' Hola Mundo '
const saludoSinEspacios=saludoEspacios.trim()//recortar espacios
console.log(saludoSinEspacios)

const saludoOriginal='Hola Mundo'
const nuevosaludo = saludoOriginal.replace('Mundo', '😋')//reemplazar 'Hola 😋'
console.log(nuevosaludo)
