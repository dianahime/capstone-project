import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import ProductComment from './ProductComment'

describe('ProductComment when a comment is provided', () => {
  const PRODUCTS_MOCK_DATA = {
    id: '001',
    name: 'test product',
    date: '2020-05-27',
    month: 6,
    size: '',
    price: '',
    title: 'test',
    comment: 'This is a test product.',
  }

  beforeEach(() => {
    render(<ProductComment product={PRODUCTS_MOCK_DATA} />)
  })

  it('renders the title', () => {
    expect(screen.getByText(PRODUCTS_MOCK_DATA.title)).toBeInTheDocument()
  })

  it('renders the comment', () => {
    expect(screen.getByText(PRODUCTS_MOCK_DATA.comment)).toBeInTheDocument()
  })
})
