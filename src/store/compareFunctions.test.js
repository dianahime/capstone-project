import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

import {
  sortProductsByCreatedAt,
  sortProductsByNameAtoZ,
  sortProductsByNameZtoA,
  sortProductsBySoonToExpire,
} from './compareFunctions'

describe('compareFunctions.test.js', () => {
  const products = [
    {
      name: 'Balea body lotion',
      date: '2020-06-01',
      month: 12,
      createdAt: '2020-07-23',
    },
    {
      name: 'Nivea face cream',
      date: '2020-02-01',
      month: 6,
      createdAt: '2020-07-19',
    },
    {
      name: 'Shower gel',
      date: '2020-07-01',
      month: 6,
      createdAt: '2020-07-20',
    },
  ]

  it('sorts products by creation date', () => {
    const expected = [
      products[0], products[2], products[1],
    ]
    const actual = products.sort(sortProductsByCreatedAt)
    expect(actual).toEqual(expected)
  })

  it('sorts products by soon to expire', () => {
    const expected = [
      products[1], products[2], products[0],
    ]
    const actual = products.sort(sortProductsBySoonToExpire)
    expect(actual).toEqual(expected)
  })

  it('sorts products by name A to Z', () => {
    const expected = [
      products[0], products[1], products[2],
    ]
    const actual = products.sort(sortProductsByNameAtoZ)
    expect(actual).toEqual(expected)
  })

  it('sorts products by name Z to A', () => {
    const expected = [
      products[2], products[1], products[0],
    ]
    const actual = products.sort(sortProductsByNameZtoA)
    expect(actual).toEqual(expected)
  })
})