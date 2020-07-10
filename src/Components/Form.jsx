import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
import dayjs from 'dayjs'
import InfoPopover from './InfoPopover'

export default function Form({ onFormSubmit }) {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [month, setMonth] = useState('')
  const [size, setSize] = useState('')
  const [price, setPrice] = useState('')

  const currentDate = dayjs().format('YYYY-MM-DD')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (name && date && month) {
      onFormSubmit({ name, date, month, size, price })
      setName('')
      setDate('')
      setMonth('')
      setSize('')
      setPrice('')
    }
  }

  return (
    <FormStyled onSubmit={handleSubmit}>
      <label htmlFor="name">1. Add product name:</label>
      <input
        onChange={(event) => setName(event.target.value)}
        value={name}
        type="text"
        id="name"
        maxLength="40"
        required
        autoFocus
        placeholder="E.g. Nivea face cream"
      />
      {name.length >= 40 && <div>Zu lang</div>}
      <label htmlFor="date">2. When did you open the product?</label>
      <input
        onChange={(event) => setDate(event.target.value)}
        value={date}
        type="date"
        min="2018-01-01"
        max={currentDate}
        id="date"
        required
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
          required
          placeholder="E.g. 12"
        />
        <InfoPopover />
      </ContainerStyled>
      <label htmlFor="Size">4. Size of the product (optional)</label>
      <input
        onChange={(event) => setSize(event.target.value)}
        value={size}
        maxLength="10"
        id="size"
        placeholder="50 ml"
      />
      <label htmlFor="Price">5. Price of the product (optional)</label>
      <input
        onChange={(event) => setPrice(event.target.value)}
        value={price}
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
    font-size: 1.2rem;
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
