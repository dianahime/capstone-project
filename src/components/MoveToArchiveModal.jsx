import React from 'react'
import Button from './Button'
import styled from 'styled-components'
import { Dialog } from '@blueprintjs/core'
import { useDispatch, useSelector } from 'react-redux'
import { productArchived, selectors } from '../store/productsSlice'
import { AppToaster } from '../toaster'
import { ActionCreators } from 'redux-undo'
import PropTypes from 'prop-types'

export default function MoveToArchiveModal({ isOpen, onClose }) {
  const product = useSelector(selectors.selectedProduct)
  const dispatch = useDispatch()

  const handleMoveToArhive = () => {
    dispatch(productArchived(product))
    AppToaster.show({
      message: 'Product has been archived.',
      className: 'toast',
      action: {
        text: 'Undo',
        onClick: () => dispatch(ActionCreators.undo()),
      },
    })
    onClose()
  }

  return (
    <DialogStyled isOpen={isOpen} usePortal={isOpen} onClose={onClose}>
      <h2>Do you want to move the product to your archive?</h2>
      <div>
        <Button text="No" isCancel onClick={onClose} />
        <Button text="Yes" onClick={handleMoveToArhive} />
      </div>
    </DialogStyled>
  )
}

MoveToArchiveModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
}

const DialogStyled = styled(Dialog)`
  width: 90%;
  max-width: 500px;
  border-radius: 15px;
  padding: 10px;
  background-color: var(--neutral);

  h2 {
    text-align: center;
    color: var(--primary);
  }

  div {
    display: flex;
    justify-content: space-around;
  }

  Button {
    margin-bottom: 20px;
    padding: 5px;
  }
`
