import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectors } from '../store/productsSlice'
import Greeting from './Greeting'
import ProductsListItem from './ProductsListItem'

export default function ArchivedProductsList() {
  const archivedProducts = useSelector(selectors.archivedProducts)
  const isBlurred = useSelector((state) => state.drawer.isOpen)

  return archivedProducts.length ? (
    <UlStyled className={isBlurred ? 'blurred' : ''}>
      {archivedProducts &&
        archivedProducts.map(product => (
          <ProductsListItem key={product.id} product={product} />
        ))}
    </UlStyled>
  ) : (
    <Greeting isBlurred={isBlurred} />
  )
}

const UlStyled = styled.ul`
  margin-bottom: 100px;
  padding: 0;
  filter: blur(0);
  transition: 0.8s all ease-out;
  
  &.blurred {
    filter: blur(6px);
  }
`