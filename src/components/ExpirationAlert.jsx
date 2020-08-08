import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'
import Button from './Button'
import { useDispatch } from 'react-redux'
import { productArchived, productExpirationIgnored } from '../store/productsSlice'
import { AppToaster } from '../toaster'
import { ActionCreators } from 'redux-undo'

export default function ExpirationAlert({ product }) {
  const dispatch = useDispatch()
  const parsedDate = dayjs(product.date)
  const expirationDate = parsedDate.add(product.month, 'M').format('DD.MM.YYYY')

  const handleAddToArchive = () => {
    dispatch(productArchived(product))
    AppToaster.show({
      message: 'Product has been moved to archive.',
      className: 'toast',
      action: {
        text: 'Undo',
        onClick: () => dispatch(ActionCreators.undo()),
      },
    })
  }

  const handleIgnore = () => {
    dispatch(productExpirationIgnored(product))
  }

  return (
    <ExpirationAlertStyled>
      <p>{product.name} has expired:</p>
      <p>{expirationDate}</p>
      <ButtonContainer>
        <Button text="Ignore" isCancel onClick={handleIgnore}/>
        <Button
          text="Add to Archive"
          isDelete
          className="archiveButton"
          onClick={handleAddToArchive}
        />
      </ButtonContainer>
    </ExpirationAlertStyled>
  )
}

const ExpirationAlertStyled = styled.section`
  margin: 20px 0;
  padding: 20px;
  width: 300px;
  border-radius: 20px;
  color: var(--secondary);
  background: var(--secondaryLight);
  box-shadow: 10px 10px 20px 0 #c9d1d4, -10px -10px 20px 0 #fff;

  p {
    text-align: center;
    font-size: 1.3rem;
    word-break: break-word;
  }

  .archiveButton {
    width: 140px;
  }

  Button {
    font-size: 1rem;
  }
`
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
