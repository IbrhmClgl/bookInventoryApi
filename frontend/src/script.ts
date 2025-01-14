// const addButton = document.querySelector('#addBookBtn')!;
// const checkButton = document.querySelector('#checkBooksBtn')!;
// const inputField = document.querySelector('#bookTitle') as HTMLInputElement;
// const bookListDiv = document.querySelector('#bookList')!;

// const baseUrl = 'http://localhost:5080/api';

// const addBook = async () => {
//   console.log('click');
//   const title = inputField.value.trim();
//   const author = inputField.value;

//   if (!title || !author) {
//     alert('Please enter a book title!');
//     return;
//   }

//   console.log('Response Status:');
//   try {
//     console.log('api feth begins');
//     const response = await fetch(`${baseUrl}/books`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ title, author }),
//     });

//     if (response.ok) {
//       console.log('hi');
//       const newBook = await response.json();
//       alert(`Book added: ${newBook.title}`);
//       inputField.value = '';
//     } else {
//       alert('Error adding book1');
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     alert('Error adding book2');
//   }
// };

// const getBooks = async () => {
//   try {
//     const response = await fetch(`${baseUrl}/books`);
//     if (response.ok) {
//       const books = await response.json();
//       displayBooks(books);
//     } else {
//       alert('Error fetching books');
//     }
//   } catch (error) {
//     console.error('Error:', error);
//     alert('Error fetching books1');
//   }
// };

// const displayBooks = (books: any[]) => {
//   bookListDiv.innerHTML = '';
//   books.forEach((book) => {
//     const bookItem = document.createElement('div');
//     bookItem.textContent = `${book.title} by ${book.author} (${book.year})`;
//     bookListDiv.appendChild(bookItem);
//   });
// };

// addButton.addEventListener('click', addBook);
// checkButton.addEventListener('click', getBooks);

// script.ts
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
      body: JSON.stringify({ title, author }),
    });

    if (response.ok) {
      console.log('got data !');
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
    const bookItem = document.createElement('div');
    bookItem.textContent = `${book.title} von ${book.author}`;
    bookListDiv.appendChild(bookItem);
  });
};

addButton.addEventListener('click', addBook);
checkButton.addEventListener('click', getBooks);
