import React from 'react'
import styled from 'styled-components'
import SortPopover from './SortPopover.jsx'

export default {
  title: 'SortPopover',
  component: SortPopover,
}

export const SortPopoverDefault = () => (
  <ContainerStyled>
    <SortPopover />
  </ContainerStyled>
)

const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 10px 20px 0 20px;
`