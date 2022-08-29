const findAuthorById = (authors, id) => {
  return authors.find(author => author.id === id);
}

const findBookById = (books, id) => {
  return books.find(book => book.id === id);
}

const partitionBooksByBorrowedStatus = books => {
  const booksReturned = books.filter((book) =>
   book.borrows.every((borrow) => borrow.returned === true)
  );
  const booksBorrowed = books.filter((book) =>
   book.borrows.some((borrow) => borrow.returned === false)
  );
  const finalArray = [[...booksBorrowed], [...booksReturned]];
  return finalArray;
 }

const getBorrowersForBook = (book, accounts) => {
  let result = []; 
  const borrowers = book.borrows;
  borrowers.forEach(borrow => {
    const account = accounts.find(ac => ac.id === borrow.id);
    const object = account;
    object['returned'] = borrow.returned;
    result.push(object);
  })
  return result.slice(0,10); // method limiting size of the array, had to google how to do this since it wasn't covered yet
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
