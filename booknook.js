function filterBooks() {
    var input = document.querySelector('.searchbar input').value.toLowerCase();
    var books = document.querySelectorAll('.books-container .new-container a');

    books.forEach(function (book) {
        var title = book.textContent.toLowerCase();
        var bookContainer = book.closest('.new-container');

        if (title.includes(input)) {
            bookContainer.style.display = 'block';
        } else {
            bookContainer.style.display = 'none';
        }
    });
}
