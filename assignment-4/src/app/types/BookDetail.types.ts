import { Book } from './Book.types'

export interface BookDetailProps {
  book: Book
  handleOpenDeleteModal: (book: Book) => void
}
