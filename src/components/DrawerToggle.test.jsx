import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import DrawerToggle from './DrawerToggle.jsx'

describe('DrawerToggle.test.js', () => {
  it('renders a button element', () => {
    render(<DrawerToggle />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  /* it('renders an i element', () => {
    render(<DrawerToggle />)
    expect(screen.queryByTestId('icon')).toBeInTheDocument()
  })

  it('calls "onClick" prop on button click', () => {
    const onClick = jest.fn()
    const { getByRole } = render(<DrawerToggle onClick={onClick} />)

    fireEvent.click(getByRole('button'))
    expect(onClick).toHaveBeenCalled()
  })

  it('should have class cancelButton if isCancel prop is true', () => {
    const { getByRole } = render(<DrawerToggle isCancel />)
    expect(getByRole('button')).toHaveClass('cancelButton')
  })

  it('should not have class cancelButton if isCancel prop is falsy', () => {
    const { getByRole } = render(<DrawerToggle />)
    expect(getByRole('button')).not.toHaveClass('cancelButton')
  }) */
})
