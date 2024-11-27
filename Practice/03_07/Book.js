// Your code goes here
class Book {
    constructor (
        bookTitle,
        bookAuthor,
        bookPubYear,
        bookISBN,
    ) 
    {
        this.bookTitle = bookTitle
        this.bookAuthor = bookAuthor
        this.bookPubYear = bookPubYear
        this.bookISBN = bookISBN
    }
}

// 
const book = new Book("Alice's Adventures in Wonderland", "Lewis Carroll", 1865, 798369203415)

console.log("Book: ", book)

export default Book;