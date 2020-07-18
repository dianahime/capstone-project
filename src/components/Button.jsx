import React from 'react'
import styled, { css } from 'styled-components'

export default function Button({ text, onClick, disabled }) {
  return (
    <ButtonStyled onClick={onClick} disabled={disabled}>
      {text}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  background-color: var(--primary);
  color: var(--neutral);
  width: 100px;
  margin-top: 20px;
  padding: 10px 15px;
  border: none;
  border-radius: 10px;

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.disabled &&
    css`
      background: white;
      color: var(--secondary);
      border: 1px solid var(--secondary);
    `}

  :hover {
    background-color: var(--primaryLight);
    color: var(--primary);
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
  }
`
