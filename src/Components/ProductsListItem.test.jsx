import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import ProductsListItem from './ProductsListItem.jsx'

describe('ProductsListItem.test.js', () => {
  it('renders a li element with an p element', () => {
    const product = {
      id: 'jujuid',
      name: 'Face cream',
      date: '2020-05-27',
      month: 6,
    }
    const { queryByText } = render(<ProductsListItem product={product} />)

    expect(queryByText(/Opened:/)).toBeInTheDocument()
  })

  it('shows price and size when they are present on product prop', () => {
    const product = {
      id: 'jujuid',
      name: 'Face cream',
      date: '2020-05-27',
      month: 6,
    }
    const { queryByText, getByText, rerender } = render(
      <ProductsListItem product={product} />
    )

    expect(queryByText(/Size/)).not.toBeInTheDocument()
    expect(queryByText(/Price/)).not.toBeInTheDocument()

    const product2 = {
      id: 'jujuid',
      name: 'Face cream',
      date: '2020-05-27',
      month: 6,
      size: '50ml',
      price: '12$',
    }

    rerender(<ProductsListItem product={product2} />)

    expect(getByText(`Size: ${product2.size}`)).toBeInTheDocument()
    expect(getByText(`Price: ${product2.price}`)).toBeInTheDocument()
  })
})
