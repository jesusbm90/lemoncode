// 3. Clone Merge

// Clone
// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:

const originalObject = { a: 1, b: 2, c: 3 };

function clone(source) {
  if (typeof source !== "object" || source === null) {
    return "No object provided";
  }

  const cloneObj = {};

  for (const key in source) {
    cloneObj[key] = source[key];
  }

  return cloneObj;
}

const noObject = "A";
const clonedNoObject = clone(noObject);
console.log(clonedNoObject);

const clonedObject = clone(originalObject);
console.log(clonedObject);
console.log(clonedObject === originalObject);

// Merge
// Implementa una función merge que, dados dos objetos de entrada source y target, devuelva un nuevo objeto con todas las propiedades de target y de source, y en caso de propiedades con el mismo nombre, source sobreescribe a target.

const jesus = {
  name: "Jesus",
  age: 31,
  profession: "QA",
};

const bender = {
  name: "Bender",
  surname: "Rodriguez",
  country: "USA",
  profession: "Bending",
};

function merge(source, target) {
  let newPerson = {};

  if (typeof source === "object" && typeof target === "object") {
    newPerson = clone(source);

    for (const key in target) {
      if (!newPerson.hasOwnProperty([key])) {
        newPerson[key] = target[key];
      }
    }
  } else {
    newPerson = "No object provided";
  }

  return newPerson;
}

const sourceJesus = merge(jesus, bender);
console.log(sourceJesus === jesus);
console.log(sourceJesus === bender);
console.log(jesus);
console.log(bender);
console.log(sourceJesus);

const sourceBender = merge(bender, jesus);
console.log(sourceBender === jesus);
console.log(sourceBender === bender);
console.log(jesus);
console.log(bender);
console.log(sourceBender);
