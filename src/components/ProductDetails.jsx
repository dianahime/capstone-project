import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import MenuPopover from './MenuPopover'
import { selectors } from '../store/productsSlice'
import { useSelector } from 'react-redux'

export default function ProductDetails() {
  const product = useSelector(selectors.selectedProduct)

  if (!product) {
    return <></>
  }

  const parsedDate = dayjs(product.date)
  return (
    <ProductStyled data-testid="ProductDetails">
      <div className="titleContainer">
        <h1 className="name">{product.name}</h1>
        <MenuPopover />
      </div>
      <p className="opening-date">Opened: {parsedDate.format('DD.MM.YYYY')}</p>
      <p className="expiring-date">
        Expires: {parsedDate.add(product.month, 'M').format('DD.MM.YYYY')}
      </p>
      {product.size && <p className="size">Size: {product.size}</p>}
      {product.price && <p className="price">Price: {product.price}</p>}
    </ProductStyled>
  )
}

const ProductStyled = styled.section`
  background-color: var(--neutral);
  height: 100%;
  padding: 0 20px;
  h1 {
    word-break: break-word;
  }

  p {
    font-size: 1.2rem;
    margin: 10px 0;
  }

  .titleContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      margin: 0;
    }
  }

  .expiring-date {
    color: var(--secondary);
    margin-bottom: 20px;
  }
  .name {
    font-size: 1.8rem;
    width: 300px;
  }
`
