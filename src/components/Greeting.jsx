import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import EmptyLogo from '../images/empty.svg'

export default function Greeting() {
  const isBlurred = useSelector((state) => state.drawer.isOpen)

  return (
    <GreetingStyled data-testid="greeting" className={isBlurred && 'blurred'}>
      <ImgStyled src={EmptyLogo} />
      <Message>Click on the plus icon to add a product.</Message>
    </GreetingStyled>
  )
}

const GreetingStyled = styled.div`
  background-color: var(--neutral);
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  filter: blur(0);
  transition: 0.8s all ease-out;

  &.blurred {
    filter: blur(6px);
  }
`
const ImgStyled = styled.img`
  display: flex;
  width: 320px;
  height: auto;
  margin: 10% 10%;
  padding: 20px 0;
  align-self: center;
`
const Message = styled.p`
  display: flex;
  font-size: 1.5rem;
  text-align: center;
  align-self: center;
`
