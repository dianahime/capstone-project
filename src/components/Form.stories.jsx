import React from 'react'
import withProvider from '../../.storybook/Provider'
import Form from './Form'

export default {
  title: 'Form',
  component: Form,
  decorators: [withProvider()],
}

export const FormDefault = () => <Form />
