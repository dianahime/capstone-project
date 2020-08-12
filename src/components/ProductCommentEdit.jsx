import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { productChanged, selectors } from '../store/productsSlice'
import { ActionCreators } from 'redux-undo'
import { AppToaster } from '../toaster'
import DeleteCommentModal from './DeleteCommentModal'
import Button from './Button'

export default function ProductCommentEdit({ setFormVisible }) {
  const product = useSelector(selectors.selectedProduct)
  const [title, setTitle] = useState(product.title)
  const [comment, setComment] = useState(product.comment)
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(
      productChanged({
        ...product,
        title,
        comment,
      })
    )
    setFormVisible(false)
    AppToaster.show({
      message: 'Comment has been updated.',
      className: 'toast',
      action: {
        text: 'Undo',
        onClick: () => dispatch(ActionCreators.undo()),
      },
    })
  }

  const handleDeleteComment = () => {
    setIsDeleteModalOpen(true)
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      <label htmlFor="title" />
      <input
        onChange={(event) => setTitle(event.target.value)}
        value={title}
        type="text"
        id="title"
        maxLength="30"
        placeholder="Title of your comment"
      />
      {title.length >= 30 && (
        <p className="message">The title can consist of up to 30 characters.</p>
      )}

      <label htmlFor="comment" />
      <textarea
        onChange={(event) => setComment(event.target.value)}
        value={comment}
        id="comment"
        maxLength="500"
        placeholder="Your comment"
      />
      {comment.length >= 500 && (
        <p className="message">
          The comment can consist of up to 500 characters.
        </p>
      )}

      <ButtonContainer>
        <Button
          text="Delete"
          type="button"
          isDelete
          onClick={handleDeleteComment}
        />
        <DeleteCommentModal
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
        />
        <Button text="Save" type="submit" disabled={!(title && comment)} />
      </ButtonContainer>
    </FormStyled>
  )
}

ProductCommentEdit.propTypes = {
  setFormVisible: PropTypes.func.isRequired,
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;

  input,
  #comment {
    font-size: 1.1rem;
    width: 300px;
    display: block;
    align-self: center;
    background-color: white;
    padding: 5px 10px;
    border: 1px solid var(--primary);
    border-radius: 20px;
    margin: 10px 0 10px 0;
    color: var(--primary);

    &:hover {
      border-color: var(--secondary);
    }

    &:focus {
      outline: none;
    }
  }

  .message {
    text-align: center;
    color: var(--secondary);
    padding: 5px 10px;
    margin: 0;
    font-size: 1rem;
  }

  #comment {
    height: 200px;
    border-radius: 10px;
  }

  Button {
    align-self: center;
    margin: 10px 0 0 0;
  }
`
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`
