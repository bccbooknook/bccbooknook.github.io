// In booknookscript.js

function filterBooks() {
    var input = document.querySelector('.searchbar input').value.toLowerCase();
    var booksContainer = document.getElementById('booksContainer');

    // Clear existing books
    booksContainer.innerHTML = '';

    for (var bookKey in booksData) {
        var book = booksData[bookKey];
        var title = book.title.toLowerCase();

        if (title.includes(input)) {
            // Create a new book element
            var bookElement = document.createElement('div');
            bookElement.className = 'new-container';

            // Populate the book element with information
            bookElement.innerHTML = `
                <div class="lady">
                    <a href="${book.link}"><img src="${book.image}"></a>
                    <span><a href="${book.link}">${book.title}</a></span>
                </div>
            `;

            // Append the book element to the books container
            booksContainer.appendChild(bookElement);
        }
    }
}
