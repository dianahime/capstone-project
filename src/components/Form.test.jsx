import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent } from '@testing-library/react'
import { render, screen } from '../test-utils'
import Form from './Form.jsx'
import { useDispatch } from 'react-redux'
import { productAdded } from '../store/productsSlice'

jest.mock('react-redux', () => {
  const dispatch = jest.fn()

  return ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => dispatch,
  })
})
jest.mock('uuid', () => ({
    v4: () => 'jujuid',
}))

describe('Form.test.js', () => {
  const PRODUCT_MOCK_DATA = {
    name: 'Face cream',
    date: '2020-05-27',
    month: '6',
    price: '',
    size: '',
  }

  beforeEach(() => {
    render(<Form/>)
  })

  it('provides the entered value to the name input after change event', () => {
    const nameInput = screen.getByLabelText('1. Add product name:')
    fireEvent.change(nameInput, { target: { value: PRODUCT_MOCK_DATA.name } })
    expect(nameInput.value).toBe(PRODUCT_MOCK_DATA.name)
  })

  it('provides the entered value to the date input after change event', () => {
    const dateInput = screen.getByLabelText('2. When did you open the product?')
    fireEvent.change(dateInput, { target: { value: PRODUCT_MOCK_DATA.date } })
    expect(dateInput.value).toBe(PRODUCT_MOCK_DATA.date)
  })

  it('provides the entered value to the month input after change event', () => {
    const monthInput = screen.getByLabelText(
      '3. In how many months does the product expire?',
    )
    fireEvent.change(monthInput, { target: { value: PRODUCT_MOCK_DATA.month } })
    expect(monthInput.value).toBe(PRODUCT_MOCK_DATA.month)
  })

})

describe('Form submit', () => {
  afterEach(() => {
    const dispatch = useDispatch()
    dispatch.mockClear()
  })

  const PRODUCT_MOCK_DATA = {
    name: 'Face cream',
    date: '2020-05-27',
    month: '6',
    price: '',
    size: '',
  }

  it('does not dispatch an action when nothing has been entered', () => {
    const dispatch = useDispatch()
    render(<Form/>)
    screen.getByText('Save').click()
    expect(dispatch.mock.calls).toEqual([])
  })

  it('does not dispatch an action when only name has been entered', () => {
    const dispatch = useDispatch()
    render(<Form/>)

    const nameInput = screen.getByLabelText('1. Add product name:')
    fireEvent.change(nameInput, { target: { value: PRODUCT_MOCK_DATA.name } })

    screen.getByText('Save').click()
    expect(dispatch.mock.calls).toEqual([])
  })

  it('dispatches actions with the entered values when name, date and month have been entered', () => {
    const dispatch = useDispatch()
    render(<Form/>)

    const nameInput = screen.getByLabelText('1. Add product name:')
    fireEvent.change(nameInput, { target: { value: PRODUCT_MOCK_DATA.name } })

    const dateInput = screen.getByLabelText('2. When did you open the product?')
    fireEvent.change(dateInput, { target: { value: PRODUCT_MOCK_DATA.date } })

    const monthInput = screen.getByLabelText(
      '3. In how many months does the product expire?',
    )
    fireEvent.change(monthInput, { target: { value: PRODUCT_MOCK_DATA.month } })

    screen.getByText('Save').click()
    expect(dispatch.mock.calls).toEqual([
      [productAdded({ id: 'jujuid', ...PRODUCT_MOCK_DATA })],
    ])
  })
})
