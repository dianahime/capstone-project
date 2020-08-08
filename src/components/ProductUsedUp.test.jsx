import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '../test-utils'
import ProductUsedUp from './ProductUsedUp'
import { fireEvent } from '@testing-library/react'
import { useDispatch } from 'react-redux'
import { productChanged } from '../store/productsSlice'

jest.mock('react-redux', () => {
  const dispatch = jest.fn()

  return {
    ...jest.requireActual('react-redux'),
    useDispatch: () => dispatch,
  }
})

describe('ProductUsedUp with a product that has no usedUp date', () => {
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

  const usedUpDate = '2020-07-27'

  beforeEach(() => {
    render(<ProductUsedUp />, { products: PRODUCTS_MOCK_DATA })
  })

  it('Renders a label with a checkbox', () => {
    expect(screen.getByLabelText('Used Up')).toBeInTheDocument()
  })

  it('Renders a date input field and save button when the checkbox is clicked', () => {
    screen.getByLabelText('Used Up').click()
    expect(screen.getByText('Save')).toBeInTheDocument()
    expect(screen.getByTitle('used up on')).toBeInTheDocument()
  })

  it('provides the entered value to the date input after change event', () => {
    screen.getByLabelText('Used Up').click()
    const dateInput = screen.getByTitle('used up on')
    fireEvent.change(dateInput, { target: { value: usedUpDate } })
    expect(dateInput.value).toBe(usedUpDate)
  })

  it('dispatches an action when save button is clicked', () => {
    const dispatch = useDispatch()
    screen.getByLabelText('Used Up').click()
    const dateInput = screen.getByTitle('used up on')
    fireEvent.change(dateInput, { target: { value: usedUpDate } })
    screen.getByText('Save').click()
    expect(dispatch.mock.calls).toEqual([
      [
        productChanged({
          ...PRODUCTS_MOCK_DATA.allProducts[0],
          usedUp: usedUpDate,
        }),
      ],
    ])
  })
})
