import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '../test-utils'
import ProductsListItem from './ProductsListItem.jsx'
import dayjs from 'dayjs'


describe('ProductsListItem.test.js', () => {
  const PRODUCT_MOCK_DATA = {
    id: '001', name: 'test product', date: '2020-05-27', month: 6,
  }

  it('renders a li element with the name of the product', () => {
    render(<ProductsListItem product={PRODUCT_MOCK_DATA}/>)
    expect(screen.getByText(PRODUCT_MOCK_DATA.name)).toBeInTheDocument()
  })

  it('renders a li element with the expiration date of the product', () => {
    render(<ProductsListItem product={PRODUCT_MOCK_DATA}/>)
    const expectedDate = dayjs(PRODUCT_MOCK_DATA.date).add(PRODUCT_MOCK_DATA.month, 'M').format('DD.MM.YYYY')
    expect(screen.getByText(`Expires: ${expectedDate}`)).toBeInTheDocument()
  })
})
