import React from 'react'
import styled from 'styled-components'
import ProductsListItem from './ProductsListItem'
import Greeting from './Greeting'

export default function ProductsList({ products, isBlurred }) {
  return products.length ? (
    <UlStyled data-testid="productsList" className={isBlurred ? 'blurred' : ''}>
      <h1>Your products</h1>
      {products.map((product) => (
        <ProductsListItem key={product.id} product={product} />
      ))}
    </UlStyled>
  ) : (
    <Greeting isBlurred={isBlurred} />
  )
}

const UlStyled = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 10%;
  margin-bottom: 100px;
  filter: blur(0);
  transition: 0.8s all ease-out;

  h1 {
    align-self: center;
  }

  &.blurred {
    filter: blur(6px);
  }
`