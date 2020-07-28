import React from 'react'
import { render } from './test-utils'
import App from './App'

describe('<App />', () => {
  it('renders <App /> component correctly', () => {
    const { getByText } = render(<App />)
    const linkElement = getByText('Click on the plus icon to add a product.')

    expect(linkElement).toBeInTheDocument()
  })
})
