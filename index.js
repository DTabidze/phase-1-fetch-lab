function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
  .then((resp) => resp.json())
  //.then((json) => console.log(json[4].name))
  .then((jsonFetch) => {renderBooks(jsonFetch)})

  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    const bookURL = book.url;
    // if (bookURL[bookURL.length-1] === "5") {
    //   h2.innerHTML = `${book.name} This is 5Th Book`;
    // } else {
    h2.innerHTML = book.name;
 //   }
    main.appendChild(h2);
    });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});