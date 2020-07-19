import React from 'react'
import Popup from 'reactjs-popup'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { displayDrawerContent } from '../store/drawerSlice'
import DeleteModal from './DeleteModal'

export default function InfoPopover() {
  const dispatch = useDispatch()

  const handleEditClick = () => {
    dispatch(displayDrawerContent('ProductEdit'))
  }

  const Card = () => (
    <CardStyled className="card">
      <div className="content">
        <div className="item" onClick={handleEditClick}>
          <p>Edit</p>
          <i className="fas fa-pen" />
        </div>
        <DeleteModal />
      </div>
    </CardStyled>
  )
  return (
    <Popup
      contentStyle={{ width: '120px' }}
      trigger={
        <ButtonStyled type="button" className="button">
          <IconStyled
            className="fa fa-ellipsis-v"
            aria-hidden="true"
          ></IconStyled>
        </ButtonStyled>
      }
      position="left top"
      on="hover"
      closeOnDocumentClick
    >
      <Card />
    </Popup>
  )
}

const CardStyled = styled.div`
  .content {
    background-color: white;
    padding: 5px;
  }

  p {
    background-color: white;
    margin: 0;
  }

  .item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    color: black;
  }

  .delete {
    padding-top: 5px;
    color: var(--secondary);
  }

  i {
    background-color: white;
  }
`

const ButtonStyled = styled.button`
  border: none;
  margin-left: 5px;

  :focus {
    outline: none;
  }
`

const IconStyled = styled.i`
  font-size: 1.2rem;
`
