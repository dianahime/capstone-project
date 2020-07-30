import React, { forwardRef } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { useDispatch } from 'react-redux'
import { productSelected } from '../store/productsSlice'
import { displayDrawerContent } from '../store/drawerSlice'

const ProductsListItem = forwardRef(({ product }, ref) => {
  const dispatch = useDispatch()
  const parsedDate = dayjs(product.date)

  const handleClick = () => {
    dispatch(productSelected(product.id))
    dispatch(displayDrawerContent('ProductDetails'))
  }

  return (
    <LiStyled onClick={handleClick} ref={ref}>
      <p className="name">{product.name}</p>
      <p className="expiring-date">
        Expires: {parsedDate.add(product.month, 'M').format('DD.MM.YYYY')}
      </p>
    </LiStyled>
  )
});

export default ProductsListItem

const LiStyled = styled.li`
  display: flex;
  align-self: center;
  flex-direction: column;
  list-style-type: none;
  padding: 20px;
  min-height: 100px;
  width: 300px;
  margin: 20px auto 0 auto;
  overflow: hidden;
  background: var(--neutral);
  border-radius: 20px;
  box-shadow: 10px 10px 20px 0 #c9d1d4, -10px -10px 20px 0 #fff;
  transition: box-shadow 0.2s linear;

  &:hover {
    box-shadow: 1px 1px 2px 0 #c9d1d4, -1px -1px 2px 0 #fff;
  }

  p {
    font-size: 1.1rem;
    margin: 0;
    word-break: break-word;
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
