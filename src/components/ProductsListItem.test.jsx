import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '../test-utils'
import ProductsListItem from './ProductsListItem.jsx'


describe('ProductsListItem.test.js', () => {
  it('renders a li element with the name of the product', () => {
    const product = {
      id: '001', name: 'test product', date: '2020-05-27', month: 6,
    }
    render(<ProductsListItem product={product}/>)
    expect(screen.getByText('test product')).toBeInTheDocument()
  })

  it('renders a li element with the expiration date of the product', () => {
    const product = {
      id: '001', name: 'test product', date: '2020-05-27', month: 6,
    }
    render(<ProductsListItem product={product}/>)
    expect(screen.getByText('Expires: 27.11.2020')).toBeInTheDocument()
  })
})
