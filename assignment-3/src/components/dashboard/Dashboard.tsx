import React, { useEffect, useState } from 'react'
import { calculatePages, filterData } from '../../utils/paginationUtils'
import AddDialog from '../add-dialog/AddDialog'
import ConfirmDialog from '../confirm-dialog/ConfirmDialog'

type Action = 'CREATE' | 'DELETE'

type Book = {
  name: string
  author: string
  topic: string
}

const dataKey = 'bookList'
const limit = 10
let action: Action | null
let selectedItem: Book | null
let total = 0

const Dashboard: React.FC = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false)
  const [data, setData] = useState<Book[]>([])
  const [searchKey, setSearchKey] = useState<string>('')
  const [page, setPage] = useState<number>(0)

  useEffect(() => {
    try {
      const bookList = JSON.parse(
        localStorage.getItem(dataKey) || '[]',
      ) as Book[]
      setData(bookList)
    } catch (e) {
      console.error('Cannot fetch data', e)
      throw e
    }
  }, [])

  useEffect(() => {
    total = calculatePages(data, searchKey)
  })

  const openModal = (selectedAction: Action, item: Book | null) => {
    selectedItem = item
    action = selectedAction
    setIsOpen(true)
  }

  const closeModal = () => {
    action = null
    setIsOpen(false)
  }

  const renderModal = () => {
    if (action === 'CREATE') {
      return <AddDialog close={closeModal} addItem={addItem} />
    }
    if (action === 'DELETE') {
      return (
        <ConfirmDialog
          item={selectedItem || { name: '', author: '', topic: '' }}
          close={closeModal}
          deleteItem={deleteItem}
        />
      )
    }
    return null
  }

  const updateData = (newData: Book[]) => {
    try {
      localStorage.setItem(dataKey, JSON.stringify(newData))
    } catch (e) {
      console.error('Cannot update data', e)
      throw e
    }
    setData(newData)
    setPage(0)
  }

  const addItem = (newItem: Book) => {
    const updatedData = [...data, newItem]
    updateData(updatedData)
    setIsOpen(false)
  }

  const deleteItem = (item: Book) => {
    const idx = data.findIndex((i) => i.name === item.name)
    if (idx === -1) {
      return
    }
    const updatedData = [...data]
    updatedData.splice(idx, 1)
    updateData(updatedData)
    setIsOpen(false)
  }

  const renderItems = () => {
    const filteredData = filterData(data, searchKey)
    const pagedData = filteredData.slice(page * limit, (page + 1) * limit)
    return pagedData.map((i) => {
      return (
        <tr key={i.name}>
          <td colSpan={2}>{i.name}</td>
          <td>{i.author}</td>
          <td>{i.topic}</td>
          <td>
            <button
              className="btn btn-link"
              type="button"
              onClick={() => openModal('DELETE', i)}
            >
              <span>Delete</span>
            </button>
          </td>
        </tr>
      )
    })
  }

  return (
    <main>
      <div className="container">
        <section className="toolbar">
          <input
            type="text"
            placeholder="Search books"
            aria-label="search-box"
            id="searchBox"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => openModal('CREATE', null)}
          >
            Add Book
          </button>
        </section>
        <table className="main-content">
          <thead>
            <tr>
              <th colSpan={2}>Name</th>
              <th>Author</th>
              <th>Topic</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>{renderItems()}</tbody>
        </table>
        <div className="pagination">
          {Array.from({ length: total }, (_, i) => (
            <button
              className={`btn btn-link ${i === page ? 'active' : ''}`}
              type="button"
              onClick={() => setPage(i)}
              key={i}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
      {modalIsOpen ? renderModal() : null}
    </main>
  )
}

export default Dashboard
