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
    expect(screen.getByLabelText('1. Add product name:')).toBeInTheDocument()
    expect(screen.queryByText(/Opened:/i)).not.toBeInTheDocument()
    expect(screen.queryByLabelText('Product Name')).not.toBeInTheDocument()
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
    expect(screen.getByText(/Opened:/i)).toBeInTheDocument()
    expect(screen.queryByLabelText('1. Add product name:')).not.toBeInTheDocument()
    expect(screen.queryByLabelText('Product Name')).not.toBeInTheDocument()
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
    expect(screen.getByLabelText('Product Name')).toBeInTheDocument()
    expect(screen.queryByText(/Opened:/i)).not.toBeInTheDocument()
    expect(screen.queryByLabelText('1. Add product name:')).not.toBeInTheDocument()

  })
})
