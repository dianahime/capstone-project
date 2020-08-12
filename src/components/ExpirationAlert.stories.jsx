import React from 'react'
import withProvider from '../../.storybook/Provider'
import ExpirationAlert from './ExpirationAlert'

export default {
  title: 'ExpirationAlert',
  component: ExpirationAlert,
  decorators: [withProvider()],
}
const product = {
  name: 'test',
  date: '2020-05-01',
  month: 1,
}
export const ExpirationAlertDefault = () => (
  <ExpirationAlert product={product} />
)
