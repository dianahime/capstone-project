import React from 'react'
import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent } from '@testing-library/react'
import { render, screen } from '../test-utils'
import { useDispatch } from 'react-redux'
import { productChanged } from '../store/productsSlice'
import ProductCommentEdit from './ProductCommentEdit'

jest.mock('react-redux', () => {
  const dispatch = jest.fn()

  return {
    ...jest.requireActual('react-redux'),
    useDispatch: () => dispatch,
  }
})

describe('ProductCommentEdit.test.jsx', () => {
  beforeEach(() => {
    const setFormVisible = jest.fn()
    render(<ProductCommentEdit setFormVisible={setFormVisible} />, {
      products: PRODUCTS_MOCK_DATA,
    })
  })

  afterEach(() => {
    const dispatch = useDispatch()
    dispatch.mockClear()
  })

  const PRODUCTS_MOCK_DATA = {
    allProducts: [
      {
        id: '001',
        name: 'test product',
        date: '2020-05-27',
        month: 6,
        size: '',
        price: '',
        title: 'test',
        comment: 'this is a test product',
      },
    ],
    selected: '001',
  }

  it('renders the title of the product into the title input field', () => {
    const titleInput = screen.getByPlaceholderText('Title of your comment')
    expect(titleInput.value).toBe(PRODUCTS_MOCK_DATA.allProducts[0].title)
  })

  it('renders the comment of the product into the comment input field', () => {
    const commentInput = screen.getByPlaceholderText('Your comment')
    expect(commentInput.value).toBe(PRODUCTS_MOCK_DATA.allProducts[0].comment)
  })

  it('changes the value of the product title', () => {
    const titleInput = screen.getByPlaceholderText('Title of your comment')
    fireEvent.change(titleInput, { target: { value: 'Changed title' } })
    expect(titleInput.value).toBe('Changed title')
  })

  it('changes the value of the product comment', () => {
    const commentInput = screen.getByPlaceholderText('Your comment')
    fireEvent.change(commentInput, { target: { value: 'Changed comment' } })
    expect(commentInput.value).toBe('Changed comment')
  })

  it('opens DeleteCommentModal when delete button is clicked', () => {
    screen.getByText('Delete').click()
    expect(
      screen.getByText('Are you sure you want to delete this comment?')
    ).toBeInTheDocument()
  })

  it('dispatches on save button click and closes the form', () => {
    const dispatch = useDispatch()
    screen.getByText('Save').click()
    expect(dispatch.mock.calls).toEqual([
      [productChanged(PRODUCTS_MOCK_DATA.allProducts[0])],
    ])
  })
})
