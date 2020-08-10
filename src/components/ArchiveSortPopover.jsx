import React from 'react'
import PropTypes from 'prop-types'
import { Classes, Popover, Position } from '@blueprintjs/core'
import styled from 'styled-components'

ArchiveSortPopover.propTypes = {
  setIsAtoZ: PropTypes.func.isRequired,
  isAtoZ: PropTypes.bool.isRequired,
}

export default function ArchiveSortPopover({ setIsAtoZ, isAtoZ }) {
  const handleNameSortAtoZ = () => {
    setIsAtoZ(true)
  }
  const handleNameSortZtoA = () => {
    setIsAtoZ(false)
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
          className={isAtoZ ? 'active item' : 'item'}
          onClick={handleNameSortAtoZ}
        >
          <p>Name A to Z</p>
          <i className="fas fa-sort-alpha-down" aria-hidden="true" />
        </div>
        <div
          className={!isAtoZ ? 'active item' : 'item'}
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
  width: 150px;

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
