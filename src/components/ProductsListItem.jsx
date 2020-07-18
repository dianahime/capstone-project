import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { useDispatch } from 'react-redux'
import { productSelected } from '../store/productsSlice'
import { displayDrawerContent } from '../store/drawerSlice'

export default function ProductsListItem({ product }) {
  const dispatch = useDispatch()
  const parsedDate = dayjs(product.date)

  const handleClick = () => {
    dispatch(productSelected(product))
    dispatch(displayDrawerContent('ProductDetails'))
  }

  return (
    <LiStyled onClick={handleClick}>
      <p className="name">{product.name}</p>
      <p className="expiring-date">
        Expires: {parsedDate.add(product.month, 'M').format('DD.MM.YYYY')}
      </p>
    </LiStyled>
  )
}

const LiStyled = styled.li`
  display: flex;
  align-self: center;
  flex-direction: column;
  list-style-type: none;
  padding: 20px;
  min-height: 100px;
  width: 300px;
  margin-top: 20px;
  overflow: hidden;
  background: var(--white, #edf6f9);
  border-radius: 20px;
  box-shadow: 10px 10px 20px 0px #c9d1d4, -10px -10px 20px 0px #ffffff;

  p {
    font-size: 1.1rem;
    margin: 0;
    word-break: break-all;
  }

  p:first-of-type {
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .expiring-date {
    color: var(--secondary);
  }
`
