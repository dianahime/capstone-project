import React from 'react'
import withProvider from '../../.storybook/Provider'
import ProductEdit from './ProductEdit'

export default {
  title: 'ProductEdit',
  component: ProductEdit,
  decorators: [withProvider()],
}

export const ProductEditDefault = () => <ProductEdit />
