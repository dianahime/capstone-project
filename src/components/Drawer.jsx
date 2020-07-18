import React from 'react'
import styled from 'styled-components'
import DrawerToggle from './DrawerToggle'
import Form from './Form'
import ProductDetails from './ProductDetails'
import { useSelector } from 'react-redux'

export default function Drawer() {
  const { isOpen, visibleComponent } = useSelector((state) => state.drawer)

  return (
    <>
      <DrawerToggle />
      <DrawerStyled data-testid="section" className={isOpen && 'active'}>
        {visibleComponent === 'Form' && <Form />}
        {visibleComponent === 'ProductDetails' && <ProductDetails />}
      </DrawerStyled>
    </>
  )
}

const DrawerStyled = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 100vh;
  height: 100%;
  width: 100%;
  max-width: 500px;
  padding: 10px;
  border: 1px solid transparent;
  transition: 0.8s all ease-out;

  &.active {
    top: 85px;
    z-index: 100;
    border: 1px solid var(--primary);
    margin: 0 auto;
  }
`
