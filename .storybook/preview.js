import { addDecorator } from '@storybook/react'
import React from 'react'
import GlobalStyles from '../src/GlobalStyles'

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
))
