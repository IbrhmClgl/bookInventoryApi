const addButton = document.querySelector('#addBookBtn')!;
const checkButton = document.querySelector('#checkBooksBtn')!;
const inputField = document.querySelector('#bookTitle') as HTMLInputElement;
const bookListDiv = document.querySelector('#bookList')!;

const baseUrl = 'http://localhost:5080/api';

fetch(`${baseUrl}/books`)
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log('error'));

const addBook = async () => {
  console.log('click');
  const title = inputField.value.trim();
  const author = inputField.value;

  if (!title || !author) {
    alert('Please enter a book title!');
    return;
  }

  console.log('Response Status:');
  try {
    console.log('api feth begins');
    const response = await fetch(`${baseUrl}/books`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, author }),
    });

    if (response.ok) {
      console.log('hi');
      const newBook = await response.json();
      alert(`Book added: ${newBook.title}`);
      inputField.value = '';
    } else {
      alert('Error adding book1');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error adding book2');
  }
};

const getBooks = async () => {
  try {
    const response = await fetch(`${baseUrl}/books`);
    if (response.ok) {
      const books = await response.json();
      displayBooks(books);
    } else {
      alert('Error fetching books');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error fetching books1');
  }
};

const displayBooks = (books: any[]) => {
  bookListDiv.innerHTML = '';
  books.forEach((book) => {
    const bookItem = document.createElement('div');
    bookItem.textContent = `${book.title} by ${book.author} (${book.year})`;
    bookListDiv.appendChild(bookItem);
  });
};

addButton.addEventListener('click', addBook);
checkButton.addEventListener('click', getBooks);
