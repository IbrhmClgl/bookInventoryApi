# Book Inventory API

This is a simple Book Inventory API built with **Node.js** and **Express**. The API allows users to manage a collection of books, where they can add, view, and manage books.

## Tech Stack

- **Backend**:
  - Node.js
  - Express
  - TypeScript
  - In-memory data storage (for now)

## Setup and Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/bookInventoryApi.git
cd bookInventoryApi
```

### 2. Install dependencies & build

```
npm install
npm run build
```

### 3. Start the server

```
npm run start
```

### 4. Test the api

#### Registrate a new book

```
curl -X POST http://localhost:(YOUR PORT)/api/books \
-H "Content-Type: application/json" \
-d '{
  "title": "Hello World",
  "author": "XYz",
  "year": 2024
}'

```

#### Read all books

```
curl -X GET http://localhost:(YOUR PORT)/api/books
```

#### Delete a book

```
curl -X DELETE http://localhost:(YOUR PORT)/api/books/(id)
```
