import React from 'react'
import styled from 'styled-components'
import DrawerToggle from './DrawerToggle'

export default function Drawer({ children, isOpen, setIsOpen }) {
  return (
    <>
      <DrawerToggle onClick={() => setIsOpen(!isOpen)} isCancel={isOpen} />
      <DrawerStyled className={isOpen && 'active'}>{children}</DrawerStyled>
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
  transition: 0.8s all ease-out;

  &.active {
    top: 100px;
    z-index: 1;
    border: 1px solid var(--primary);
    margin: 0 auto;
  }
`
