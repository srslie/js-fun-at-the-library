function createTitle(title) {
  return 'The ' + title
}

function buildMainCharacter(characterName, characterAge, characterPronouns) {
  return {
    name: characterName,
    age: characterAge,
    pronouns: characterPronouns
  }
};

function saveReview(review, reviewArray) {
  if (!reviewArray.includes(review)) {
  reviewArray.push(review)
  }
};

function calculatePageCount(title) {
  return title.length * 20
};

function writeBook(bookTitle, bookCharacter, bookGenre) {
  return {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: bookGenre
  }
};

function editBook(book) {
  book.pageCount = book.pageCount * .75
};


module.exports = {
  createTitle: createTitle,
  buildMainCharacter: buildMainCharacter,
  saveReview: saveReview,
  calculatePageCount: calculatePageCount,
  writeBook: writeBook,
  editBook: editBook
}
