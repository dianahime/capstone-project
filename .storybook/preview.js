import { addDecorator } from '@storybook/react'
import React from 'react'
import GlobalStyles from '../src/GlobalStyles'
import withProvider from './Provider'

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
))

addDecorator(withProvider)
