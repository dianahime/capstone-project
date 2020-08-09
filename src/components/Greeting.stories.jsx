import React from 'react'
import Greeting from './Greeting'
import withProvider from '../../.storybook/Provider'

export default {
  title: 'Greeting',
  component: Greeting,
  decorators: [withProvider()],
}

export const GreetingDefault = () => <Greeting />
