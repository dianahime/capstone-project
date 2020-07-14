import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen, fireEvent } from '@testing-library/react'
import Form from './Form.jsx'

describe('Form.test.js', () => {
  it('provides the entered value to the name input after change event', () => {
    render(<Form />)
    const nameInput = screen.getByLabelText('1. Add product name:')
    fireEvent.change(nameInput, { target: { value: 'Face cream' } })
    expect(nameInput.value).toBe('Face cream')
  })

  it('provides the entered value to the date input after change event', () => {
    render(<Form />)
    const dateInput = screen.getByLabelText('2. When did you open the product?')
    fireEvent.change(dateInput, { target: { value: '2020-05-27' } })
    expect(dateInput.value).toBe('2020-05-27')
  })

  it('provides the entered value to the month input after change event', () => {
    render(<Form />)
    const monthInput = screen.getByLabelText(
      '3. In how many months does the product expire?'
    )
    fireEvent.change(monthInput, { target: { value: 6 } })
    expect(monthInput.value).toBe('6')
  })

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
    fireEvent.change(nameInput, { target: { value: 'Face cream' } })

    screen.getByText('Save').click()
    expect(onSubmit).not.toHaveBeenCalled()
  })

  it('calls onSubmit with the entered values when name, date and month have been entered', () => {
    const onSubmit = jest.fn()
    render(<Form onFormSubmit={onSubmit} />)
    const product = {
      name: 'Face cream',
      date: '2020-05-27',
      month: '6',
      price: '',
      size: '',
    }

    const nameInput = screen.getByLabelText('1. Add product name:')
    fireEvent.change(nameInput, { target: { value: product.name } })

    const dateInput = screen.getByLabelText('2. When did you open the product?')
    fireEvent.change(dateInput, { target: { value: product.date } })

    const monthInput = screen.getByLabelText(
      '3. In how many months does the product expire?'
    )
    fireEvent.change(monthInput, { target: { value: product.month } })

    screen.getByText('Save').click()
    expect(onSubmit.mock.calls[0][0]).toEqual(product)
  })

  it('resets the inputs when isVisible is changed to false', () => {
    const { rerender } = render(<Form isVisible />)

    const nameInput = screen.getByLabelText('1. Add product name:')
    fireEvent.change(nameInput, { target: { value: 'Face cream' } })
    expect(nameInput.value).toBe('Face cream')

    rerender(<Form />)
    expect(nameInput.value).toBe('')
  })
})
