import React from 'react'
import withProvider from '../../.storybook/Provider'
import DeleteCommentModal from './DeleteCommentModal'

export default {
  title: 'DeleteCommentModal',
  component: DeleteCommentModal,
  decorators: [withProvider()],
}

export const DeleteCommentModalDefault = () => {
  return <DeleteCommentModal isOpen />
}
