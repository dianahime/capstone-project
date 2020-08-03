import dayjs from 'dayjs'

export const isProductExpired = (product) =>
  dayjs(product.date).add(product.month, 'M').isBefore(dayjs())
