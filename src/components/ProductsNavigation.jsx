import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectors } from '../store/productsSlice'

export default function ProductsNavigation() {
  const archivedProducts = useSelector(selectors.archivedProducts)
  return (
    <NavigationStyled>
      <NavLinkStyled
        activeClassName={archivedProducts.length ? 'navigationLinkActive' : ''}
        className="navigationLink"
        exact to="/products"
      >
        Your Products
      </NavLinkStyled>
      {archivedProducts.length > 0 && (
        <>
          <span>|</span>
          <NavLinkStyled
            activeClassName="navigation--link__active"
            className="navigation--link"
            to='/products/archive'
          >
            Archive
          </NavLinkStyled>
        </>
      )}

    </NavigationStyled>
  )
}

const NavigationStyled = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2.2rem;
  font-weight: bold;
  padding: 0 40px;
  background-color: var(--neutral);
  
  span {
    font-size: 1.5rem;
  }
`
const NavLinkStyled = styled(NavLink)`
  color: var(--primary);
  font-size: 1.5rem;
  padding: 0 8px;
  &.${props => props.activeClassName} {
   
     color: var(--secondary);
     text-decoration: none;
    
  }
`