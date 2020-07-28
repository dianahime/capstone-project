import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { drawerIsOpened, displayDrawerContent } from '../store/drawerSlice'

export default function DrawerToggle() {
  const isDrawerOpen = useSelector((state) => state.drawer.isOpen)
  const dispatch = useDispatch()

  const handleToggle = () => {
    if (isDrawerOpen) {
      dispatch(drawerIsOpened(false))
    } else {
      dispatch(displayDrawerContent('Form'))
    }
  }

  return (
    <DrawerToggleStyled
      onClick={handleToggle}
      className={isDrawerOpen && 'cancelButton'}
    >
      <i
        className={isDrawerOpen ? 'fas fa-plus cancelIcon' : 'fas fa-plus'}
        data-testid="icon"
      />
    </DrawerToggleStyled>
  )
}

const DrawerToggleStyled = styled.button`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  left: 50%;
  bottom: -5px;
  border: none;
  border-radius: 50px;
  background-color: var(--neutral);
  transform: translate(-50%, -50%);
  transition: 0.8s all ease-out;
  box-shadow: 5px 5px 10px #c9d1d4, -5px -5px 10px #ffffff;
  z-index: 40;

  &:focus {
    outline: none;
  }
  i {
    font-size: 2.7rem;
    transition: 0.5s all ease-out;
  }

  .cancelIcon {
    color: var(--secondary);
    transform: rotate(405deg);
  }

  &.cancelButton {
    bottom: 83vh;
  }
`
