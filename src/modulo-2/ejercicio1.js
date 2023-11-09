// 1. Array operations

// Implementa una función head (inmutable), tal que, dado un array como entrada extraiga y devuelva su primer elemento. Utiliza destructuring.

const array = ["a", "b", "c", "d", "e"];

const head = ([firstElement]) => firstElement;

console.log(head(array));

// Implementa una función tail (inmutable), tal que, dado un array como entrada devuelta todos menos el primer elemento. Utiliza rest operator.

const tail = ([firstElement, ...restElements]) => restElements;

console.log(tail(array));

// Implementa una función init (inmutable), tal que, dado un array como entrada devuelva todos los elementos menos el último. Utiliza los métodos que ofrece Array.prototype.

const init = (arr) => {
  // Para evitar modificar el array original.
  const copyArr = [...arr];
  copyArr.pop();

  return copyArr;
};

console.log(init(array));

// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.

const last = (arr) => {
  // Para evitar modificar el array original.
  const copyArr = [...arr];

  return copyArr.pop();
};

console.log(last(array));
