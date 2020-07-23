import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '../test-utils'
import Drawer from './Drawer.jsx'

describe('Drawer.test.js', () => {
  it('renders a button element', () => {
    render(<Drawer/>, {
      drawer: {
        isOpen: true,
        visibleComponent: 'Form',
      },
    })
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('renders a section element', () => {
    render(<Drawer/>)
    expect(screen.queryByTestId('section')).toBeInTheDocument()
  })

  it('renders the form component inside the drawer', () => {
    render(<Drawer/>, {
      drawer: {
        isOpen: true,
        visibleComponent: 'Form',
      },
    })
    expect(screen.getByTestId('Form')).toBeInTheDocument()
    expect(screen.queryByTestId('ProductDetails')).not.toBeInTheDocument()
    expect(screen.queryByTestId('ProductEdit')).not.toBeInTheDocument()
  })

  it('renders the productDetails component inside the drawer', () => {
    render(<Drawer/>, {
      drawer: {
        isOpen: true,
        visibleComponent: 'ProductDetails',
      },
      products: {
        allProducts: [
          {
            id: '001', name: 'test product', date: '2020-05-27', month: 6,
          },
        ], selected: '001',
      },
    })
    expect(screen.getByTestId('ProductDetails')).toBeInTheDocument()
    expect(screen.queryByTestId('Form')).not.toBeInTheDocument()
    expect(screen.queryByTestId('ProductEdit')).not.toBeInTheDocument()
  })

  it('renders the productEdit component inside the drawer', () => {
    render(<Drawer/>, {
      drawer: {
        isOpen: true,
        visibleComponent: 'ProductEdit',
      },
      products: {
        allProducts: [
          {
            id: '001', name: 'test product', date: '2020-05-27', month: 6, size: '', price: ''
          },
        ], selected: '001',
      },
    })
    expect(screen.getByTestId('ProductEdit')).toBeInTheDocument()
    expect(screen.queryByTestId('Form')).not.toBeInTheDocument()
    expect(screen.queryByTestId('ProductDetails')).not.toBeInTheDocument()

  })
})
