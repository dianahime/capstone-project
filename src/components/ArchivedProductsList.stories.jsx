import React from 'react'
import withProvider from '../../.storybook/Provider'
import ArchivedProductsList from './ArchivedProductsList'

const PRODUCTS_MOCK_DATA = {
  allProducts: [
    {
      id: '001',
      name: 'test product',
      date: '2020-05-27',
      month: 6,
      size: '',
      price: '',
      isArchived: true,
    },
  ],
  selected: '001',
}

export default {
  title: 'ArchivedProductsList',
  component: ArchivedProductsList,
  decorators: [withProvider({ products: PRODUCTS_MOCK_DATA })],
}

export const ArchivedProductsListDefault = () => <ArchivedProductsList />
