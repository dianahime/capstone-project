import React from 'react'
import withProvider from '../../.storybook/Provider'
import NotFound from './NotFound'

export default {
  title: 'NotFound',
  component: NotFound,
  decorators: [withProvider()],
}

export const NotFoundDefault = () => <NotFound />
