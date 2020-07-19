import React from 'react'
import Popup from 'reactjs-popup'
import Button from './Button'

export default function DeleteModal() {
  const handleDeleteClick = () => {}
  return (
    <Popup
      trigger={
        <div className="item">
          <p className="delete">Delete</p>
          <i className="fa fa-trash delete" aria-hidden="true"></i>
        </div>
      }
      modal
      closeOnDocumentClick
    >
      {(close) => (
        <div>
          <h1>Are you sure you want to delete this product?</h1>
          <div>
            <Button text="Cancel" onClick={close} isCancel />
            <Button text="Delete" onClick={handleDeleteClick} />
          </div>
        </div>
      )}
    </Popup>
  )
}
