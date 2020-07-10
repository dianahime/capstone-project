import React, { useState } from 'react'

import DrawerToggle from './DrawerToggle'
import GlobalStyles from '../GlobalStyles'

export default {
  title: 'DrawerToggle',
  component: DrawerToggle,
}

export const DefaultDrawerToggle = () => {
  const [isCancel, setIsCancel] = useState(false)
  return (
    <>
      <GlobalStyles />
      <DrawerToggle
        onClick={() => setIsCancel(!isCancel)}
        isCancel={isCancel}
      />
    </>
  )
}
