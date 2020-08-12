import React from 'react'
import withProvider from '../../.storybook/Provider'
import MoveToArchiveModal from './MoveToArchiveModal'

export default {
  title: 'MoveToArchiveModal',
  component: MoveToArchiveModal,
  decorators: [withProvider()],
}

export const MoveToArchiveModalDefault = () => {
  return <MoveToArchiveModal isOpen onClose={() => {}} />
}
