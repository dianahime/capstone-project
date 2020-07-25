import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '../test-utils'
import DrawerToggle from './DrawerToggle.jsx'
import { displayDrawerContent, drawerIsOpened } from '../store/drawerSlice'
import { useDispatch } from 'react-redux'

jest.mock('react-redux', () => {
  const dispatch = jest.fn()

  return ({
    ...jest.requireActual('react-redux'),
    useDispatch: () => dispatch,
  })
})

describe('DrawerToggle.test.js', () => {
  afterEach(() => {
    const dispatch = useDispatch()
    dispatch.mockClear()
  })

  it('renders a button element', () => {
    render(<DrawerToggle/>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('renders an i element', () => {
    render(<DrawerToggle/>)
    expect(screen.queryByTestId('icon')).toBeInTheDocument()
  })

  it('it dispatches drawerIsOpen(false) on button click when drawer is open', () => {
    const dispatch = useDispatch()
    const { getByTestId } = render(<DrawerToggle/>, {
      drawer: { isOpen: true },
    })

    getByTestId('icon').click()
    expect(dispatch.mock.calls).toEqual([
      [drawerIsOpened(false)]
    ])
  })

  it("it dispatches displayDrawerContent('Form') on button click when drawer is !open", () => {
    const dispatch = useDispatch()
    const { getByTestId } = render(<DrawerToggle/>, {
      drawer: { isOpen: false },
    })

    getByTestId('icon').click()
    expect(dispatch.mock.calls).toEqual([
      [displayDrawerContent('Form')]
    ])
  })

  it('should have class cancelButton if drawer is open', () => {
    render(<DrawerToggle/>, { drawer: { isOpen: true } })
    expect(screen.getByRole('button')).toHaveClass('cancelButton')
  })

  it('should not have class cancelButton if drawer is closed', () => {
    render(<DrawerToggle/>, { drawer: { isOpen: false } })
    expect(screen.getByRole('button')).not.toHaveClass('cancelButton')
  })
})
