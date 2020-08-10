import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import MenuPopover from './MenuPopover'
import { productChanged, selectors } from '../store/productsSlice'
import { useDispatch, useSelector } from 'react-redux'
import { isProductExpired } from '../store/filterFunctions'
import StarRating from './StarRating'
import ProductCommentForm from './ProductCommentForm'
import ProductComment from './ProductComment'
import ProductUsedUp from './ProductUsedUp'

export default function ProductDetails() {
  const product = useSelector(selectors.selectedProduct)
  const dispatch = useDispatch()
  const handleRatingChange = (rating) =>
    dispatch(productChanged({ ...product, rating }))

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
        {isProductExpired(product) ? 'Expired: ' : 'Expires: '}
        {parsedDate.add(product.month, 'M').format('DD.MM.YYYY')}
      </p>
      <ProductUsedUp />

      {product.size && <p className="size">Size: {product.size}</p>}
      {product.price && <p className="price">Price: {product.price}</p>}

      <ContainerStyled>
        <StarRating rating={product.rating} onChange={handleRatingChange} />
        {product.comment ? (
          <ProductComment product={product} />
        ) : (
          <ProductCommentForm />
        )}
      </ContainerStyled>
    </ProductStyled>
  )
}

const ProductStyled = styled.section`
  background-color: var(--neutral);
  height: 100%;
  min-width: 340px;

  h1 {
    word-break: break-word;
  }

  p {
    font-size: 1.2rem;
  }

  .titleContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 10px 0 0;

    p {
      margin: 0;
    }
  }

  .expiring-date {
    color: var(--secondary);
  }

  .name {
    font-size: 1.8rem;
    width: 300px;
  }
`

const ContainerStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
