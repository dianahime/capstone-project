import React from 'react'
import DeleteModal from './DeleteModal.jsx'
import withProvider from '../../.storybook/Provider'

export default {
  title: 'DeleteModal',
  component: DeleteModal,
  decorators: [withProvider()],
}

export const DeleteModalDefault = () => {
  return <DeleteModal isOpen onClose={() => {}} />
}
