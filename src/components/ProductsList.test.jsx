import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '../test-utils'
import ProductsList from './ProductsList.jsx'

describe('ProductsList.test.js', () => {
  const PRODUCTS_MOCK_DATA = {
    allProducts: [
      {
        id: '001',
        name: 'test product',
        date: '2020-05-27',
        month: 6,
        size: '',
        price: '',
      },
    ],
    selected: '001',
  }

  it('shows the greeting when there are no products', () => {
    const { getByTestId } = render(<ProductsList />)
    const greeting = getByTestId('greeting')
    expect(greeting).toBeInTheDocument()
  })

  it('renders the product list when there are products', () => {
    render(<ProductsList />, { products: PRODUCTS_MOCK_DATA })
    expect(
      screen.getByText(PRODUCTS_MOCK_DATA.allProducts[0].name)
    ).toBeInTheDocument()
  })
})
