document.addEventListener('DOMContentLoaded', function () {
    var originalBooksContainer = document.querySelector('.original-books-main-container');
    var booksContainer = document.getElementById('booksContainer');

    document.querySelector('.searchbar input').addEventListener('input', function () {
        noSearch();
    });

    function noSearch (event) {
        alert("This feature is still unavailable. Coming soon.")
        event.preventDefault();
    }

});
