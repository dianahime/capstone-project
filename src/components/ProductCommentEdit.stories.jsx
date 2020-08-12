import React from 'react'
import withProvider from '../../.storybook/Provider'
import ProductCommentEdit from './ProductCommentEdit'

const PRODUCTS_MOCK_DATA = {
  allProducts: [
    {
      id: '001',
      name: 'test product',
      date: '2020-05-27',
      month: 6,
      size: '',
      price: '',
      title: 'test title',
      comment: 'This is a test comment',
    },
  ],
  selected: '001',
}

export default {
  title: 'ProductCommentEdit',
  component: ProductCommentEdit,
  decorators: [withProvider({ products: PRODUCTS_MOCK_DATA })],
}

export const ProductCommentEditDefault = () => {
  return <ProductCommentEdit setFormVisible={true} />
}
