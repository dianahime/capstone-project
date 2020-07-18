import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import store from '../src/store/index.js'

export const ProviderWrapper = ({ children, store }) => (
  <ReduxProvider store={store}>{children}</ReduxProvider>
)

const withProvider = (story) => {
  return <ProviderWrapper store={store}>{story()}</ProviderWrapper>
}

export default withProvider
