import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { Dialog } from '@blueprintjs/core'
import { useDispatch } from 'react-redux'
import { selectedProductRemoved } from '../store/productsSlice'
import { drawerIsOpened } from '../store/drawerSlice'
import { AppToaster } from '../toaster'
import { ActionCreators } from 'redux-undo'

export default function DeleteModal({ isOpen, onClose }) {
  const dispatch = useDispatch()

  const handleDeleteClick = () => {
    dispatch(selectedProductRemoved())
    dispatch(drawerIsOpened(false))
    AppToaster.show({
      message: 'Product has been deleted.',
      className: 'toast',
      action: {
        text: 'Undo',
        onClick: () => dispatch(ActionCreators.undo()),
      },
    })
  }

  return (
    <DialogStyled isOpen={isOpen} usePortal={isOpen} onClose={onClose}>
      <h2>Are you sure you want to delete this product?</h2>
      <div>
        <Button text="Cancel" isCancel onClick={onClose} />
        <Button
          text="Delete"
          testid="delete"
          isDelete
          onClick={handleDeleteClick}
        />
      </div>
    </DialogStyled>
  )
}

const DialogStyled = styled(Dialog)`
  width: 90%;
  max-width: 500px;
  border-radius: 15px;
  padding: 10px;
  background-color: white;

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
