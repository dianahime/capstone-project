import React from 'react'
import Drawer from './Drawer'
import withProvider from '../../.storybook/Provider'

export default {
  title: 'Drawer',
  component: Drawer,
  decorators: [withProvider()],
}

export const DrawerDefault = () => {
  return <Drawer />
}
