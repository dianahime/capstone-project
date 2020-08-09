import React, { useState } from 'react'
import DrawerToggle from './DrawerToggle'
import withProvider from '../../.storybook/Provider'

export default {
  title: 'DrawerToggle',
  component: DrawerToggle,
  decorators: [withProvider()],
}

export const DefaultDrawerToggle = () => {
  const [isCancel, setIsCancel] = useState(false)

  return (
    <DrawerToggle onClick={() => setIsCancel(!isCancel)} isCancel={isCancel} />
  )
}
