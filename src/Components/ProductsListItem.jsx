import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

export default function ProductsListItem({ product }) {
  const parsedDate = dayjs(product.date)
  return (
    <LiStyled>
      <p className="name">{product.name}</p>
      <p className="opening-date">Opened: {parsedDate.format('DD.MM.YYYY')}</p>
      <p className="expiring-date">
        Expires: {parsedDate.add(product.month, 'M').format('DD.MM.YYYY')}
      </p>
    </LiStyled>
  )
}

const LiStyled = styled.li`
  list-style-type: none;
  height: 100px;
  width: 300px;

  p {
    margin: 5px;
    word-break: break-all;
  }

  .name {
    font-size: 1.2rem;
    font-weight: bold;
  }

  .expiring-date {
    color: var(--secondary);
  }
`
