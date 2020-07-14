import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import ProductsList from './ProductsList.jsx'

describe('ProductsList.test.js', () => {
  it('shows the greeting when there are no products and productList otherwise', () => {
    const { getByTestId, rerender } = render(<ProductsList products={[]} />)
    const greeting = getByTestId('greeting')
    expect(greeting).toBeInTheDocument()

    const products = [
      { id: 'jujuid', name: 'Face cream', date: '2020-05-27', month: 6 },
    ]
    rerender(<ProductsList products={products} />)
    expect(getByTestId('productsList')).toBeInTheDocument()
  })
})
