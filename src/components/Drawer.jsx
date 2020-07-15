import React from 'react'
import styled from 'styled-components'
import DrawerToggle from './DrawerToggle'
import { useDispatch } from 'react-redux'
import { drawerIsOpened } from '../store/drawerSlice'
import { useSelector } from 'react-redux'

export default function Drawer({ children }) {
  const isOpen = useSelector((state) => state.drawer.isOpen)
  const dispatch = useDispatch()
  return (
    <>
      <DrawerToggle
        onClick={() => dispatch(drawerIsOpened(!isOpen))}
        isCancel={isOpen}
      />
      <DrawerStyled data-testid="section" className={isOpen && 'active'}>
        {children}
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
    top: 100px;
    z-index: 100;
    border: 1px solid var(--primary);
    margin: 0 auto;
  }
`
