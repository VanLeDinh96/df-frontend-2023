'use client'

import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import ConfirmDeleteModal from '../components/ConfirmDeleteModal'
import SuccessMessage from '../components/SuccessMessage'
import { Book } from '../types/Book.types'
import { emptyBook } from '../utils/constants'
import { getData } from '../utils/data'

const BookDetail = () => {
  const [books, setBooks] = useState<Book[]>([])
  const [book, setBook] = useState<Book>(emptyBook)
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [displayMessage, setDisplayMessage] = useState(false)
  const [displayErrorPage, setDisplayErrorPage] = useState(false)

  const params = useParams()
  const router = useRouter()

  useEffect(() => {
    const data = getData()
    setBooks(data)

    const id = Number(params.bookId) || -1

    if (id === -1) {
      setDisplayErrorPage(true)
    }

    const bookItem =
      data.find((item) => item.bookId === Number(id)) || emptyBook
    setBook(bookItem)
  }, [params.bookId])

  useEffect(() => {
    if (displayMessage) {
      const timer = setTimeout(() => {
        setDisplayMessage(false)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [displayMessage])

  const handleDeleteBook = (id: number): void => {
    const newBooks = books.filter((book) => book.bookId !== id)
    setBooks(newBooks)
    localStorage.setItem('books', JSON.stringify(newBooks))
    setOpenDeleteModal(false)
    setDisplayMessage(true)
    setTimeout(() => {
      router.replace('/')
    }, 1000)
  }

  const renderErrorPage = () => (
    <div className="w-full h-full flex flex-col items-center justify-center mt-10">
      <p className="text-9xl mb-3 font-bold text-cyan-800 dark:text-cyan-200">
        404
      </p>
      <p className="text-2xl mb-5 font-semibold text-cyan-800 dark:text-cyan-200">
        Page not found
      </p>
      <a
        href="/"
        className="text-2xl font-semibold text-red-700 hover:underline dark:text-red-200"
      >
        <i className="fa-solid fa-arrow-left mr-1" /> Back to home page
      </a>
    </div>
  )

  const renderBookDetails = () => (
    <div>
      <a
        href="/"
        className="text-sm font-bold text-blue-800 dark:text-blue-200 hover:underline"
      >
        <i className="fa-solid fa-arrow-left mr-1" />
        Back
      </a>
      <h1 className="text-lg my-6 font-bold text-black dark:text-white">
        {book.name}
      </h1>
      <p className="text-sm mb-1 text-black dark:text-white">
        <b>Author</b>: {book.author}
      </p>
      <p className="text-sm mb-6 text-black dark:text-white">
        <b>Topic</b>: {book.topic}
      </p>
      <button
        onClick={() => setOpenDeleteModal(true)}
        className="text-sm font-semibold text-red-500 hover:underline dark:text-red-300"
      >
        <i className="fa-solid fa-trash mr-1" /> Delete
      </button>
      <ConfirmDeleteModal
        book={book}
        setOpenDeleteModal={setOpenDeleteModal}
        openDeleteModal={openDeleteModal}
        handleDeleteBook={() => handleDeleteBook(book.bookId)}
      />
      <SuccessMessage displayMessage={displayMessage} />
    </div>
  )

  return displayErrorPage ? renderErrorPage() : renderBookDetails()
}

export default BookDetail
