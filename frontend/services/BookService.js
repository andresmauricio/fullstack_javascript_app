class BookServices { 

    constructor() {
        this.URL = 'http://localhost:3000/api/books/';
    }

    async getBooks() {
        const response = await fetch(this.URL);
        const books = await response.json();
        return books;
    }

    async postBook(book) {
        const response = await fetch(this.URL, { method: 'POST', body: book });
        const data = await response.json();
        console.log(data);
        return data;
    }

    async deleteBook(bookId) {
        const url = `${this.URL}${bookId}`;
        const response = await fetch(url, { method: 'DELETE', headers: { 'Content-Type': 'application/json'}}); 
        const data = await response.json();
        console.log(data);
        return data;
    }

}

// module.exports = BookServices; --> export traditionals 
export default BookServices; // export new version