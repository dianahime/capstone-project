import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '../test-utils'
import ProductsListItem from './ProductsListItem.jsx'


describe('ProductsListItem.test.js', () => {
  const PRODUCT_MOCK_DATA = {
    id: '001', name: 'test product', date: '2020-05-27', month: 6,
  }

  it('renders a li element with the name of the product', () => {
    render(<ProductsListItem product={PRODUCT_MOCK_DATA}/>)
    expect(screen.getByText('test product')).toBeInTheDocument()
  })

  it('renders a li element with the expiration date of the product', () => {
    render(<ProductsListItem product={PRODUCT_MOCK_DATA}/>)
    expect(screen.getByText('Expires: 27.11.2020')).toBeInTheDocument()
  })
})
