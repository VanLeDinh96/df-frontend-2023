// import { BaseSyntheticEvent } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { AddBookInputs } from './AddBookInputs.types'

export interface AddBookModalProps {
  openModal: boolean
  setOpenModal: (value: boolean) => void
  handleAddBook: () => void
  register: UseFormRegister<AddBookInputs>
}
