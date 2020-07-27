import React from 'react'
import { Popover, Position } from '@blueprintjs/core'
import styled from 'styled-components'
import AfterOpen from '../images/12M_PAO_Symbol.svg'

export default function InfoPopover() {
  return (
    <PopoverStyled usePortal={false} position={Position.LEFT_TOP}>
      <ButtonStyled type="button" className="button">
        <i className="fa fa-question" aria-hidden="true"></i>
      </ButtonStyled>
      <CardStyled>
        The time in months when the product will remain in good condition after
        you have used the product for the first time. A symbol of an open cream
        jar is usually used and the time in months can be inside the symbol or
        alongside it.
        <ImgStyled src={AfterOpen} alt="" />
      </CardStyled>
    </PopoverStyled>
  )
}

const PopoverStyled = styled(Popover)`
  margin-left: 10px;
  
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
  max-width: 220px;
`

const ButtonStyled = styled.button`
  border: none;
  padding: 0;
  height: 100%;
  :focus {
    outline: none;
  }
`
const ImgStyled = styled.img`
  display: block;
  margin: 5px auto 0 auto;
  width: 50px;
  stroke: var(--primary);
`
