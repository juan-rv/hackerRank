//* 1) Escribe una funcion que sume los elementos en diagonal izquierda y derecha en una matriz de 3 X 3; debe de retornar en un arreglo el restante de las dos sumas.

//  1,2,5
//  4,5,6
//  7,8,9    == diagonal iz: 15 diagonal der: 17 ... Resultado esperado = [2]

function restante(arr) {
    let sumDerecha = 0;
    let sumIzquierda = 0;

    for (let i = 0; i < arr.length; i++) {
        sumDerecha += arr[i][i];
        sumIzquierda += arr[i][arr.length - i - 1];
    }
    const total = [Math.abs(sumDerecha - sumIzquierda)]
    return total
}

const arr = [
    [1, 2, 5],
    [4, 5, 6],
    [7, 8, 9]
]

const resultado = restante(arr)
console.log(resultado)

///////////////////////////////////////////////////////////////////

//* 2) De un array muestrame cuantos numeros positivos, negativos y ceros hay, promedialos e imprimelos con 5 0s a la derecha

// Ejemplo: arr=[1,2,0,0,0,-6,-6,-3,-5]
// positivos = 2 / 9 = 0.2 valor esperado = 0.200000
// negativos = 4 / 9 = 0.4 valor esperado = 0.400000
// ceros = 3 / 9 = = 0.3 valor esperado = 0.300000

const promedio = (valor) => {
    let positivos = 0;
    let negativos = 0;
    let ceros = 0;
    const n = valor.length

    for (let i = 0; i < valor.length; i++) {
        if (valor[i] > 0) {
            positivos++
        } else if (valor[i] < 0) {
            negativos++
        } else {
            ceros++
        }
    }
    const promedioPositivo = positivos / n;
    const promedioNegativo = negativos / n;
    const promedioCeros = ceros / n;

    return promedioPositivo.toFixed(5) + '\n' + promedioNegativo.toFixed(5) + '\n' + promedioCeros
}

const valor = [1, 2, 0, 0, 0, -6, -6, -3, -5]
const res = promedio(valor)
console.log(res)