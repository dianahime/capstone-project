import React from 'react'
import Drawer from './Drawer'
import WithProvider from '../../.storybook/Provider'

export default {
  title: 'Drawer',
  component: Drawer,
  decorators: [WithProvider]
}

export const DrawerDefault = () => {
  return <Drawer />
}
