import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '../test-utils'
import DeleteModal from './DeleteModal'

describe('DeleteModal.test.jsx', () => {
  it('renders a h2', () => {
    render(<DeleteModal isOpen={true}/>)
    expect(screen.getByText('Are you sure you want to delete this product?')).toBeInTheDocument()
  })

  it('renders a cancel button', () => {
    render(<DeleteModal isOpen={true}/>)
    expect(screen.getByText('Cancel')).toBeInTheDocument()
  })

  it('renders a delete button', () => {
    render(<DeleteModal isOpen={true}/>)
    expect(screen.getByText('Delete')).toBeInTheDocument()
  })

  it('it does not render when isOpen is false', () => {
    render(<DeleteModal isOpen={false}/>)
    expect(screen.queryByText('Are you sure you want to delete this product?')).not.toBeInTheDocument()
  })

  it('it closes the modal when cancel is clicked', () => {
    const close = jest.fn()
    const { getByText } = render(<DeleteModal isOpen onClose={close} />)
    getByText('Cancel').click()
    expect(close).toHaveBeenCalled()
  })
})