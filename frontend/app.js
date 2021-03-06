import './styles/style.css';
import UI from './UI';

const ui = new UI();


document.addEventListener('DOMContentLoaded', () => {
    ui.renderBooks(); 
    
});

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
        
        ui.addNewBook(formData);
        
        event.preventDefault();
    });

document.getElementById('books-card')
    .addEventListener('click', event => {
        if (event.target.classList.contains('deletes')) {
            ui.deleteBook(event.target.getAttribute('_id'))
        }
        event.preventDefault();
    })