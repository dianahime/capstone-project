import React from 'react'
import withProvider from '../../.storybook/Provider'
import ProductDetails from './ProductDetails.jsx'

export default {
  title: 'ProductDetails',
  component: ProductDetails,
  decorators: [withProvider()],
}

export const ProductDetailsDefault = () => <ProductDetails />
