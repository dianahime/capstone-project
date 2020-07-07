import React, { useState } from 'react'
import styled from 'styled-components'
import Button from './Button'

export default function Form({ onFormSubmit }) {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [month, setMonth] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (name && date && month) {
      onFormSubmit({ name, date, month })
      setName('')
      setDate('')
      setMonth('')
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
        required
        autoFocus
        placeholder="E.g. Nivea face cream"
      />
      <label htmlFor="date">2. When did you open the product?</label>
      <input
        onChange={(event) => setDate(event.target.value)}
        value={date}
        type="date"
        id="date"
        required
      />
      <label htmlFor="month">
        3. In how many months does the product expire?
      </label>
      <input
        onChange={(event) => setMonth(event.target.value)}
        value={month}
        type="number"
        min="1"
        id="month"
        required
        placeholder="E.g. 12"
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
  }

  label {
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 10px;
  }

  Button {
    align-self: center;
    margin: 10px 0;
    font-size: 1.2rem;
  }

  [type='text'] {
    width: 300px;
  }

  [type='number'],
  [type='date'] {
    width: 140px;
  }
`
