import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Button from './Button.jsx'

describe('Button.test.jsx', () => {
  it('renders a button element', () => {
    render(<Button />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('renders a text inside button element', () => {
    const testChildren = 'Foo.Bar'
    render(<Button text={testChildren} />)
    expect(screen.getByText(testChildren)).toBeInTheDocument()
  })

  it('calls "onClick" prop on button click', () => {
    const onClick = jest.fn()
    const { getByRole } = render(<Button onClick={onClick} />)
    getByRole('button').click()
    expect(onClick).toHaveBeenCalled()
  })
})
