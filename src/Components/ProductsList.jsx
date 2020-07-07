import React from 'react'
import styled from 'styled-components'
import ProductsListItem from './ProductsListItem'
import EmptyLogo from '../images/empty.svg'

export default function ProductsList({ products }) {
  return products.length ? (
    <UlStyled>
      {products.map((product) => (
        <ProductsListItem key={product.name} product={product} />
      ))}
    </UlStyled>
  ) : (
    <ImgStyled src={EmptyLogo} />
  )
}

const UlStyled = styled.ul`
  padding: 0;
`

const ImgStyled = styled.img`
  width: 100%;
  height: auto;
  margin: 20px 0;
`
