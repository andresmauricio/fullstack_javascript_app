import BookService from  './services/BookService';
import { format } from 'timeago.js';
const bookServices = new BookService();


class UI {

    async renderBooks() {
        const books = await bookServices.getBooks();
        const bookCardContainer = document.getElementById('books-card');
        bookCardContainer.innerHTML = '';
        books.forEach(book => {
                const div = document.createElement('div');
                div.className = '';
                div.innerHTML = `
                    <div class="card mt-5">
                        <div class="card-content">
                            <p>
                                ${book.title}
                            </p>
                            <p>
                                ${book.author}
                            </p>
                            <p>
                                ${book.isbn}
                            </p>
                            <p>
                                ${format(book.created_at)}
                            </p>
                            <a href="#" class="button is-danger" _id="${book._id}">Eliminar</a>
                        </div>
                    </div>  
                `;
                bookCardContainer.appendChild(div);
        });
    }

    async addNewBook(book) {
        await bookServices.postBook(book);
        this.clearBookForm();
        this.renderBooks();
    }

    clearBookForm() {
        document.getElementById('book-form').reset();
    }

    renderMessage() {}

    deleteBook() {}


}

export default UI;