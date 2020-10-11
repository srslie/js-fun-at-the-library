function shelfBook(book, shelf) {
  if (shelf.length < 3)
  shelf.unshift(book)
};

function unshelfBook(title, shelf) {
  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === title) {
        shelf.splice(i, 1)
      }
  }
};

function listTitles(shelf) {
  var titles = []
  for (var i = 0 ; i < shelf.length; i++) {
    titles.push(shelf[i].title)
  }
  return titles.join(', ')
};

function searchShelf(shelf, title) {
  var titles = listTitles(shelf)
  return titles.includes(title)
};


module.exports = {
  shelfBook: shelfBook,
  unshelfBook: unshelfBook,
  listTitles: listTitles,
  searchShelf: searchShelf
};
