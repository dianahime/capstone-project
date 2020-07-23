import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '../test-utils'
import Greeting from './Greeting.jsx'

describe('Greeting.test.js', () => {
  it('renders a div element', () => {
    const { queryByTestId } = render(<Greeting />)
    expect(queryByTestId('greeting')).toBeInTheDocument()
  })

  it('has blurred class if drawer is opened', () => {
    render (<Greeting />, { drawer: { isOpen: true }, })
    expect(screen.getByTestId('greeting')).toHaveClass('blurred')
  })
})
