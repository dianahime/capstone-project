import React from 'react'
import ProductEdit from './ProductEdit'
import withProvider from '../../.storybook/Provider'

export default {
  title: 'ProductEdit',
  component: ProductEdit,
  decorators: [withProvider()],
}

export const ProductEditDefault = () => <ProductEdit />
