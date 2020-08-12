import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '../test-utils'
import dayjs from 'dayjs'
import ProductsListItem from './ProductsListItem.jsx'

describe('ProductsListItem.test.js', () => {
  const PRODUCT_MOCK_DATA = {
    id: '001',
    name: 'test product',
    date: '2020-05-27',
    month: 6,
  }

  beforeEach(() => {
    render(<ProductsListItem product={PRODUCT_MOCK_DATA} />)
  })

  it('renders a li element with the name of the product', () => {
    expect(screen.getByText(PRODUCT_MOCK_DATA.name)).toBeInTheDocument()
  })

  it('renders a li element with the expiration date of the product', () => {
    const expectedDate = dayjs(PRODUCT_MOCK_DATA.date)
      .add(PRODUCT_MOCK_DATA.month, 'M')
      .format('DD.MM.YYYY')
    expect(screen.getByText(`Expires: ${expectedDate}`)).toBeInTheDocument()
  })
})
