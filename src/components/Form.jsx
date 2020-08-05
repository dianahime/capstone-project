import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Button from './Button'
import dayjs from 'dayjs'
import InfoPopover from './InfoPopover'
import { useDispatch, useSelector } from 'react-redux'
import { productAdded } from '../store/productsSlice'
import { drawerIsOpened } from '../store/drawerSlice'
import { v4 as uuid } from 'uuid'
import zenscroll from 'zenscroll'
import StepIndicator from './StepIndicator'
import ReactSwipe from 'react-swipe'
import { AppToaster } from '../toaster'
import { ActionCreators } from 'redux-undo'

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
  const handleSubmit = () => {
    if (name && date && month) {
      dispatch(
        productAdded({
          id: uuid(),
          createdAt: dayjs().format(),
          name,
          date,
          month,
          size,
          price,
        })
      )
      dispatch(drawerIsOpened(false))
      resetForm()
      zenscroll.toY(0, 1000)
      AppToaster.show({
        message: 'Product has been added.',
        className: 'toast',
        action: {
          text: 'Undo',
          onClick: () => dispatch(ActionCreators.undo()),
        },
      })
    }
  }

  useEffect(() => {
    !isDrawerOpen && resetForm()
  }, [isDrawerOpen])

  const swipe = useRef()

  const next = () => swipe.current.next()
  const back = () => swipe.current.prev()

  return (
    <FormStyled onSubmit={(event) => event.preventDefault()} data-testid="Form">
      <ReactSwipe ref={swipe} swipeOptions={{ continuous: false }}>
        <Card>
          <label htmlFor="name">Add product name:</label>
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

          <Button testid="nameNext" text="Next" onClick={next} />
          <StepIndicator step={1} />
        </Card>

        <Card>
          <label htmlFor="date">When did you open the product?</label>
          <input
            onChange={(event) => setDate(event.target.value)}
            value={date}
            type="date"
            min="2018-01-01"
            max={currentDate}
            id="date"
          />
          <div className="button-container">
            <Button text="Back" isCancel onClick={back} />
            <Button testid="dateNext" text="Next" onClick={next} />
          </div>
          <StepIndicator step={2} />
        </Card>

        <Card>
          <label htmlFor="month">
            In how many months does the product expire?
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
          <div className="button-container">
            <Button text="Back" isCancel onClick={back} />
            <Button testid="monthNext" text="Next" onClick={next} />
          </div>
          <StepIndicator step={3} />
        </Card>

        <Card>
          <label htmlFor="Size">
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
            <Button text="Back" isCancel onClick={back} />
            <Button
              testid="save"
              text="Save"
              type="submit"
              disabled={!(name && date && month)}
              onClick={handleSubmit}
            />
          </div>
          <StepIndicator step={4} />
        </Card>
      </ReactSwipe>
    </FormStyled>
  )
}

const FormStyled = styled.form`
  background-color: var(--neutral);
  height: 100%;

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
    color: var(--primary);

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
    padding: 0 10px;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;

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
