import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

export default function StepIndicator({ step }) {
  return (
    <StepIndicatorStyled>
      <Circle className={step === 1 && 'active'} />
      <Circle className={step === 2 && 'active'} />
      <Circle className={step === 3 && 'active'} />
      <Circle className={step === 4 && 'active'} />
    </StepIndicatorStyled>
  )
}

StepIndicator.propTypes = {
  step: PropTypes.number.isRequired,
}

const StepIndicatorStyled = styled.div`
  display: flex;
  margin: 40px 0;
`

const Circle = styled.div`
  width: 5px;
  height: 5px;
  margin: 0 3px;
  border-radius: 50%;
  background-color: var(--primary);

  &.active {
    background-color: var(--secondary);
  }
`
