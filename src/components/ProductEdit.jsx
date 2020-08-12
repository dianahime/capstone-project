import React, { useState } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { useDispatch, useSelector } from 'react-redux'
import { ActionCreators } from 'redux-undo'
import { productChanged, selectors } from '../store/productsSlice'
import { displayDrawerContent } from '../store/drawerSlice'
import { AppToaster } from '../toaster'
import Button from './Button'
import InfoPopover from './InfoPopover'

export default function ProductEdit() {
  const product = useSelector(selectors.selectedProduct)
  const dispatch = useDispatch()

  const [name, setName] = useState(product.name)
  const [date, setDate] = useState(product.date)
  const [usedUpDate, setUsedUpDate] = useState(product.usedUp)
  const [month, setMonth] = useState(product.month)
  const [size, setSize] = useState(product.size)
  const [price, setPrice] = useState(product.price)

  const currentDate = dayjs().format('YYYY-MM-DD')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (name && date && month) {
      dispatch(
        productChanged({
          ...product,
          name,
          date,
          month,
          size,
          price,
          usedUp: usedUpDate,
        })
      )
      dispatch(displayDrawerContent('ProductDetails'))
      AppToaster.show({
        message: 'Product has been updated.',
        className: 'toast',
        action: {
          text: 'Undo',
          onClick: () => dispatch(ActionCreators.undo()),
        },
      })
    }
  }
  const handleCancelClick = () => {
    dispatch(displayDrawerContent('ProductDetails'))
  }

  return (
    <FormStyled onSubmit={handleSubmit} data-testid="ProductEdit">
      <label htmlFor="name">Product Name</label>
      <input
        onChange={(event) => setName(event.target.value)}
        value={name}
        type="text"
        id="name"
        maxLength="40"
        placeholder="E.g. Nivea face cream"
      />
      {name.length >= 40 && (
        <p>The product name can consist of up to 40 characters.</p>
      )}

      <label htmlFor="date">Product opened</label>
      <input
        onChange={(event) => setDate(event.target.value)}
        value={date}
        type="date"
        min={product.usedUp || '2018-01-01'}
        max={currentDate}
        id="date"
      />

      {product.usedUp && (
        <>
          <label htmlFor="usedUpDate">Product used up</label>
          <input
            onChange={(event) => setUsedUpDate(event.target.value)}
            value={usedUpDate}
            type="date"
            min={product.date}
            max={currentDate}
            id="usedUpDate"
          />
        </>
      )}

      <label htmlFor="month">Months until expiration</label>
      <ContainerStyled>
        <input
          onChange={(event) => setMonth(event.target.value)}
          value={month}
          type="number"
          min="1"
          max="120"
          id="month"
          placeholder="E.g. 12"
        />
        <InfoPopover />
      </ContainerStyled>
      {month > 120 && (
        <p>The product can expire up to 120 months after opening.</p>
      )}

      <label htmlFor="size">
        Size of the product <span>(optional)</span>
      </label>
      <input
        onChange={(event) => setSize(event.target.value)}
        value={size}
        maxLength="10"
        id="size"
        placeholder="50 ml"
      />
      {size.length >= 10 && (
        <p>The product size can consist of up to 10 characters.</p>
      )}

      <label htmlFor="Price">
        Price of the product <span>(optional)</span>
      </label>
      <input
        onChange={(event) => setPrice(event.target.value)}
        value={price}
        maxLength="10"
        id="price"
        placeholder="12€"
      />
      {price.length >= 10 && (
        <p>The product price can consist of up to 10 characters.</p>
      )}

      <div className="button-container">
        <Button
          text="Cancel"
          isCancel
          onClick={handleCancelClick}
          type="button"
        />
        <Button text="Save" />
      </div>
    </FormStyled>
  )
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px;
  color: var(--primary);
  background-color: var(--neutral);

  input {
    flex-shrink: 0;
    font-size: 1.2rem;
    display: block;
    align-self: center;
    background-color: white;
    text-align: center;
    margin: 10px 0;
    padding: 5px;
    border: 1px solid var(--primary);
    border-radius: 20px;
    color: var(--primary);

    &:hover {
      border-color: var(--secondary);
    }
    &:focus {
      outline: none;
    }
  }

  label {
    font-weight: bold;
    font-size: 1.3rem;
    margin-top: 10px;
  }

  p {
    color: var(--secondary);
    padding: 5px 10px;
    margin: 0;
    text-align: center;
  }

  span {
    font-size: 1rem;
  }

  Button {
    align-self: center;
    font-size: 1.2rem;
  }

  .button-container {
    display: flex;
    flex-grow: 1;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
  }

  #name {
    width: 300px;
  }

  #date,
  #usedUpDate {
    width: 180px;
    height: 30px;
  }

  #month,
  #size,
  #price {
    width: 140px;
  }
`
const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-left: 30px;
`
