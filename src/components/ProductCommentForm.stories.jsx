import React from 'react'
import ProductCommentForm from './ProductCommentForm'
import withProvider from '../../.storybook/Provider'

export default {
  title: 'ProductCommentForm',
  component: ProductCommentForm,
  decorators: [withProvider()],
}

export const ProductCommentDefault = () => <ProductCommentForm />
