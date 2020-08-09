import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { createReducer } from '../src/store/index.js'
import { configureStore } from '@reduxjs/toolkit'

export const ProviderWrapper = ({ children, store }) => (
  <ReduxProvider store={store}>{children}</ReduxProvider>
)

const PRODUCTS_MOCK_DATA = {
  allProducts: [
    {
      id: '001',
      name: 'test product',
      date: '2020-05-27',
      month: 6,
      size: '',
      price: '',
    },
  ],
  selected: '001',
}

const withProvider = (initialState = { products: PRODUCTS_MOCK_DATA }) => (
  story
) => {
  const store = configureStore({
    reducer: createReducer(),
    preloadedState: initialState,
  })

  return <ProviderWrapper store={store}>{story()}</ProviderWrapper>
}

export default withProvider
