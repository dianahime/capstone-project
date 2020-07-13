import React from 'react'
import styled from 'styled-components'

export default function DrawerToggle({ isCancel, onClick }) {
  return (
    <DrawerToggleStyled
      onClick={onClick}
      className={isCancel && 'cancelButton'}
    >
      <i
        className={isCancel ? 'fas fa-plus cancelIcon' : 'fas fa-plus'}
        data-testid="icon"
      ></i>
    </DrawerToggleStyled>
  )
}

const DrawerToggleStyled = styled.button`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  left: 50%;
  bottom: 10px;
  border: none;
  border-radius: 50px;
  background-color: var(--neutral);
  transform: translate(-50%, -50%);
  transition: 0.8s all ease-out;
  box-shadow: 5px 5px 10px #c9d1d4, -5px -5px 10px #ffffff;

  &:focus {
    outline: none;
  }
  i {
    font-size: 2.5rem;
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
