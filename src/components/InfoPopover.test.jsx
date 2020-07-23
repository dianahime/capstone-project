import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import InfoPopover from './InfoPopover.jsx'

describe('InfoPopover.test.js', () => {
  it('renders a button element', () => {
    const { getByRole } = render(<InfoPopover />)
    expect(getByRole('button')).toBeInTheDocument()
  })

  it('renders a div element', () => {
    const { getByText, getByRole } = render(<InfoPopover />)
    getByRole('button').click()

    //expect(getByText(/The time in months/i)).toBeInTheDocument()
  })
})
