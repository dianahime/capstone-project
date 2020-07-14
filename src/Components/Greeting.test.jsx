import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Greeting from './Greeting.jsx'

describe('Greeting.test.js', () => {
  it('renders a div element', () => {
    const { queryByTestId } = render(<Greeting />)
    expect(queryByTestId('greeting')).toBeInTheDocument()
  })

  it('has blurred class if isBlurred is true', () => {
    const { getByTestId, rerender } = render(<Greeting />)
    const greeting = getByTestId('greeting')
    expect(greeting).not.toHaveClass('blurred')

    rerender(<Greeting isBlurred />)
    expect(greeting).toHaveClass('blurred')
  })
})
