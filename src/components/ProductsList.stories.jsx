import React from 'react'
import ProductsList from './ProductsList'
import withProvider from '../../.storybook/Provider'

export default {
  title: 'ProductsList',
  component: ProductsList,
  decorators: [withProvider()],
}

export const ProductsListDefault = () => <ProductsList />
