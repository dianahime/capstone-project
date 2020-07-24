import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent } from '@testing-library/react'
import { render, screen } from '../test-utils'
import Form from './Form.jsx'


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
  });

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
      '3. In how many months does the product expire?'
    )
    fireEvent.change(monthInput, { target: { value: PRODUCT_MOCK_DATA.month } })
    expect(monthInput.value).toBe(PRODUCT_MOCK_DATA.month)
  })

})

describe('Form submit', () => {
  const PRODUCT_MOCK_DATA = {
    name: 'Face cream',
    date: '2020-05-27',
    month: '6',
    price: '',
    size: '',
  }

  it('does not call onSubmit when nothing has been entered', () => {
    const onSubmit = jest.fn()
    render(<Form onFormSubmit={onSubmit} />)
    screen.getByText('Save').click()
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('does not call onSubmit when only name has been entered', () => {
    const onSubmit = jest.fn()
    render(<Form onFormSubmit={onSubmit} />)

    const nameInput = screen.getByLabelText('1. Add product name:')
    fireEvent.change(nameInput, { target: { value: PRODUCT_MOCK_DATA.name } })

    screen.getByText('Save').click()
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('calls onSubmit with the entered values when name, date and month have been entered', () => {
    const onSubmit = jest.fn()
    render(<Form onSubmit={onSubmit} />)

    const nameInput = screen.getByLabelText('1. Add product name:')
    fireEvent.change(nameInput, { target: { value: PRODUCT_MOCK_DATA.name } })

    const dateInput = screen.getByLabelText('2. When did you open the product?')
    fireEvent.change(dateInput, { target: { value: PRODUCT_MOCK_DATA.date } })

    const monthInput = screen.getByLabelText(
      '3. In how many months does the product expire?'
    )
    fireEvent.change(monthInput, { target: { value: PRODUCT_MOCK_DATA.month } })

    screen.getByText('Save').click()
    expect(onSubmit.mock.calls[0][0]).toEqual(PRODUCT_MOCK_DATA)
  })

  it('resets the inputs when drawer is closed', () => {
    render(<Form />, { drawer: { isOpen: true }, })

    const nameInput = screen.getByLabelText('1. Add product name:')
    fireEvent.change(nameInput, { target: { value: PRODUCT_MOCK_DATA.name } })
    expect(nameInput.value).toBe('PRODUCT_MOCK_DATA.name')

    render(<Form />, { drawer: { isOpen: false }, })
    expect(nameInput.value).toBe('')
  })
})
