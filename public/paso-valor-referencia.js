//paso por valor 
let x=1
let y='hola'
let z=null

let a=x
let b=y
let c=z

console.log(x,y,z,a,b,c)

a=12
b='Platzi'
c=undefined
console.log(x,y,z,a,b,c)

//Paso por referencia
let frutas=['manzana']
frutas.push('pera')//agrega valor al array
console.log(frutas)

let panes=['🍞']
let copiapanes=panes
panes.push('🥐')

console.log(panes,copiapanes)

let frutas2={
    naranja:'🍊'
}
let vegetales=frutas2
vegetales.naranja='🥦'
console.log(frutas2,vegetales)

let ropa={
    blusa:'👚'
}
ropa.pantalon='👖'
console.log(ropa)