import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '../test-utils'
import DrawerToggle from './DrawerToggle.jsx'


describe('DrawerToggle.test.js', () => {
  it('renders a button element', () => {
    render(<DrawerToggle />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('renders an i element', () => {
    render(<DrawerToggle />)
    expect(screen.queryByTestId('icon')).toBeInTheDocument()
  })

  it('calls "onClick" prop on button click', () => {
    const onClick = jest.fn()
    const { getByTestId } = render(<DrawerToggle onClick={onClick} />)

    getByTestId('icon').click()
    expect(onClick).toHaveBeenCalled()
  })

  it('should have class cancelButton if drawer is open', () => {
    render (<DrawerToggle />, { drawer: { isOpen: true }, })
    expect(screen.getByRole('button')).toHaveClass('cancelButton')
  })

  it('should not have class cancelButton if drawer is closed', () => {
    render (<DrawerToggle />, { drawer: { isOpen: false }, })
    expect(screen.getByRole('button')).not.toHaveClass('cancelButton')
  })
})
