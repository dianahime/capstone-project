import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'
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

  const [visibleCard, setVisibleCard] = useState('nameInput')

  const isDrawerOpen = useSelector((state) => state.drawer.isOpen)

  const dispatch = useDispatch()

  const currentDate = dayjs().format('YYYY-MM-DD')
  const resetForm = () => {
    setName('')
    setDate('')
    setMonth('')
    setSize('')
    setPrice('')
    setVisibleCard('nameInput')
  }
  const handleSubmit = () => {
    if (name && date && month) {
      dispatch(productAdded({ id: uuid(), createdAt: dayjs().format(), name, date, month, size, price }))
      setVisibleCard('success')
    }
  }

  const handleCloseClick = () => {
    dispatch(drawerIsOpened(false))
    resetForm()
  }

  useEffect(() => {
    !isDrawerOpen && resetForm()
  }, [isDrawerOpen])

  return (
    <FormStyled onSubmit={(event) => event.preventDefault()}>
      <Card isVisible={visibleCard === 'nameInput'}>
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

        <Button text="Next" onClick={() => setVisibleCard('dateInput')}/>
        <div className="step-indicator">
          <Circle className="active"/>
          <Circle/>
          <Circle/>
          <Circle/>
        </div>
      </Card>

      <Card isVisible={visibleCard === 'dateInput'}>
        <label htmlFor="date">2. When did you open the product?</label>
        <input
          onChange={(event) => setDate(event.target.value)}
          value={date}
          type="date"
          min="2018-01-01"
          max={currentDate}
          id="date"
        />
        <div className="button-container">
          <Button
            text="Back"
            isCancel
            onClick={() => setVisibleCard('nameInput')}
          />
          <Button text="Next" onClick={() => setVisibleCard('monthInput')}/>
        </div>
        <div className="step-indicator">
          <Circle/>
          <Circle className="active"/>
          <Circle/>
          <Circle/>
        </div>
      </Card>

      <Card isVisible={visibleCard === 'monthInput'}>
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
          <InfoPopover/>
        </ContainerStyled>
        {month > 120 && (
          <p>The product can expire up to 120 months after opening.</p>
        )}
        <div className="button-container">
          <Button
            text="Back"
            isCancel
            onClick={() => setVisibleCard('dateInput')}
          />
          <Button
            text="Next"
            onClick={() => setVisibleCard('sizeAndPriceInput')}
          />
        </div>
        <div className="step-indicator">
          <Circle/>
          <Circle/>
          <Circle className="active"/>
          <Circle/>
        </div>
      </Card>

      <Card isVisible={visibleCard === 'sizeAndPriceInput'}>
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
        <div className="button-container">
          <Button
            text="Back"
            isCancel
            onClick={() => setVisibleCard('monthInput')}
          />
          <Button
            text="Save"
            type="submit"
            disabled={!(name && date && month)}
            onClick={handleSubmit}
          />
        </div>
        <div className="step-indicator">
          <Circle/>
          <Circle/>
          <Circle/>
          <Circle className="active"/>
        </div>
      </Card>
      <Card isVisible={visibleCard === 'success'}>
        <h2>The product has been successfully saved.</h2>
        <i className="far fa-check-circle" aria-hidden="true"/>
        <Button text="Close" type="button" onClick={handleCloseClick}/>
      </Card>
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
    padding: 5px;
    border: 1px solid var(--primary);
    border-radius: 20px;
    margin: 10px 0 20px 0;

    &:hover {
      border-color: var(--secondary);
    }
    &:focus {
      outline: none;
    }
  }

  label {
    text-align: center;
    font-weight: bold;
    font-size: 1.3rem;
    margin-top: 10px;
    margin-bottom: 20px;
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
    padding-bottom: 10px;
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
  align-items: center;
  margin-left: 30px;
`

const Card = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;

  ${(props) =>
  props.isVisible &&
  css`
      display: flex;
    `}

  h2 {
    text-align: center;
  }
  .step-indicator {
    display: flex;
    margin: 40px 0;
  }

  .button-container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin-top: 10px;
  }

  .fa-check-circle {
    font-size: 2.5rem;
    color: var(--secondary);
    margin: 20px 0 40px 0;
  }
`
const Circle = styled.div`
  width: 5px;
  height: 5px;
  margin: 0 3px;
  border-radius: 50%;
  background-color: var(--primary);

  &.active {
    background-color: var(--secondary);
  }
`
