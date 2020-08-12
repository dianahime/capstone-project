import React, { useState } from 'react'
import withProvider from '../../.storybook/Provider'
import DrawerToggle from './DrawerToggle'

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
