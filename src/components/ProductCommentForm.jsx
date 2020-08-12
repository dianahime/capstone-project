import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { ActionCreators } from 'redux-undo'
import { productChanged, selectors } from '../store/productsSlice'
import { AppToaster } from '../toaster'
import Button from './Button'

export default function ProductCommentForm() {
  const [title, setTitle] = useState('')
  const [comment, setComment] = useState('')
  const [formVisible, setFormVisible] = useState(false)

  const dispatch = useDispatch()
  const product = useSelector(selectors.selectedProduct)

  const resetForm = () => {
    setTitle('')
    setComment('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (title && comment) {
      dispatch(
        productChanged({
          ...product,
          title,
          comment,
        })
      )
      resetForm()
      setFormVisible(false)
      AppToaster.show({
        message: 'Comment has been added.',
        className: 'toast',
        action: {
          text: 'Undo',
          onClick: () => dispatch(ActionCreators.undo()),
        },
      })
    }
  }

  return (
    <ContainerStyled>
      <ButtonStyled
        text={formVisible ? 'Cancel' : 'Add comment'}
        onClick={() => {
          setFormVisible(!formVisible)
          resetForm()
        }}
        isCancel={formVisible && 'isCancel'}
      />
      {formVisible && (
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
            <p className="message">
              The title can consist of up to 30 characters.
            </p>
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

          <Button text="Save" type="submit" disabled={!(title && comment)} />
        </FormStyled>
      )}
    </ContainerStyled>
  )
}
const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 20px 0;
`

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

const ButtonStyled = styled(Button)`
  margin: 10px 0;
  width: 160px;
  align-self: center;

  ${(props) =>
    props.isCancel &&
    css`
      background-color: var(--secondary);
      color: var(--neutral);
      width: 100px;
    `}
`
