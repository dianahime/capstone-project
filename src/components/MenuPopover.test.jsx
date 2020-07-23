import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render } from '../test-utils'
import MenuPopover from './MenuPopover'



describe('MenuPopover.test.jsx', () => {
  it('renders a button element', () => {
    const { getByRole } = render(<MenuPopover />)
    expect(getByRole('button')).toBeInTheDocument()
  })

  it('renders a edit element', () => {
    const { getByText, getByRole } = render(<MenuPopover />)
    getByRole('button').click()
    expect(getByText('Edit')).toBeInTheDocument()
  })

})