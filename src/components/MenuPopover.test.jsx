import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render } from '../test-utils'
import MenuPopover from './MenuPopover'

describe('MenuPopover.test.jsx', () => {
  const PRODUCTS_MOCK_DATA = {
    allProducts: [
      {
        id: '001', name: 'test product', date: '2020-05-27', month: 6, size: '', price: '',
      },
    ], selected: '001',
  }

  it('renders a button element', () => {
    const { getByRole } = render(<MenuPopover/>, { products: PRODUCTS_MOCK_DATA })
    expect(getByRole('button')).toBeInTheDocument()
  })
})