import React from 'react'
import { actions } from '@storybook/addon-actions'
import Button from './Button'
import GlobalStyles from '../GlobalStyles'

export default {
  title: 'Button',
  component: Button,
}

const eventsFromObject = actions({ onClick: 'clicked', onMouseOver: 'hovered' })

export const Text = () => (
  <>
    <GlobalStyles />
    <Button {...eventsFromObject} text="Hello" />
  </>
)
