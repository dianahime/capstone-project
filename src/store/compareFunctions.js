import dayjs from 'dayjs'

export const sortProductsByCreatedAt = (a, b) => (dayjs(a.createdAt).isBefore(dayjs(b.createdAt)) ? 1 : -1)

export const sortProductsBySoonToExpire = (a, b) =>
  (dayjs(a.date).add(a.month, 'M').isAfter(dayjs(b.date).add(b.month, 'M')) ? 1 : -1)

export const sortProductsByNameAtoZ = (a,b) => a.name.localeCompare(b.name)

export const sortProductsByNameZtoA = (a,b) => b.name.localeCompare(a.name)