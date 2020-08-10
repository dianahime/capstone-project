import React from 'react'
import styled from 'styled-components'
import { Spinner } from '@blueprintjs/core'

export default function LoadingPage() {
  return (
    <LoadingPageStyled>
      <Spinner size={Spinner.SIZE_LARGE} />
    </LoadingPageStyled>
  )
}

const LoadingPageStyled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
