import React from 'react'
import ProductComment from './ProductComment'

export default {
  title: 'ProductComment',
  component: ProductComment,
}

const product = {
  id: '001',
  name: 'test product',
  date: '2020-05-27',
  month: 6,
  size: '',
  price: '',
  title: 'hello',
  comment: 'this is a test',
}

export const ProductCommentDefault = () => {
  return <ProductComment product={product}/>
}
