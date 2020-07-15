import React from 'react'
import Form from './components/Form'
import ProductsList from './components/ProductsList'
import Drawer from './components/Drawer'
import styled from 'styled-components'

function App() {
  return (
    <ContainerStyled>
      <ProductsList />
      <Drawer>
        <Form />
      </Drawer>
    </ContainerStyled>
  )
}

export default App

const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
