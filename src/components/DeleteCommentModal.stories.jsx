import React from 'react'
import DeleteCommentModal from './DeleteCommentModal'
import withProvider from '../../.storybook/Provider'

export default {
  title: 'DeleteCommentModal',
  component: DeleteCommentModal,
  decorators: [withProvider()],
}

export const DeleteCommentModalDefault = () => {
  return <DeleteCommentModal isOpen />
}
