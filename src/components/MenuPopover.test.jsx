import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/react'
import { render } from '../test-utils'
import MenuPopover from './MenuPopover'



describe('MenuPopover.test.jsx', () => {
  it('renders a button element', () => {
    const { getByRole } = render(<MenuPopover />)
    expect(getByRole('button')).toBeInTheDocument()
  })

  it('renders a edit element', () => {
    render(<MenuPopover />)
    screen.getByRole('button').click()
    expect(screen.getByText('Edit')).toBeInTheDocument()
  })

})