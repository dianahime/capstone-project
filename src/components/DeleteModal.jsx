import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Dialog } from '@blueprintjs/core'
import { AppToaster } from '../toaster'
import { useDispatch } from 'react-redux'
import { ActionCreators } from 'redux-undo'
import { selectedProductRemoved } from '../store/productsSlice'
import { drawerIsOpened } from '../store/drawerSlice'
import Button from './Button'

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

DeleteModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
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
