import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import Button from './Button'
import InfoPopover from './InfoPopover'
import { useSelector, useDispatch, productSelected } from 'react-redux'
import { productAdded } from '../store/productsSlice'
import { drawerIsOpened } from '../store/drawerSlice'
import { v4 as uuid } from 'uuid'

export default function ProductDetails() {
  const product = useSelector((state) => state.products.selected)
  const dispatch = useDispatch()

  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [month, setMonth] = useState('')
  const [size, setSize] = useState('')
  const [price, setPrice] = useState('')

  const isDrawerOpen = useSelector((state) => state.drawer.isOpen)
  dispatch(productSelected(product))

  const currentDate = dayjs().format('YYYY-MM-DD')
  const resetForm = () => {
    setName('')
    setDate('')
    setMonth('')
    setSize('')
    setPrice('')
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    if (name && date && month) {
      dispatch(productAdded({ id: uuid(), name, date, month, size, price }))
      dispatch(drawerIsOpened(false))
      resetForm()
    }
  }
  useEffect(() => {
    !isDrawerOpen && resetForm()
  }, [isDrawerOpen])

  return (
    <FormStyled onSubmit={handleSubmit}>
      <label htmlFor="name">Product Name</label>
      <input
        onChange={(event) => setName(event.target.value)}
        value={product.name}
        type="text"
        id="name"
        maxLength="40"
        required
        autoFocus
        placeholder="E.g. Nivea face cream"
      />
      {name.length >= 40 && <div>Zu lang</div>}
      <label htmlFor="date">Product opened</label>
      <input
        onChange={(event) => setDate(event.target.value)}
        value={product.date}
        type="date"
        min="2018-01-01"
        max={currentDate}
        id="date"
        required
      />
      <label htmlFor="month">Months until expiration</label>
      <ContainerStyled>
        <input
          onChange={(event) => setMonth(event.target.value)}
          value={product.month}
          type="number"
          min="1"
          max="120"
          id="month"
          required
          placeholder="E.g. 12"
        />
        <InfoPopover />
      </ContainerStyled>
      <label htmlFor="Size">Size of the product (optional)</label>
      <input
        onChange={(event) => setSize(event.target.value)}
        value={product.size}
        maxLength="10"
        id="size"
        placeholder="50 ml"
      />
      <label htmlFor="Price">Price of the product (optional)</label>
      <input
        onChange={(event) => setPrice(event.target.value)}
        value={product.price}
        maxLength="10"
        id="price"
        placeholder="12€"
      />
      <Button text="Save" />
    </FormStyled>
  )
}

const FormStyled = styled.form`
  display: flex;
  flex-direction: column;

  input {
    font-size: 1.2rem;
    display: block;
    align-self: center;
    background-color: white;
    text-align: center;
    margin: 10px 0;
    padding: 5px;
    border: 1px solid var(--primary);
    border-radius: 20px;

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

  Button {
    align-self: center;
    font-size: 1.2rem;
  }

  #name {
    width: 300px;
  }

  #month {
    display: inline;
  }

  #month,
  #date,
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
