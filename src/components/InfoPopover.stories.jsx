import React from 'react'
import styled from 'styled-components'
import InfoPopover from './InfoPopover.jsx'

export default {
  title: 'InfoPopover',
  component: InfoPopover,
}

export const InfoPopoverDefault = () => (
  <ContainerStyled>
    <InfoPopover />
  </ContainerStyled>
)

const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 10px 20px 0 20px;
`
