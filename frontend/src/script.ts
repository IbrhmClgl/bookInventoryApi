const addButton = document.querySelector('#addBookBtn')!;
const checkButton = document.querySelector('#checkBooksBtn')!;
const inputTitle = document.querySelector('#bookTitle') as HTMLInputElement;
const inputAuthor = document.querySelector('#author') as HTMLInputElement;
const bookListDiv = document.querySelector('#bookList')!;

const baseUrl = 'http://localhost:5080/api';

const addBook = async () => {
  const title = inputTitle.value.trim();
  const author = inputAuthor.value.trim();

  if (!title || !author) {
    alert('Bitte Buchdetails eingeben!');
    return;
  }

  try {
    const response = await fetch(`${baseUrl}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: title,
        author: author,
      }),
    });

    if (response.ok) {
      const newBook = await response.json();
      alert(`Buch hinzugefügt: ${newBook.title}`);
      inputTitle.value = '';
      inputAuthor.value = '';
    } else {
      alert('Fehler beim Hinzufügen des Buchs');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Netzwerkfehler beim Hinzufügen des Buchs');
  }
};

const getBooks = async () => {
  try {
    const response = await fetch(`${baseUrl}/books`);
    if (response.ok) {
      const books = await response.json();
      displayBooks(books);
    } else {
      alert('Fehler beim Abrufen der Bücher');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Netzwerkfehler beim Abrufen der Bücher');
  }
};

const displayBooks = (books: any[]) => {
  bookListDiv.innerHTML = '';
  books.forEach((book) => {
    const bookItem = document.createElement('li');
    bookItem.textContent = `${book.title} von ${book.author}`;
    bookListDiv.appendChild(bookItem);
  });
};

addButton.addEventListener('click', () => {
  const userPassword = prompt('Enter Password');
  if (userPassword === 'StarMoon55!') {
    addBook();
  } else {
    alert('Sry without the password you cannot add a book');
  }
});
checkButton.addEventListener('click', getBooks);
