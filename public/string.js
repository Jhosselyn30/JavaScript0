// CREACION DE STRINGS
const primeraOpcion='Comillas simples'
const segundaOpcion="Comillas simples"
const terceraOpcion= `Comillas simples`

//1. Concatenacion: Opcion +
const direccion='Calle 123'
const ciudad='Lima'
const direccionCompleta='Mi direccion completa es: '+ direccion+ciudad

console.log(direccionCompleta)

const direccionCompletaconEspacio='Mi direccion completa es: '+ direccion+' '+ciudad
console.log(direccionCompletaconEspacio)

//2. Concatenacion: Template literals

const nombre ='Joss'
const pais='peru'
const presentacion=`Hola, soy ${nombre} de ${pais}`
console.log(presentacion)

//3. Concatenacion: join()

const parte1='Me encanta '
const parte2='la gente de'
const parte3='🌈'
const pensamiento=[parte1,parte2,parte3]
console.log(pensamiento.join(' '))

//4. Concatenacion: concat()

const hobbie1='correr'
const hobbie2='leer'
const hobbie3='estudiar'
const hobbies='Mis hobbies son: '.concat(hobbie1,', ',hobbie2,', ',hobbie3,)
console.log(hobbies)

//CARACTERES DE ESCAPE
//const whatDoIdo='I'm Software Enginer'

//1. Escape alternativo
const escapeALternativo="I'm software Engineer"

//2. Barra invertida
const barrainvertida='I\'m software Engineer'

//3. Template literals
const escapeconComillaInvertida=`I'm software Engineer`


//ESCRITURA DE STRINGS LARGOS
/*
las rosas son rojas,
Las violetas son azules,
Caracter inesperado,
En la linea 86.
 */

const poema='Las rosas son rojas,\n'+
            'Las violetas son azules,\n'+
            'Caracter inesperado,\n'+
            'En la linea 86.'

console.log(poema)

const poema2='Las rosas son rojas,\n\
Las violetas son azules,\n\
Caracter inesperado,\n\
En la linea 86.'

console.log(poema2)

const poema3=`Las rosas son rojas,
Las violetas son azules,
Caracter inesperado,
En la linea 86.`

console.log(poema3)