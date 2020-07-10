import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import ProductsList from './components/ProductsList'
import Drawer from './components/Drawer'
import styled from 'styled-components'
import { v4 as uuid } from 'uuid'

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [products, setProducts] = useState(
    () => JSON.parse(localStorage.getItem('products')) || []
  )

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products))
  }, [products])

  return (
    <ContainerStyled>
      <ProductsList isBlurred={isDrawerOpen} products={products} />

      <Drawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen}>
        <Form onFormSubmit={handleProducts} />
      </Drawer>
    </ContainerStyled>
  )

  function handleProducts(product) {
    product.id = uuid()
    setProducts([...products, product])
    setIsDrawerOpen(false)
  }
}

export default App

const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
