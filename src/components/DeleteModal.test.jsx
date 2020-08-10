import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '../test-utils'
import DeleteModal from './DeleteModal'
import { drawerIsOpened } from '../store/drawerSlice'
import { selectedProductRemoved } from '../store/productsSlice'
import { useDispatch } from 'react-redux'

jest.mock('react-redux', () => {
  const dispatch = jest.fn()

  return {
    ...jest.requireActual('react-redux'),
    useDispatch: () => dispatch,
  }
})

describe('DeleteModal.test.jsx', () => {
  it('renders a h2', () => {
    render(<DeleteModal isOpen={true} onClose={() => {}} />)
    expect(
      screen.getByText('Are you sure you want to delete this product?')
    ).toBeInTheDocument()
  })

  it('renders a cancel button', () => {
    render(<DeleteModal isOpen={true} onClose={() => {}} />)
    expect(screen.getByText('Cancel')).toBeInTheDocument()
  })

  it('renders a delete button', () => {
    render(<DeleteModal isOpen={true} onClose={() => {}} />)
    expect(screen.getByText('Delete')).toBeInTheDocument()
  })

  it('it does not render when isOpen is false', () => {
    render(<DeleteModal isOpen={false} onClose={() => {}} />)
    expect(
      screen.queryByText('Are you sure you want to delete this product?')
    ).not.toBeInTheDocument()
  })

  it('it closes the modal when cancel is clicked', () => {
    const close = jest.fn()
    const { getByText } = render(<DeleteModal isOpen onClose={close} />)
    getByText('Cancel').click()
    expect(close).toHaveBeenCalled()
  })

  it('it dispatches actions when delete is clicked', () => {
    const dispatch = useDispatch()
    const { getByText } = render(<DeleteModal isOpen onClose={() => {}} />)
    getByText('Delete').click()
    expect(dispatch.mock.calls).toEqual([
      [selectedProductRemoved()],
      [drawerIsOpened(false)],
    ])
  })
})
