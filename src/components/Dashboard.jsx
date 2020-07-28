import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import ProductsListItem from './ProductsListItem'
import Greeting from './Greeting'
import { selectors } from '../store/productsSlice'

export default function Dashboard() {
  const products = useSelector((state) => state.products.allProducts)
  const isBlurred = useSelector((state) => state.drawer.isOpen)

  const recentProducts = useSelector(selectors.recentProducts).slice(0, 3)

  const soonToExpireProducts = useSelector(selectors.soonToExpireProducts).slice(0, 3)

  return (
    products.length ? (
      <DashboardStyled className={isBlurred ? 'blurred' : ''}>
        <h2>Recently added</h2>
        {products && recentProducts.map(product => (<ProductsListItem key={product.id} product={product}/>
        ))}
        <h2>Soon to expire</h2>
        {products && soonToExpireProducts.map(product => (<ProductsListItem key={product.id} product={product}/>
        ))}
      </DashboardStyled>
    ) : (
      <Greeting isBlurred={isBlurred}/>
    )
  )
}

const DashboardStyled = styled.div`
  margin-bottom: 80px;
  filter: blur(0);
  transition: 0.8s all ease-out;
  
  h2 {
    background-color: transparent; 
    font-size: 1.5rem;
  }
  
  h2:nth-of-type(2) {
  margin-top: 40px;
  }
  
  &.blurred {
    filter: blur(6px);
  }
`
