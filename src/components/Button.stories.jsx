import React from 'react'
import { actions } from '@storybook/addon-actions'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
}

const eventsFromObject = actions({ onClick: 'clicked', onMouseOver: 'hovered' })

export const Text = () => <Button {...eventsFromObject} text="Hello" />

export const LongText = () => (
  <Button {...eventsFromObject} text="I dont know this is long text" />
)
