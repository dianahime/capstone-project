import React from 'react'
import Drawer from './components/Drawer'
import styled from 'styled-components'
import '@blueprintjs/core/lib/css/blueprint.css'
import { Route, Switch } from "react-router-dom";
import Dashboard from './components/Dashboard'
import NotFound from './components/NotFound'
import Navigation from './components/Navigation'
import ProductsPage from './components/ProductsPage'


function App() {
  return (
    <ContainerStyled>
      <main>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/products" component={ProductsPage}/>
          <Route component={NotFound} />
        </Switch>
      </main>
      <Drawer />
      <Navigation />
    </ContainerStyled>
  )
}

export default App

const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
