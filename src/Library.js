function createLibrary(libraryName) {
  return {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
};


function addBook(library, book) {
  library.shelves[book.genre].push(book)
};


function checkoutBook(library, bookTitle) {
  for (shelfKey in library.shelves) {
    for (var i = 0; i < library.shelves[shelfKey].length; i++) {
      if (bookTitle === library.shelves[shelfKey][i].title) {
        library.shelves[shelfKey].splice(i, 1)
        return `You have now checked out ${bookTitle} from the ${library.name}`
      }
    }
   }
  return `Sorry, there are currently no copies of ${bookTitle} available at the ${library.name}`
}


module.exports = {
  createLibrary: createLibrary,
  addBook: addBook,
  checkoutBook: checkoutBook
};
