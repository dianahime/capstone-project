import React from 'react'
import styled from 'styled-components'

export default function Button({ text, onClick }) {
  return <ButtonStyled onClick={onClick}>{text}</ButtonStyled>
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

  :hover {
    background-color: var(--primaryLight);
    color: var(--primary);
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
  }
`
