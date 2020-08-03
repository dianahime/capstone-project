import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { createReducer } from './store'
import { BrowserRouter as Router } from 'react-router-dom'

function render(
  ui,
  initialState,
) {
  const store = configureStore({ reducer: createReducer(), preloadedState: initialState })

  function Wrapper({ children }) {
    return <Router><Provider store={store}>{children}</Provider></Router>
  }

  return rtlRender(ui, { wrapper: Wrapper })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }