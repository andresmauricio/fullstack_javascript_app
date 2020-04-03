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
                    <div class="card">
                        <div class="card-content">
                            <p class="title">
                                ${book.title}
                            </p>
                            <p>
                                <span>Autor:</span>  ${book.author}
                            </p>
                            <p>
                                <span>Isbn:</span> ${book.isbn}
                            </p>
                            <p>
                                <span>Agregado:</span> ${format(book.created_at)}
                            </p>
                            <a href="#" class="button  deletes" _id="${book._id}">Eliminar</a>
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

    async deleteBook(bookId) {
        await bookServices.deleteBook(bookId);
        this.renderBooks();
    }


}

export default UI;