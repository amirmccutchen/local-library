const getTotalBooksCount = books => {
  return books.length;
}

const getTotalAccountsCount = accounts => {
  return accounts.length;
}

const getBooksBorrowedCount = (books) => {
  let total = 0;
  for (let i in books) {
    for (let j in books[i].borrows) {
      if (!books[i].borrows[j].returned) {
        total++
      }
    }
  }
  return total;
}

const getMostCommonGenres = (books) => {
  let map = {};
  books.forEach((num) => {
    if (map[num.genre]) {
    map[num.genre]++;
   }  else {
      map[num.genre] = 1;
    }
  });
    return Object.entries(map)
    .map(([name, count]) => {
    return {
     name,
     count
    };
    })
   .sort((a, b) => b.count - a.count)
   .slice(0, 5);
 }

const getMostPopularBooks = books => {
  return books
    .map((book) => {
      return { name: book.title, count: book.borrows.length };
   })
  .sort((a, b) => (a.count < b.count ? 1 : -1))
  .slice(0, 5);
 }

const getMostPopularAuthors = (books, authors) => {
  let result = [];
  authors.forEach((author) => {
    let theAuthor = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
   };
    books.forEach((book) => {
      if (book.authorId === author.id) {
         theAuthor.count += book.borrows.length;
     }
     });
    result.push(theAuthor);
  });
  return result.sort((a, b) => b.count - a.count).slice(0, 5);
 }

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
