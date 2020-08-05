import React from 'react'
import styled from 'styled-components'
import Button from './Button'
import { Dialog } from '@blueprintjs/core'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectedProductCommentRemoved,
  selectors,
} from '../store/productsSlice'
import { AppToaster } from '../toaster'
import { ActionCreators } from 'redux-undo'

export default function DeleteCommentModal({ isOpen, onClose }) {
  const product = useSelector(selectors.selectedProduct)
  const dispatch = useDispatch()

  const handleDeleteClick = () => {
    dispatch(selectedProductCommentRemoved(product))
    AppToaster.show({
      message: 'Comment has been deleted.',
      className: 'toast',
      action: {
        text: 'Undo',
        onClick: () => dispatch(ActionCreators.undo()),
      },
    })
  }

  return (
    <DialogStyled isOpen={isOpen} usePortal={isOpen} onClose={onClose}>
      <h2>Are you sure you want to delete this comment?</h2>
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
