import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { Dialog } from '@blueprintjs/core'
import { useDispatch } from 'react-redux'
import { selectedProductRemoved } from '../store/productsSlice'
import { drawerIsOpened } from '../store/drawerSlice'

export default function DeleteModal({ isOpen, onClose }) {
  const dispatch = useDispatch()

  const handleDeleteClick = () => {
    dispatch(selectedProductRemoved())
    dispatch(drawerIsOpened(false))
  }

  return (
    <DialogStyled isOpen={isOpen} usePortal={isOpen} onClose={onClose}>
      <h2>Are you sure you want to delete this product?</h2>
      <div>
        <Button text="Cancel" isCancel onClick={onClose} />
        <Button text="Delete" isDelete onClick={handleDeleteClick} />
      </div>
    </DialogStyled>
  )
}

const DialogStyled = styled(Dialog)`
  width: 90%;
  border-radius: 15px;
  padding: 10px;
  background-color: white;

  h2,
  div {
    background-color: white;
  }

  h2 {
    text-align: center;
    color: var(--secondary);
  }

  div {
    display: flex;
    justify-content: space-around;
  }

  Button {
    margin-bottom: 20px;
  }
`
