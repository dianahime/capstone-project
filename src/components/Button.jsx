import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  isCancel: PropTypes.bool,
  isDelete: PropTypes.bool,
  className: PropTypes.string,
  testid: PropTypes.string,
  type: PropTypes.string,
}

export default function Button({
  text,
  onClick,
  disabled,
  isCancel,
  isDelete,
  className,
  testid,
  type,
}) {
  return (
    <ButtonStyled
      onClick={onClick}
      disabled={disabled}
      isCancel={isCancel}
      isDelete={isDelete}
      className={className}
      data-testid={testid}
      type={type}
    >
      {text}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  font-size: 1.2rem;
  background-color: var(--primary);
  color: var(--neutral);
  width: 100px;
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
  }


  ${(props) =>
    props.disabled &&
    css`
      background: white;
      color: var(--secondary);
      border: 1px solid var(--secondary);
      box-shadow: none;
    `}

  ${(props) =>
    props.isCancel &&
    css`
      background: white;
      color: var(--secondary);
    `}

    ${(props) =>
      props.isDelete &&
      css`
        background: var(--secondary);
        color: white;
      `}
`
