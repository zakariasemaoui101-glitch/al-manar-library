// script.js

const books = [
    { title: "Book 1", cover: "cover1.jpg", level: "beginner" },
    { title: "Book 2", cover: "cover2.jpg", level: "intermediate" },
    { title: "Book 3", cover: "cover3.jpg", level: "advanced" },
    // Add 27 more book objects here
];

function loadBooks(levelFilter) {
    const bookContainer = document.getElementById('book-container');
    bookContainer.innerHTML = '';
    const filteredBooks = books.filter(book => !levelFilter || book.level === levelFilter);
    filteredBooks.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.innerHTML = `<img src='${book.cover}' alt='${book.title}' /><h3>${book.title}</h3>`;
        bookContainer.appendChild(bookDiv);
    });
}

// Initial load
loadBooks();

// Example of filtering books
const levelSelect = document.getElementById('level-filter');
levelSelect.addEventListener('change', (event) => {
    loadBooks(event.target.value);
});