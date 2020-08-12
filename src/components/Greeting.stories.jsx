import React from 'react'
import withProvider from '../../.storybook/Provider'
import Greeting from './Greeting'

export default {
  title: 'Greeting',
  component: Greeting,
  decorators: [withProvider()],
}

export const GreetingDefault = () => <Greeting />
