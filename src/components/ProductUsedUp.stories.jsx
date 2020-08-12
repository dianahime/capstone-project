import React from 'react'
import withProvider from '../../.storybook/Provider'
import ProductUsedUp from './ProductUsedUp'

export default {
  title: 'ProductUsedUp',
  component: ProductUsedUp,
  decorators: [withProvider()],
}
export const ProductUsedUpDefault = () => <ProductUsedUp />
