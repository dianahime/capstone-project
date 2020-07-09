import React from 'react'
import Greeting from './Greeting'
import GlobalStyles from '../GlobalStyles'

export default {
  title: 'Greeting',
  component: Greeting,
}

export const GreetingDefault = () => (
  <>
    <GlobalStyles />
    <Greeting />
  </>
)
