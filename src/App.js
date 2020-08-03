import React from 'react'
import Drawer from './components/Drawer'
import styled from 'styled-components'
import '@blueprintjs/core/lib/css/blueprint.css'
import { Route, Switch } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import NotFound from './components/NotFound'
import Navigation from './components/Navigation'
import ProductsPage from './components/ProductsPage'
import { useSelector } from 'react-redux'
import { selectors } from './store/productsSlice'

function App() {
  const products = useSelector(selectors.products)
  const archivedProducts = useSelector(selectors.archivedProducts)
  return (
    <ContainerStyled>
      <main>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/products" component={ProductsPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Drawer />
      {products.length + archivedProducts.length > 0 && <Navigation />}
    </ContainerStyled>
  )
}

export default App

const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  margin: 0 auto;
  position: relative;
`
