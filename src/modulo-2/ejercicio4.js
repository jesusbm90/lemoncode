// 4. Read Books
// Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro. Un libro es un objeto con title como string y isRead como booleano. En caso de no existir el libro devolver false TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.

const books = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
  { title: "IT", isRead: false },
  { title: "Sapiens", isRead: false },
  { title: "Watchmen", isRead: true },
];

function isBookRead(books, titleToSearch) {
  if (!Array.isArray(books)) {
    return "No array item provided";
  }

  const book = books.find((book) => book.title === titleToSearch);

  if (book) {
    return book.isRead
      ? `${titleToSearch} se ha leído`
      : `${titleToSearch} no se ha leído`;
  } else {
    return `${titleToSearch} no se encuentra`;
  }
}

console.log(isBookRead("no es un array", "ITA"));
console.log(isBookRead(books, "IT"));
console.log(isBookRead(books, "ITA"));
console.log(isBookRead(books, "Harry Potter"));
console.log(isBookRead(books, "Harry Potter y la piedra filosofal"));
console.log(isBookRead(books, "Sapiens"));
console.log(isBookRead(books, "Watchmen"));
console.log(isBookRead(books, "Canción de hielo y fuego"));
