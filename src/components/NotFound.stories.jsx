import React from 'react'
import NotFound from './NotFound'
import withProvider from '../../.storybook/Provider'

export default {
  title: 'NotFound',
  component: NotFound,
  decorators: [withProvider()],
}

export const NotFoundDefault = () => <NotFound />
