import React from 'react'
import ProductCommentEdit from './ProductCommentEdit'

export default {
  title: 'ProductCommentEdit',
  component: ProductCommentEdit,
}


export const ProductCommentEditDefault = () => {
  return <ProductCommentEdit setFormVisible={true}/>
}
