import { Book } from '../types/Book.types'

export const listOfBooks: Book[] = [
  {
    bookId: 1,
    name: 'The Alchemist',
    author: 'Paulo Coelho',
    topic: 'Fiction',
  },
  {
    bookId: 2,
    name: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman',
    topic: 'Psychology',
  },
  {
    bookId: 3,
    name: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    topic: 'Classic',
  },
  {
    bookId: 4,
    name: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    topic: 'Classic',
  },
  {
    bookId: 5,
    name: '1984',
    author: 'George Orwell',
    topic: 'Dystopian',
  },
  {
    bookId: 6,
    name: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    topic: 'Classic',
  },
  {
    bookId: 7,
    name: 'Pride and Prejudice',
    author: 'Jane Austen',
    topic: 'Classic',
  },
  {
    bookId: 8,
    name: "Harry Potter and the Sorcerer's Stone",
    author: 'J.K. Rowling',
    topic: 'Fantasy',
  },
  {
    bookId: 9,
    name: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    topic: 'Fantasy',
  },
  {
    bookId: 10,
    name: 'The Da Vinci Code',
    author: 'Dan Brown',
    topic: 'Mystery',
  },
  {
    bookId: 11,
    name: "The Hitchhiker's Guide to the Galaxy",
    author: 'Douglas Adams',
    topic: 'Science Fiction',
  },
  {
    bookId: 12,
    name: 'Brave New World',
    author: 'Aldous Huxley',
    topic: 'Dystopian',
  },
  {
    bookId: 13,
    name: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    topic: 'Fantasy',
  },
  {
    bookId: 14,
    name: 'The Shining',
    author: 'Stephen King',
    topic: 'Horror',
  },
  {
    bookId: 15,
    name: 'The Hunger Games',
    author: 'Suzanne Collins',
    topic: 'Dystopian',
  },
  {
    bookId: 16,
    name: 'The Road',
    author: 'Cormac McCarthy',
    topic: 'Post-Apocalyptic',
  },
  {
    bookId: 17,
    name: 'Crime and Punishment',
    author: 'Fyodor Dostoevsky',
    topic: 'Classic',
  },
  {
    bookId: 18,
    name: 'The Odyssey',
    author: 'Homer',
    topic: 'Classic',
  },
  {
    bookId: 19,
    name: 'Frankenstein',
    author: 'Mary Shelley',
    topic: 'Gothic Fiction',
  },
  {
    bookId: 20,
    name: 'The Picture of Dorian Gray',
    author: 'Oscar Wilde',
    topic: 'Classic',
  },
]

export const topics: string[] = [
  'Programming',
  'Database',
  'Frontend',
  'Backend',
  'Fullstack',
  'DevOps',
  'AI',
  'Fiction',
]

export const emptyBook: Book = {
  bookId: -1,
  name: '',
  author: '',
  topic: '',
}
