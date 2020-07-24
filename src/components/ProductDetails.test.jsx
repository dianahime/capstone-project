import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '../test-utils'
import ProductDetails from './ProductDetails'

describe('ProductDetails.test.jsx', () => {
 const PRODUCTS_MOCK_DATA = {
    allProducts: [
      {
        id: '001', name: 'test product', date: '2020-05-27', month: 6, size: '', price: ''
      },
    ], selected: '001',
  }

  beforeEach(() => {
    render(<ProductDetails />, {products: PRODUCTS_MOCK_DATA})
  });

  it('renders a section element', () => {
    expect(screen.getByTestId('ProductDetails')).toBeInTheDocument()
  })

  it('renders a h1 element with product.name', () => {
    expect(screen.getByText('test product')).toBeInTheDocument()
  })

  it('renders a p element with product.date', () => {
    expect(screen.getByText('Opened: 27.05.2020')).toBeInTheDocument()
  })

  it('renders a p element with expiring date', () => {
    expect(screen.getByText('Expires: 27.11.2020')).toBeInTheDocument()
  })

  it('does not render a p element with size', () => {
    expect(screen.queryByText('Size:')).not.toBeInTheDocument()
  })

  it('does not render a p element with price', () => {
    expect(screen.queryByText('Price:')).not.toBeInTheDocument()
  })
})

describe('ProductDetails with different product or no product', () => {
  it('does not render the component without a selected product', () => {
    render(<ProductDetails />)
    expect(screen.queryByTestId('ProductDetails')).not.toBeInTheDocument()
  })

  it('does render a p element with size', () => {
    render(<ProductDetails />, {products: {
        allProducts: [
          {
            id: '001', name: 'test product', date: '2020-05-27', month: 6, size:'50ml',
          },
        ], selected: '001',
      },})
    expect(screen.getByText('Size: 50ml')).toBeInTheDocument()
  })

})