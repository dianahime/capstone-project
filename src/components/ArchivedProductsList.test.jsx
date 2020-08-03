import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '../test-utils'
import ArchivedProductsList from './ArchivedProductsList'

describe('ArchivedProductsList.test.jsx', () => {
  const PRODUCTS_MOCK_DATA = {
    allProducts: [
      {
        id: '001', name: 'test product', date: '2020-05-27', month: 6, size: '', price: '',
      }, {
        id: '002', name: 'test product 2', date: '2020-05-27', month: 6, size: '', price: '', isArchived: true,
      },
    ], selected: '001',
  }

  it('renders the archive product list when there are products with isArchived: true', () => {
    render(<ArchivedProductsList/>, { products: PRODUCTS_MOCK_DATA })
    expect(screen.queryByText(PRODUCTS_MOCK_DATA.allProducts[0].name)).not.toBeInTheDocument()
    expect(screen.getByText(PRODUCTS_MOCK_DATA.allProducts[1].name)).toBeInTheDocument()
  })
})

