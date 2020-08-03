import React from 'react'
import styled from 'styled-components'
import DrawerToggle from './DrawerToggle'
import Form from './Form'
import ProductDetails from './ProductDetails'
import ProductEdit from './ProductEdit'
import { useSelector } from 'react-redux'
import { Drawer as BluePrintDrawer, Position } from '@blueprintjs/core'

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
  max-width: 500px;
  overflow: scroll;
  margin: 0 auto;
`
