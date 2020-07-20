import React from 'react'
import styled, { css } from 'styled-components'

export default function Button({
  text,
  onClick,
  disabled,
  isCancel,
  isDelete,
  className,
}) {
  return (
    <ButtonStyled
      onClick={onClick}
      disabled={disabled}
      isCancel={isCancel}
      isDelete={isDelete}
      className={className}
    >
      {text}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  background-color: var(--primary);
  color: var(--neutral);
  width: 100px;
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);

  &:focus {
    outline: none;
  }

  :hover {
    background-color: var(--primaryLight);
    color: var(--primary);
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.3);
  }

  ${(props) =>
    props.disabled &&
    css`
      background: white;
      color: var(--secondary);
      border: 1px solid var(--secondary);

      &:hover {
        background: white;
        color: var(--secondary);
        border: 1px solid var(--secondary);
      }
    `}

  ${(props) =>
    props.isCancel &&
    css`
      background: white;
      color: var(--secondary);

      &:hover {
        background: var(--secondary);
        color: white;
      }
    `}

    ${(props) =>
      props.isDelete &&
      css`
        background: var(--secondary);
        color: white;

        &:hover {
          background: white;
          color: var(--secondary);
        }
      `}
`
