import React from 'react'
import { Popover, Position, Classes } from '@blueprintjs/core'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import {productsSortedNameAtoZ, productsSortedNameZtoA, productsSortedByRecentlyAdded, productsSortedBySoonToExpire} from '../store/productsSlice'

export default function SortPopover() {
  const dispatch = useDispatch()

  const handleRecentSort = () => {
    dispatch(productsSortedByRecentlyAdded())
  }
  const handleExpireSort = () => {
    dispatch(productsSortedBySoonToExpire())
  }
  const handleNameSortAtoZ = () => {
    dispatch(productsSortedNameAtoZ())
  }
  const handleNameSortZtoA = () => {
    dispatch(productsSortedNameZtoA())
  }

  return(
    <PopoverStyled usePortal={false} position={Position.LEFT_TOP} popoverClassName={Classes.POPOVER_DISMISS}>
      <ButtonStyled type="button" className="button">
       <IconStyled
         className="fas fa-sort-amount-down"
        aria-hidden="true"/>
    </ButtonStyled>
    <CardStyled>
      <div className="item" onClick={handleRecentSort}>
        <p>Recently added</p>
        <i className="fas fa-plus" aria-hidden="true" />
      </div>
      <div className="item" onClick={handleExpireSort}>
        <p>Soon to expire</p>
        <i className="fas fa-exclamation-circle" aria-hidden="true" />
      </div>
      <div className="item" onClick={handleNameSortAtoZ} >
        <p>Name A to Z</p>
        <i className="fas fa-sort-alpha-down" aria-hidden="true" />
      </div>
      <div className="item" onClick={handleNameSortZtoA} >
        <p>Name Z to A</p>
        <i className="fas fa-sort-alpha-down-alt" aria-hidden="true" />
      </div>
    </CardStyled>
  </PopoverStyled>
)
}

const PopoverStyled = styled(Popover)`
  height: 20px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  * {
    background: none;
  }

  .bp3-popover-target {
    height: 100%;
  }
`

const CardStyled = styled.div`
  background-color: white;
  padding: 10px;
  width: 170px;

  p {
    background-color: white;
    margin: 0;
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    color: black;
    padding: 5px 0;
    margin-right: 5px;
  }

  i {
    background-color: white;
  }
`

const ButtonStyled = styled.button`
  border: none;

  :focus {
    outline: none;
  }
`

const IconStyled = styled.i`
  font-size: 1.4rem;

`

