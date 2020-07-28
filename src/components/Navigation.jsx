import React from "react";
import { NavLink } from "react-router-dom";
import styled from 'styled-components'

export default function Navigation() {
  return(
    <NavigationStyled>
      <NavLinkStyled
        activeClassName="navigationLinkActive"
        className="navigationLink"
        exact to="/"
      >
        <i className="fas fa-home" />
      </NavLinkStyled>
      <NavLinkStyled
        activeClassName="navigation--link__active"
        className="navigation--link"
        to="/products"
      >
        <i className="fas fa-list-ul" />
      </NavLinkStyled>
    </NavigationStyled>
  )
}

const NavigationStyled = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  font-size: 2.2rem;
  padding: 0 50px;
  background-color: var(--neutral);
`
const NavLinkStyled = styled(NavLink)`
  color: var(--primary);
  &.${props => props.activeClassName} {
    i {
     color: var(--secondary);
    }
  }
`