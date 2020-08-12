import React from 'react'
import withProvider from '../../.storybook/Provider'
import DeleteModal from './DeleteModal.jsx'

export default {
  title: 'DeleteModal',
  component: DeleteModal,
  decorators: [withProvider()],
}

export const DeleteModalDefault = () => {
  return <DeleteModal isOpen onClose={() => {}} />
}
