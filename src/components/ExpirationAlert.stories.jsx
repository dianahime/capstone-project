import React from 'react'
import ExpirationAlert from './ExpirationAlert'

export default {
  title: 'ExpirationAlert',
  component: ExpirationAlert,
}
const product = {
  name: 'test',
  date: '2020-05-01',
  month: 1,
}
export const ExpirationAlertDefault = () => (
  <ExpirationAlert product={product} />
)
