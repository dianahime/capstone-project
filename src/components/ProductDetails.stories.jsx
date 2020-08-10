import React from 'react'
import ProductDetails from './ProductDetails.jsx'
import withProvider from '../../.storybook/Provider'

export default {
  title: 'ProductDetails',
  component: ProductDetails,
  decorators: [withProvider()],
}

export const ProductDetailsDefault = () => <ProductDetails />
