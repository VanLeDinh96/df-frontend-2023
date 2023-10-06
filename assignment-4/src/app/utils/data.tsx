import { Book } from '../types/Book.types'

export const getData = () => {
  let data: Book[] = []
  try {
    const items = localStorage.getItem('books')
    if (items) {
      data = JSON.parse(items)
    }
  } catch (error) {
    console.error(error)
  }
  return data
}
