import React, { useState } from 'react'
import DrawerToggle from './DrawerToggle'

export default {
  title: 'DrawerToggle',
  component: DrawerToggle,
}

export const DefaultDrawerToggle = () => {
  const [isCancel, setIsCancel] = useState(false)
  return (
    <DrawerToggle onClick={() => setIsCancel(!isCancel)} isCancel={isCancel} />
  )
}
