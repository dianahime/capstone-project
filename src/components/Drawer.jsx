import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { Drawer as BluePrintDrawer, Position } from '@blueprintjs/core'
import Form from './Form'
import ProductEdit from './ProductEdit'
import ProductDetails from './ProductDetails'
import DrawerToggle from './DrawerToggle'

export default function Drawer() {
  const { isOpen, visibleComponent } = useSelector((state) => state.drawer)

  return (
    <>
      {!isOpen && <DrawerToggle />}
      <DrawerStyled
        data-testid="section"
        isOpen={isOpen}
        position={Position.BOTTOM}
        size={'70%'}
        autoFocus={false}
        lazy={false}
        hasBackdrop={false}
      >
        <DrawerToggle />
        <DrawerContainer>
          {visibleComponent === 'Form' && <Form />}
          {visibleComponent === 'ProductDetails' && <ProductDetails />}
          {visibleComponent === 'ProductEdit' && <ProductEdit />}
        </DrawerContainer>
      </DrawerStyled>
    </>
  )
}

const DrawerStyled = styled(BluePrintDrawer)`
  .bp3-drawer {
    background-color: var(--neutral);
  }
`
const DrawerContainer = styled.div`
  padding: 0 20px;
  max-width: 500px;
  height: 100%;
  overflow: auto;
  margin: 0 auto;
  scrollbar-width: none;

  ::-webkit-scrollbar {
    width: 0;
  }
`
