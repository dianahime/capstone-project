import React from 'react'
import styled from 'styled-components'
import withProvider from '../../.storybook/Provider'
import MenuPopover from './MenuPopover.jsx'

export default {
  title: 'MenuPopover',
  component: MenuPopover,
  decorators: [withProvider()],
}

export const MenuPopoverDefault = () => (
  <ContainerStyled>
    <MenuPopover />
  </ContainerStyled>
)

const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 10px 20px 0 20px;
`
