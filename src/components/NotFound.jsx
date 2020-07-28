import React from 'react'
import styled from 'styled-components'
import NotFoundLogo from '../images/notFound.svg'
import { useSelector } from 'react-redux'

export default function NotFound() {
  const isBlurred = useSelector((state) => state.drawer.isOpen)

  return (
    <NotFoundStyled className={isBlurred && 'blurred'}>
      <ImgStyled src={NotFoundLogo} />
      <p>Page not found.</p>
      <a href="/">Go back to Dashboard</a>
    </NotFoundStyled>
  )
}
const NotFoundStyled = styled.div`
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
  
  p {
    font-size: 1.5rem;
    text-align: center;
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