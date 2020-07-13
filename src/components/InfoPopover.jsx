import React from 'react'
import Popup from 'reactjs-popup'
import styled from 'styled-components'
import AfterOpen from '../images/12M_PAO_Symbol.svg'

export default function InfoPopover() {
  const Card = () => (
    <CardStyled className="card">
      <div className="content">
        The time in months when the product will remain in good condition after
        you have used the product for the first time. A symbol of an open cream
        jar is usually used and the time in months can be inside the symbol or
        alongside it.
        <ImgStyled src={AfterOpen} alt="" />
      </div>
    </CardStyled>
  )
  return (
    <Popup
      trigger={
        <ButtonStyled type="button" className="button">
          <i className="fa fa-question" aria-hidden="true"></i>
        </ButtonStyled>
      }
      position="left top"
      on="hover"
    >
      <Card />
    </Popup>
  )
}

const CardStyled = styled.div`
  div {
    background-color: white;
    padding: 5px;
  }
`

const ButtonStyled = styled.button`
  border: none;
  margin-left: 5px;

  :focus {
    outline: none;
  }
`
const ImgStyled = styled.img`
  display: block;
  margin: 0 auto;
  margin-top: 5px;
  width: 50px;
  background: white;
  stroke: var(--primary);
`
