// 2. Concat

// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. Utiliza rest / spread operators.

const arrA = [1, 2, 3];
const arrB = [4, 5, 6];

const concat = (a, b) => {
  return [...a, ...b];
};

console.log(concat(arrA, arrB));

// Opcional
// Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).

function optionalConcat() {
  let optionalArray = [];

  for (let i = 0; i < arguments.length; i++) {
    optionalArray.push(...arguments[i]);
  }

  return optionalArray;
}

const arrC = [7, 8, 9];
const arrD = [10, 11, 12];

console.log(optionalConcat(arrA, arrB, arrC));
console.log(optionalConcat(arrA, arrB, arrC, arrD));
