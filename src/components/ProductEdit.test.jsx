import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent } from '@testing-library/react'
import { render, screen } from '../test-utils'
import { useDispatch } from 'react-redux'
import { displayDrawerContent } from '../store/drawerSlice'
import { productChanged } from '../store/productsSlice'
import ProductEdit from './ProductEdit'

jest.mock('react-redux', () => {
  const dispatch = jest.fn()

  return {
    ...jest.requireActual('react-redux'),
    useDispatch: () => dispatch,
  }
})

describe('ProductEdit.test.jsx', () => {
  afterEach(() => {
    const dispatch = useDispatch()
    dispatch.mockClear()
  })

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

  beforeEach(() => {
    render(<ProductEdit />, { products: PRODUCTS_MOCK_DATA })
  })

  it('renders the name of the product into the name input field', () => {
    const nameInput = screen.getByLabelText('Product Name')
    expect(nameInput.value).toBe(PRODUCTS_MOCK_DATA.allProducts[0].name)
  })

  it('renders the date of the product into the date input field', () => {
    const dateInput = screen.getByLabelText('Product opened')
    expect(dateInput.value).toBe(PRODUCTS_MOCK_DATA.allProducts[0].date)
  })

  it('renders the amount of months of the product into the month input field', () => {
    const monthInput = screen.getByLabelText('Months until expiration')
    expect(monthInput.value).toBe(
      PRODUCTS_MOCK_DATA.allProducts[0].month.toString()
    )
  })

  it('changes the value of the product name', () => {
    const nameInput = screen.getByLabelText('Product Name')
    fireEvent.change(nameInput, { target: { value: 'Face cream' } })
    expect(nameInput.value).toBe('Face cream')
  })

  it('changes the value of the product date', () => {
    const dateInput = screen.getByLabelText('Product opened')
    fireEvent.change(dateInput, { target: { value: '2020-05-30' } })
    expect(dateInput.value).toBe('2020-05-30')
  })

  it('changes the value of the product size', () => {
    const sizeInput = screen.getByLabelText('Size of the product (optional)')
    fireEvent.change(sizeInput, { target: { value: '50ml' } })
    expect(sizeInput.value).toBe('50ml')
  })

  it('dispatches displayDrawerContent on cancel click', () => {
    const dispatch = useDispatch()
    screen.getByText('Cancel').click()
    expect(dispatch.mock.calls).toEqual([
      [displayDrawerContent('ProductDetails')],
    ])
  })

  it('dispatches on save button click', () => {
    const dispatch = useDispatch()
    screen.getByText('Save').click()
    expect(dispatch.mock.calls).toEqual([
      [productChanged(PRODUCTS_MOCK_DATA.allProducts[0])],
      [displayDrawerContent('ProductDetails')],
    ])
  })
})
