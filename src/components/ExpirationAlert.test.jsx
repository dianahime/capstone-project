import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '../test-utils'
import ExpirationAlert from './ExpirationAlert'
import dayjs from 'dayjs'
import { useDispatch } from 'react-redux'
import {
  productArchived,
  productExpirationIgnored,
} from '../store/productsSlice'

jest.mock('react-redux', () => {
  const dispatch = jest.fn()

  return {
    ...jest.requireActual('react-redux'),
    useDispatch: () => dispatch,
  }
})

describe('ExpirationAlert.test.jsx', () => {
  afterEach(() => {
    const dispatch = useDispatch()
    dispatch.mockClear()
  })

  const PRODUCT_MOCK_DATA = {
    id: '001',
    name: 'test product',
    date: '2020-05-27',
    month: 1,
  }

  it('renders p element with the name of the product', () => {
    render(<ExpirationAlert product={PRODUCT_MOCK_DATA} />)
    expect(
      screen.getByText(`${PRODUCT_MOCK_DATA.name} has expierd:`)
    ).toBeInTheDocument()
  })

  it('renders a p element with the expiration date', () => {
    render(<ExpirationAlert product={PRODUCT_MOCK_DATA} />)
    const expirationDate = dayjs(PRODUCT_MOCK_DATA.date)
      .add(PRODUCT_MOCK_DATA.month, 'M')
      .format('DD.MM.YYYY')
    expect(screen.getByText(expirationDate)).toBeInTheDocument()
  })

  it('dispatches an action when the ignore button is clicked', () => {
    const dispatch = useDispatch()
    render(<ExpirationAlert product={PRODUCT_MOCK_DATA} />)
    screen.getByText('Ignore').click()

    expect(dispatch.mock.calls).toEqual([
      [productExpirationIgnored(PRODUCT_MOCK_DATA)],
    ])
  })

  it('dispatches an action when the Add to Archive button is clicked', () => {
    const dispatch = useDispatch()
    render(<ExpirationAlert product={PRODUCT_MOCK_DATA} />)
    screen.getByText('Add to Archive').click()

    expect(dispatch.mock.calls).toEqual([[productArchived(PRODUCT_MOCK_DATA)]])
  })
})
