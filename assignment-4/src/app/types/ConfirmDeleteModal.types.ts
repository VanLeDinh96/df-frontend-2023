import { Book } from './Book.types'

export interface ConfirmDeleteModalProps {
  book: Book
  openDeleteModal: boolean
  setOpenDeleteModal: (value: boolean) => void
  handleDeleteBook: (id: number) => void
}
