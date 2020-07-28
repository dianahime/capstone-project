import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '../test-utils'
import Dashboard from './Dashboard'

describe('Dashboard.test.jsx', () => {
  const PRODUCTS_MOCK_DATA = {
      allProducts: [
        {
          id: '001', name: 'test product', date: '2020-05-27', month: 6, size: '', price: ''
        },
      ],
  }

  it('shows the greeting when there are no products', () => {
    const { getByTestId } = render(<Dashboard />)
    const greeting = getByTestId('greeting')
    expect(greeting).toBeInTheDocument()
  })

  it('renders the soon to expire list when there are products', () => {
    render(<Dashboard />, {products: PRODUCTS_MOCK_DATA})
    expect(screen.getByText('Soon to expire')).toBeInTheDocument()
  })

  it('renders the recently added list', () => {
    render(<Dashboard />, {products: PRODUCTS_MOCK_DATA})
    expect(screen.getByText('Recently added')).toBeInTheDocument()
  })

  it('renders a product in the recently added and soon to expire list', () => {
    render(<Dashboard />, {products: PRODUCTS_MOCK_DATA})
    expect(screen.getAllByText(PRODUCTS_MOCK_DATA.allProducts[0].name).length).toBe(2)
  })
})