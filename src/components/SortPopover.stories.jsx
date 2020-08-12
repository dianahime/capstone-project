import React from 'react'
import withProvider from '../../.storybook/Provider'
import SortPopover from './SortPopover.jsx'

export default {
  title: 'SortPopover',
  component: SortPopover,
  decorators: [withProvider()],
}

export const SortPopoverDefault = () => <SortPopover />
