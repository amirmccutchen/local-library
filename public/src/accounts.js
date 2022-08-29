const findAccountById = (accounts, id) => {
  return accounts.find(account => account.id === id);
}

const sortAccountsByLastName = (accounts) => {
  return accounts.sort((a, b) => a.name.last > b.name.last ? 1 : -1)
}

const getTotalNumberOfBorrows = ({id}, books) => {
  return books.reduce((total, book) => {
    book.borrows.forEach(borrow => {
      if (id === borrow.id) {
        total += 1;
      }
    })
    return total
  }, 0)
}

const getBooksPossessedByAccount = (account, books, authors) => {
  return books.filter((book) => book.borrows.some(acc => acc.id == account.id && acc.returned === false))
    .map(book => { const author = authors.find(author => author.id == book.authorId)
      book.author = author; 
      return book;         
 })
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
