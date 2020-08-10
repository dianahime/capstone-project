import React from 'react'
import Dashboard from './Dashboard'
import withProvider from '../../.storybook/Provider'

export default {
  title: 'Dashboard',
  component: Dashboard,
  decorators: [withProvider()],
}

export const DashboardDefault = () => <Dashboard />
