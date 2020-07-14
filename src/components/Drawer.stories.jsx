import React, { useState } from 'react'
import Drawer from './Drawer'
import From from './Form'

export default {
  title: 'Drawer',
  component: Drawer,
}

export const DrawerDefault = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
      <h1>Hello!</h1>
    </Drawer>
  )
}

export const DrawerForm = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
      <From />
    </Drawer>
  )
}
