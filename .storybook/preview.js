import { addDecorator } from '@storybook/react'
import React from 'react'
import GlobalStyles from '../src/GlobalStyles'
import '@blueprintjs/core/lib/css/blueprint.css'
import StoryRouter from 'storybook-react-router'

addDecorator(StoryRouter())

addDecorator((storyFn) => (
  <>
    <GlobalStyles />
    {storyFn()}
  </>
))
