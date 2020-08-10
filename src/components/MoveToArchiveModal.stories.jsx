import React from 'react'
import MoveToArchiveModal from './MoveToArchiveModal'
import withProvider from '../../.storybook/Provider'

export default {
  title: 'MoveToArchiveModal',
  component: MoveToArchiveModal,
  decorators: [withProvider()],
}

export const MoveToArchiveModalDefault = () => {
  return <MoveToArchiveModal isOpen />
}
