import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Button from './Button'
import dayjs from 'dayjs'
import InfoPopover from './InfoPopover'
import { useDispatch, useSelector } from 'react-redux'
import { productAdded } from '../store/productsSlice'
import { drawerIsOpened } from '../store/drawerSlice'
import { v4 as uuid } from 'uuid'

export default function Form() {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [month, setMonth] = useState('')
  const [size, setSize] = useState('')
  const [price, setPrice] = useState('')

  const isDrawerOpen = useSelector((state) => state.drawer.isOpen)

  const dispatch = useDispatch()

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
      <label htmlFor="name">1. Add product name:</label>
      <input
        onChange={(event) => setName(event.target.value)}
        value={name}
        type="text"
        id="name"
        maxLength="40"
        autoFocus
        placeholder="E.g. Nivea face cream"
      />
      {name.length >= 40 && (
        <p>The product name can consist of up to 40 characters.</p>
      )}

      <label htmlFor="date">2. When did you open the product?</label>
      <input
        onChange={(event) => setDate(event.target.value)}
        value={date}
        type="date"
        min="2018-01-01"
        max={currentDate}
        id="date"
      />

      <label htmlFor="month">
        3. In how many months does the product expire?
      </label>
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

      <label htmlFor="Size">
        4. Size of the product <span>(optional)</span>
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
        5. Price of the product <span>(optional)</span>
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

      <Button
        text="Save"
        disabled={!(name && date && month)}
        className="save-button"
      />
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

  p {
    color: var(--secondary);
    padding: 5px 10px;
    margin: 0;
  }

  span {
    font-size: 1rem;
  }

  Button {
    align-self: center;
    font-size: 1.2rem;
  }

  .save-button {
    margin-top: 20px;
  }

  #name {
    width: 300px;
  }

  #date {
    width: 180px;
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
