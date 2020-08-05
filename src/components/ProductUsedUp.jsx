import React, { useState } from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import { useDispatch, useSelector } from 'react-redux'
import { productChanged, selectors } from '../store/productsSlice'
import Button from './Button'
import { AppToaster } from '../toaster'
import { ActionCreators } from 'redux-undo'
import MoveToArchiveModal from './MoveToArchiveModal'

export default function ProductUsedUp() {
  const currentDate = dayjs().format('YYYY-MM-DD')
  const [isChecked, setIsChecked] = useState(false)
  const [date, setDate] = useState(currentDate)
  const [isMoveToArchiveOpen, setIsMoveToArhiveOpen] = useState(false)
  const product = useSelector(selectors.selectedProduct)
  const dispatch = useDispatch()
  const openingDate = dayjs(product.date)
  const usedUpDate = dayjs(product.usedUp)

  const handleSubmit = event => {
    event.preventDefault()
    dispatch(productChanged({
      ...product,
      usedUp: date,
    }))
    AppToaster.show({
      message: 'The used up date has been updated.',
      className: 'toast',
      action: {
        text: 'Undo',
        onClick: () => dispatch(ActionCreators.undo()),
      },
    })
    setIsMoveToArhiveOpen(true)
    setIsChecked(false)
  }

  return (
    <ProductUsedUpStyled>
      {product.usedUp ? (
          usedUpDate.diff(openingDate, 'month') > 1 ?
            <p> Used up after {usedUpDate.diff(openingDate, 'month')} months</p>
            : (
              <>
                <p>Used up after {usedUpDate.diff(openingDate, 'day')} days</p>
                <MoveToArchiveModal onClose={() => setIsMoveToArhiveOpen(false)} isOpen={isMoveToArchiveOpen}/>
              </>
            )
        )

        : (
          <>
            <label>
              Used Up
              <input
                type="checkbox"
                id="usedUp"
                onChange={() => setIsChecked(!isChecked)}
                checked={isChecked}
              />
            </label>

            {isChecked ? (
                <form onSubmit={handleSubmit}>
                  <i className="far fa-check-square"/>
                  <input
                    onChange={event => setDate(event.target.value)}
                    value={date}
                    type="date"
                    min="2018-01-01"
                    max={currentDate}
                  />
                  <Button
                    text="Save"
                  />
                </form>

              ) :
              <i className="far fa-square"/>
            }
          </>
        )
      }
    </ProductUsedUpStyled>
  )
}

const ProductUsedUpStyled = styled.div`
  display: flex;
  margin: 10px 0;
  align-items: center;
  height: 30px;
  
  label, i {
    font-size: 1.2rem;
    margin-right: 5px;
  }
  
  input[type='date'] {
    font-size: 1rem;
    width: 142px;
    border: 1px solid var(--primary);
    border-radius: 20px;
    color: var(--primary);
    margin-right: 5px;
    
    &:hover {
      border-color: var(--secondary);
    }
    
    &:focus {
      outline: none;
    }
  }
  
  input[type='checkbox'] {
    display: none;
  }
  
  Button {
    font-size: 1rem;
    width: 80px;
    padding: 5px;
  }
  
  form{
    display: inline;
  }
`