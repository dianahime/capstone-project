import React from 'react'
import ProductsList from './ProductsList'
import GlobalStyles from '../GlobalStyles'

const products = [
  { name: 'test', date: '2020-06-06', month: 6 },
  { name: 'test2', date: '2020-07-06', month: 8 },
]
export default {
  title: 'ProductsList',
  component: ProductsList,
}
export const ProductsListDefault = () => (
  <>
    <GlobalStyles />
    <ProductsList products={products} />
  </>
)

export const ProductsListEmpty = () => (
  <>
    <GlobalStyles />
    <ProductsList products={[]} />
  </>
)
