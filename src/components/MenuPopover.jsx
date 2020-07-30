import React, { useState } from 'react'
import { Popover, Position } from '@blueprintjs/core'
import styled from 'styled-components'
import DeleteModal from './DeleteModal'
import { useDispatch, useSelector } from 'react-redux'
import { displayDrawerContent, drawerIsOpened } from '../store/drawerSlice'
import { productArchived, selectors } from '../store/productsSlice'
import { AppToaster } from '../toaster'
import { ActionCreators } from "redux-undo"


export default function MenuPopover() {
  const dispatch = useDispatch()
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  const product = useSelector(selectors.selectedProduct)

  const handleEditClick = () => {
    dispatch(displayDrawerContent('ProductEdit'))
  }
  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true)
  }

  const handleArchiveClick = () => {
    dispatch(productArchived(product))
    dispatch(drawerIsOpened(false))
    AppToaster.show({
      message: "Product has been moved to archive.",
      className: 'toast',
      action: {
        text: "Undo",
        onClick: () => dispatch(ActionCreators.undo()),
      }
    })
  }

  return (
    <PopoverStyled usePortal={false} position={Position.LEFT_TOP}>
      <ButtonStyled type="button" className="button">
        <IconStyled
          className="fa fa-ellipsis-v"
          aria-hidden="true"
        />
      </ButtonStyled>
      <CardStyled>
        <div className="item" onClick={handleEditClick}>
          <p>Edit</p>
          <i className="fas fa-pen" aria-hidden="true" />
        </div>
        <div className="item" onClick={handleArchiveClick}>
          <p>Archive</p>
          <i className="fas fa-archive" aria-hidden="true" />
        </div>
        <div className="item" onClick={handleDeleteClick}>
          <p className="delete">Delete</p>
          <i className="fa fa-trash delete" aria-hidden="true"/>
        </div>
        <DeleteModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
        />
      </CardStyled>
    </PopoverStyled>
  )
}

const PopoverStyled = styled(Popover)`
  height: 20px;
  * {
    background: none;
  }

  .bp3-popover-target {
    height: 100%;
  }
`

const CardStyled = styled.div`
  background-color: white;
  padding: 10px;
  width: 120px;

  p {
    margin: 0;
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .delete {
    color: var(--secondary);
  }

  i {
    background-color: white;
  }
`

const ButtonStyled = styled.button`
  border: none;

  :focus {
    outline: none;
  }
`

const IconStyled = styled.i`
  font-size: 1.2rem;
  color: var(--primary);
`
