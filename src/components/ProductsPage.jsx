import React from 'react'
import styled from 'styled-components'
import { Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectors } from '../store/productsSlice'
import ArchivedProductsList from './ArchivedProductsList'
import ProductsNavigation from './ProductsNavigation'
import ProductsList from './ProductsList'

export default function ProductsPage() {
  const isBlurred = useSelector((state) => state.drawer.isOpen)
  const products = useSelector(selectors.products)
  const archivedProducts = useSelector(selectors.archivedProducts)

  return (
    <ContainerStyled className={isBlurred && 'blurred'}>
      {products.length + archivedProducts.length ? (
        <ProductsNavigation />
      ) : null}
      <main>
        <Switch>
          <Route exact path="/products" component={ProductsList} />
          <Route path="/products/archive" component={ArchivedProductsList} />
        </Switch>
      </main>
    </ContainerStyled>
  )
}

const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  filter: blur(0);
  transition: 0.8s all ease-out;

  &.blurred {
    filter: blur(6px);
  }
`
