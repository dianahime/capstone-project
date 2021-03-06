import React from 'react'
import styled from 'styled-components'
import { Classes, Popover, Position } from '@blueprintjs/core'
import { useDispatch, useSelector } from 'react-redux'
import {
  productsSortedByRecentlyAdded,
  productsSortedBySoonToExpire,
  productsSortedNameAtoZ,
  productsSortedNameZtoA,
} from '../store/productsSlice'

export default function SortPopover() {
  const dispatch = useDispatch()
  const currentSorting = useSelector((state) => state.products.present.sorting)

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

  return (
    <PopoverStyled
      usePortal={false}
      position={Position.LEFT_TOP}
      popoverClassName={Classes.POPOVER_DISMISS}
    >
      <ButtonStyled type="button" className="button">
        <IconStyled className="fas fa-sort-amount-down" aria-hidden="true" />
      </ButtonStyled>
      <CardStyled>
        <div
          className={
            currentSorting === 'recentlyAdded' ? 'active item' : 'item'
          }
          onClick={handleRecentSort}
        >
          <p>Recently added</p>
          <i className="fas fa-plus" aria-hidden="true" />
        </div>
        <div
          className={currentSorting === 'soonToExpire' ? 'active item' : 'item'}
          onClick={handleExpireSort}
        >
          <p>Soon to expire</p>
          <i className="fas fa-exclamation-circle" aria-hidden="true" />
        </div>
        <div
          className={currentSorting === 'nameAtoZ' ? 'active item' : 'item'}
          onClick={handleNameSortAtoZ}
        >
          <p>Name A to Z</p>
          <i className="fas fa-sort-alpha-down" aria-hidden="true" />
        </div>
        <div
          className={currentSorting === 'nameZtoA' ? 'active item' : 'item'}
          onClick={handleNameSortZtoA}
        >
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
    margin: 0;
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--primary);
    padding: 5px 0;
    margin-right: 5px;

    &.active {
      color: var(--secondary);
    }
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
  margin-bottom: 5px;
  color: var(--primary);
`
