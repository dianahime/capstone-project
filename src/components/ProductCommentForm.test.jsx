import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent } from '@testing-library/react'
import { render, screen } from '../test-utils'
import { useDispatch } from 'react-redux'
import { productChanged } from '../store/productsSlice'
import ProductCommentForm from './ProductCommentForm'

jest.mock('react-redux', () => {
  const dispatch = jest.fn()

  return {
    ...jest.requireActual('react-redux'),
    useDispatch: () => dispatch,
  }
})

describe('ProductCommentForm.test.jsx', () => {
  const title = 'test title'
  const comment = 'test comment'

  beforeEach(() => {
    render(<ProductCommentForm />)
  })

  it('renders the add comment button', () => {
    expect(screen.getByText('Add comment')).toBeInTheDocument()
  })

  it('renders the cancel button when add comment button is clicked', () => {
    screen.getByText('Add comment').click()
    expect(screen.getByText('Cancel')).toBeInTheDocument()
  })

  it('renders the title input field when add comment button is clicked', () => {
    screen.getByText('Add comment').click()
    expect(
      screen.getByPlaceholderText('Title of your comment')
    ).toBeInTheDocument()
  })

  it('renders the comment input field when add comment button is clicked', () => {
    screen.getByText('Add comment').click()
    expect(screen.getByPlaceholderText('Your comment')).toBeInTheDocument()
  })

  it('provides the entered value to the title input after change event', () => {
    screen.getByText('Add comment').click()
    const titleInput = screen.getByPlaceholderText('Title of your comment')
    fireEvent.change(titleInput, { target: { value: title } })
    expect(titleInput.value).toBe(title)
  })

  it('provides the entered value to the comment input after change event', () => {
    screen.getByText('Add comment').click()
    const commentInput = screen.getByPlaceholderText('Your comment')
    fireEvent.change(commentInput, { target: { value: comment } })
    expect(commentInput.value).toBe(comment)
  })

  it('does not dispatch an action when nothing has been entered', () => {
    const dispatch = useDispatch()
    screen.getByText('Add comment').click()
    screen.getByText('Save').click()
    expect(dispatch.mock.calls).toEqual([])
  })

  it('does not dispatch an action when only title has been entered', () => {
    const dispatch = useDispatch()
    screen.getByText('Add comment').click()

    const titleInput = screen.getByPlaceholderText('Title of your comment')
    fireEvent.change(titleInput, { target: { value: title } })

    screen.getByText('Save').click()
    expect(dispatch.mock.calls).toEqual([])
  })

  it('does not dispatch an action when only comment has been entered', () => {
    const dispatch = useDispatch()
    screen.getByText('Add comment').click()

    const commentInput = screen.getByPlaceholderText('Your comment')
    fireEvent.change(commentInput, { target: { value: comment } })

    screen.getByText('Save').click()
    expect(dispatch.mock.calls).toEqual([])
  })

  it('dispatches an action when title and comment have been entered', () => {
    screen.getByText('Add comment').click()
    const dispatch = useDispatch()
    const titleInput = screen.getByPlaceholderText('Title of your comment')
    const commentInput = screen.getByPlaceholderText('Your comment')

    fireEvent.change(commentInput, { target: { value: comment } })
    fireEvent.change(titleInput, { target: { value: title } })

    screen.getByText('Save').click()

    expect(dispatch.mock.calls).toEqual([
      [
        productChanged({
          comment: comment,
          title: title,
        }),
      ],
    ])
  })
})
