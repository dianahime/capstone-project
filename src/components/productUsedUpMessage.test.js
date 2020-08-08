import dayjs from 'dayjs'
import productUsedUpMessage from './productUsedUpMessage'

describe('productUsedUpMessage.test', () => {
  it('returns the correct message for used up on the same day', () => {
    const openingDate = dayjs('2020-06-01')
    const usedUpDate = dayjs('2020-06-01')

    const expected = 'Used up on the same day'
    const actual = productUsedUpMessage(openingDate, usedUpDate)

    expect(actual).toBe(expected)
  })

  it('returns the correct message for used up after one day', () => {
    const openingDate = dayjs('2020-06-01')
    const usedUpDate = dayjs('2020-06-02')

    const expected = 'Used up after 1 day'
    const actual = productUsedUpMessage(openingDate, usedUpDate)

    expect(actual).toBe(expected)
  })

  it('returns the correct message for used up in the first 2 months but not in the first 2 days', () => {
    const openingDate = dayjs('2020-06-01')
    const usedUpDate = dayjs('2020-06-20')

    const expected = `Used up after ${usedUpDate.diff(openingDate, 'day')} days`
    const actual = productUsedUpMessage(openingDate, usedUpDate)

    expect(actual).toBe(expected)
  })

  it('returns the correct message for used up after 2 months', () => {
    const openingDate = dayjs('2020-06-01')
    const usedUpDate = dayjs('2020-08-20')

    const expected = `Used up after ${usedUpDate.diff(
      openingDate,
      'month'
    )} months`
    const actual = productUsedUpMessage(openingDate, usedUpDate)

    expect(actual).toBe(expected)
  })

  it('throws and error when the used up date is before the opening date', () => {
    const openingDate = dayjs('2020-06-01')
    const usedUpDate = dayjs('2020-04-20')
    const error = new Error('Used up date can not be before opening date')

    expect(() => {
      productUsedUpMessage(openingDate, usedUpDate)
    }).toThrow(error)
  })
})
