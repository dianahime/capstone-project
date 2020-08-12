import React from 'react'
import withProvider from '../../.storybook/Provider'
import ProductsList from './ProductsList'

export default {
  title: 'ProductsList',
  component: ProductsList,
  decorators: [withProvider()],
}

export const ProductsListDefault = () => <ProductsList />
