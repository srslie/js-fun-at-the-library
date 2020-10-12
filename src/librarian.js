var checkoutBook = require('../src/library.js').checkoutBook;
var searchShelf = require('../src/shelf.js').searchShelf;

class Librarian {
  constructor(librarianName, library) {
    this.name = librarianName;
    this.library = library;
  }

  greetPatron(patron, isMorning) {
    return isMorning ? `Good morning, ${patron}!` : `Hello, ${patron}!`
  }

  findBook(title) {
    if (library.shelves.fantasy.includes(title)) {
      return `Yes, we have ${tile}`
    } else if (library.shelves.nonFiction.includes(title)) {
      return `Yes, we have ${tile}`
    } else if (library.shelves.fiction.includes(title)) {
      `Yes, we have ${tile}`
    } else {
      return `Sorry, we do not have ${title}`
  }
}
} 
module.exports = Librarian;
