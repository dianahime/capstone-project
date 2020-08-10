import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent } from '@testing-library/react'
import { render, screen } from '../test-utils'
import Form from './Form.jsx'
import { useDispatch } from 'react-redux'
import { productAdded } from '../store/productsSlice'
import * as MockDate from 'mockdate'
import { drawerIsOpened } from '../store/drawerSlice'

jest.mock('react-redux', () => {
  const dispatch = jest.fn()

  return {
    ...jest.requireActual('react-redux'),
    useDispatch: () => dispatch,
  }
})

jest.mock('uuid', () => ({
  v4: () => 'jujuid',
}))

beforeEach(() => {
  MockDate.set('2020-07-31')
})

describe('Form.test.js', () => {
  const PRODUCT_MOCK_DATA = {
    name: 'Face cream',
    date: '2020-05-27',
    month: '6',
    price: '',
    size: '',
  }

  beforeEach(() => {
    render(<Form />)
  })

  afterEach(() => {
    const dispatch = useDispatch()
    dispatch.mockClear()
  })

  it('provides the entered value to the name input after change event', () => {
    const nameInput = screen.getByLabelText('Add product name:')
    fireEvent.change(nameInput, { target: { value: PRODUCT_MOCK_DATA.name } })
    expect(nameInput.value).toBe(PRODUCT_MOCK_DATA.name)
  })

  it('provides the entered value to the date input after change event', () => {
    const dateInput = screen.getByLabelText('When did you open the product?')
    fireEvent.change(dateInput, { target: { value: PRODUCT_MOCK_DATA.date } })
    expect(dateInput.value).toBe(PRODUCT_MOCK_DATA.date)
  })

  it('provides the entered value to the month input after change event', () => {
    const monthInput = screen.getByLabelText(
      'In how many months does the product expire?'
    )
    fireEvent.change(monthInput, { target: { value: PRODUCT_MOCK_DATA.month } })
    expect(monthInput.value).toBe(PRODUCT_MOCK_DATA.month)
  })

  it('does not dispatch an action when nothing has been entered', () => {
    const dispatch = useDispatch()
    screen.getByText('Save').click()
    expect(dispatch.mock.calls).toEqual([])
  })

  it('does not dispatch an action when only name has been entered', () => {
    const dispatch = useDispatch()

    const nameInput = screen.getByLabelText('Add product name:')
    fireEvent.change(nameInput, { target: { value: PRODUCT_MOCK_DATA.name } })

    screen.getByText('Save').click()
    expect(dispatch.mock.calls).toEqual([])
  })

  it('dispatches actions with the entered values when name, date and month have been entered', () => {
    const dispatch = useDispatch()

    const nameInput = screen.getByLabelText('Add product name:')
    fireEvent.change(nameInput, { target: { value: PRODUCT_MOCK_DATA.name } })

    const dateInput = screen.getByLabelText('When did you open the product?')
    fireEvent.change(dateInput, { target: { value: PRODUCT_MOCK_DATA.date } })

    const monthInput = screen.getByLabelText(
      'In how many months does the product expire?'
    )
    fireEvent.change(monthInput, { target: { value: PRODUCT_MOCK_DATA.month } })

    screen.getByText('Save').click()
    expect(dispatch.mock.calls).toEqual([
      [
        productAdded({
          id: 'jujuid',
          createdAt: '2020-07-31T02:00:00+02:00',
          ...PRODUCT_MOCK_DATA,
        }),
      ],
      [drawerIsOpened(false)],
    ])
  })
})
