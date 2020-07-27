import React from 'react'
import styled from 'styled-components'
import ProductsListItem from './ProductsListItem'
import Greeting from './Greeting'
import { useSelector } from 'react-redux'
import SortPopover from './SortPopover'
import FlipMove from 'react-flip-move'

export default function ProductsList() {
  const products = useSelector((state) => state.products.present.allProducts)
  const isBlurred = useSelector((state) => state.drawer.isOpen)

  return products.length ? (
    <UlStyled data-testid="productsList" className={isBlurred ? 'blurred' : ''}>
      <h1>Your products</h1>
      <SortPopover />
      <FlipMove>
      {products &&
        products.map((product) => (
          <ProductsListItem key={product.id} product={product} />
        ))}
      </FlipMove>
    </UlStyled>
  ) : (
    <Greeting isBlurred={isBlurred} />
  )
}

const UlStyled = styled.ul`
  background-color: var(--neutral);
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
