import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '../test-utils'
import NotFound from './NotFound.jsx'

describe('NotFound.test.jsx', () => {
  it('renders a div element', () => {
    const { queryByTestId } = render(<NotFound/>)
    expect(queryByTestId('notFound')).toBeInTheDocument()
  })

  it('has blurred class if drawer is opened', () => {
    render(<NotFound/>, { drawer: { isOpen: true } })
    expect(screen.getByTestId('notFound')).toHaveClass('blurred')
  })
})