import React from 'react'
import ProductsNavigation from './ProductsNavigation'
import withProvider from '../../.storybook/Provider'

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
    {
      id: '002',
      name: 'second test product',
      date: '2020-05-27',
      month: 6,
      size: '',
      price: '',
      title: 'test title',
      comment: 'This is a test comment',
      isArchived: true,
    },
  ],
}

export default {
  title: 'ProductsNavigation',
  component: ProductsNavigation,
  decorators: [withProvider({ products: PRODUCTS_MOCK_DATA })],
}

export const ProductsNavigationDefault = () => <ProductsNavigation />
