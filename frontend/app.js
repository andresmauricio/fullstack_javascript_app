import './styles/style.css';
import BookService from  './services/BookService'

document.getElementById('book-form')
    .addEventListener('submit', event =>  {
        const title = document.getElementById('title').value;
        const author = document.getElementById('author').value;
        const isbn = document.getElementById('isbn').value;
        const image = document.getElementById('image').files;

        const formData = new FormData();
        formData.append('title', title);
        formData.append('author', author);
        formData.append('isbn', isbn);
        formData.append('image', image);


        const bookServices = new BookService();
        bookServices.postBook(formData);
        
        event.preventDefault();
    });