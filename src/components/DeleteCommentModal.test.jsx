import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '../test-utils'
import DeleteCommentModal from './DeleteCommentModal'
import { useDispatch } from 'react-redux'
import { selectedProductCommentRemoved } from '../store/productsSlice'

jest.mock('react-redux', () => {
  const dispatch = jest.fn()

  return {
    ...jest.requireActual('react-redux'),
    useDispatch: () => dispatch,
  }
})

describe('DeleteCommentModal is opened', () => {
  beforeEach(() => {
    render(<DeleteCommentModal isOpen onClose={() => {}} />)
  })

  it('renders a h2', () => {
    expect(
      screen.getByText('Are you sure you want to delete this comment?')
    ).toBeInTheDocument()
  })

  it('renders a cancel button', () => {
    expect(screen.getByText('Cancel')).toBeInTheDocument()
  })

  it('renders a delete button', () => {
    expect(screen.getByText('Delete')).toBeInTheDocument()
  })

  it('it dispatches actions when delete is clicked', () => {
    const dispatch = useDispatch()
    screen.getByText('Delete').click()
    expect(dispatch.mock.calls).toEqual([[selectedProductCommentRemoved()]])
  })
})

describe('DeleteCommentModal is closed', () => {
  it('it closes the modal when cancel is clicked', () => {
    const close = jest.fn()
    const { getByText } = render(<DeleteCommentModal isOpen onClose={close} />)
    getByText('Cancel').click()
    expect(close).toHaveBeenCalled()
  })

  it('it does not render when isOpen is false', () => {
    render(<DeleteCommentModal isOpen={false} onClose={() => {}} />)
    expect(
      screen.queryByText('Are you sure you want to delete this comment?')
    ).not.toBeInTheDocument()
  })
})
