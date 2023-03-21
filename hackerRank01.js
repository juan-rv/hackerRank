//*01 Suma dos elementos
//? suma dos elementos a y b en la funcion llamada suma
function suma(a, b) {
    return a+b
}
const a = 10;
const b = 20;
const resultado = suma(a, b)
console.log(resultado)
///////////////////////////////////////////////////////////////////////////////////////
//*02 la suma de todos los elementos del array
//? suma todos los numeros que hay en el interior del array
// ar=[1,2,3,4,5,5] = 20
function sumaArray(ar) {
    ar = [1, 2, 3, 4, 5, 5];
    let suma = 0;
    for (let i = 0; i < ar.length; i++) {
        suma += ar[i]
    }
    return suma
} 
console.log(sumaArray())
////////////////////////////////////////////////////////////////////////////////////////

