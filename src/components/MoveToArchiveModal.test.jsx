import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '../test-utils'
import MoveToArchiveModal from './MoveToArchiveModal'
import { useDispatch } from 'react-redux'
import { productArchived } from '../store/productsSlice'
import DeleteCommentModal from './DeleteCommentModal'

jest.mock('react-redux', () => {
  const dispatch = jest.fn()

  return {
    ...jest.requireActual('react-redux'),
    useDispatch: () => dispatch,
  }
})

describe('MoveToArchiveModal is opened', () => {
  beforeEach(() => {
    render(<MoveToArchiveModal isOpen onClose={() => {}} />)
  })

  it('renders a h2', () => {
    expect(
      screen.getByText('Do you want to move the product to your archive?')
    ).toBeInTheDocument()
  })

  it('renders a no button', () => {
    expect(screen.getByText('No')).toBeInTheDocument()
  })

  it('renders a yes button', () => {
    expect(screen.getByText('Yes')).toBeInTheDocument()
  })
})

describe('MoveToArchiveModal is closed', () => {
  it('it closes the modal when cancel is clicked', () => {
    const close = jest.fn()
    const { getByText } = render(<MoveToArchiveModal isOpen onClose={close} />)
    getByText('No').click()
    expect(close).toHaveBeenCalled()
  })

  it('it dispatches actions when yes is clicked and closes the modal', () => {
    const close = jest.fn()
    const dispatch = useDispatch()
    const { getByText } = render(<MoveToArchiveModal isOpen onClose={close} />)

    getByText('Yes').click()
    expect(dispatch.mock.calls).toEqual([[productArchived()]])
    expect(close).toHaveBeenCalled()
  })

  it('it does not render when isOpen is false', () => {
    render(<DeleteCommentModal isOpen={false} onClose={() => {}} />)
    expect(
      screen.queryByText('Do you want to move the product to your archive?')
    ).not.toBeInTheDocument()
  })
})
