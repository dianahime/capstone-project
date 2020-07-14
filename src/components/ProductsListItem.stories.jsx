import React from 'react'
import ProductsListItem from './ProductsListItem'

const product = { name: 'test', date: '2020-06-06', month: 6 }

export default {
  title: 'ProductsListItem',
  component: ProductsListItem,
}
export const ProductsListItemDefault = () => (
  <ProductsListItem product={product} />
)
