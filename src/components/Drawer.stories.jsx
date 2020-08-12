import React from 'react'
import withProvider from '../../.storybook/Provider'
import Drawer from './Drawer'

export default {
  title: 'Drawer',
  component: Drawer,
  decorators: [withProvider()],
}

export const DrawerDefault = () => {
  return <Drawer />
}
