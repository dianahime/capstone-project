import React, { useState } from 'react'
import Form from './components/Form'
import ProductsList from './components/ProductsList'
import Drawer from './components/Drawer'
import styled from 'styled-components'

function App() {
  const [products, setProducts] = useState([])
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  return (
    <ContainerStyled>
      <ProductsList isBlurred={isDrawerOpen} products={products} />
      <Drawer isOpen={isDrawerOpen} setIsOpen={setIsDrawerOpen}>
        <Form onFormSubmit={handleProducts} />
      </Drawer>
    </ContainerStyled>
  )
  function handleProducts(product) {
    const maxId = Math.max(...products.map((product) => product.id))
    product.id = maxId + 1
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
