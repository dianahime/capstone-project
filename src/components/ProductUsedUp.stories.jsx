import React from 'react'
import ProductUsedUp from './ProductUsedUp'
import withProvider from '../../.storybook/Provider'

export default {
  title: 'ProductUsedUp',
  component: ProductUsedUp,
  decorators: [withProvider()],
}
export const ProductUsedUpDefault = () => <ProductUsedUp />
