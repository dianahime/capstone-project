import React from 'react'
import Form from './Form'
import withProvider from '../../.storybook/Provider'

export default {
  title: 'Form',
  component: Form,
  decorators: [withProvider()],
}

export const FormDefault = () => <Form />
