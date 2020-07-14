import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import Drawer from './Drawer.jsx'

describe('Drawer.test.js', () => {
  it('renders a button element', () => {
    render(<Drawer />)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('renders a section element', () => {
    render(<Drawer />)
    expect(screen.queryByTestId('section')).toBeInTheDocument()
  })

  it('renders a text inside the element', () => {
    const testChildren = 'Foo.Bar'
    render(<Drawer>{testChildren}</Drawer>)
    expect(screen.getByText(testChildren)).toBeInTheDocument()
  })

  it('should set setIsOpen to true on button click when the drawer is closed', () => {
    const setIsOpen = jest.fn()
    const { getByRole } = render(<Drawer setIsOpen={setIsOpen} />)
    getByRole('button').click()
    expect(setIsOpen.mock.calls[0][0]).toBe(true)
  })

  it('should set setIsOpen to false on button click when the drawer is open', () => {
    const setIsOpen = jest.fn()
    const { getByRole } = render(<Drawer isOpen setIsOpen={setIsOpen} />)
    getByRole('button').click()
    expect(setIsOpen.mock.calls[0][0]).toBe(false)
  })
})
