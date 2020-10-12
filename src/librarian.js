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
    for (var shelf in this.library.shelves) {
      for (var i = 0; i < this.library.shelves[shelf].length; i++) {
        if (this.library.shelves[shelf][i].title === title) {
          this.library.shelves[shelf].splice(i, 1)
          return `Yes, we have ${title}`
        }
      }
    }
    return `Sorry, we do not have ${title}`
  }

  calculateLateFee(days) {
    return Math.ceil(days * .25)
  }

}


module.exports = Librarian;
