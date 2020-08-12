import React from 'react'
import withProvider from '../../.storybook/Provider'
import Dashboard from './Dashboard'

export default {
  title: 'Dashboard',
  component: Dashboard,
  decorators: [withProvider()],
}

export const DashboardDefault = () => <Dashboard />
