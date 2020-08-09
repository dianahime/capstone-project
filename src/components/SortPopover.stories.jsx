import React from 'react'
import SortPopover from './SortPopover.jsx'
import withProvider from '../../.storybook/Provider'

export default {
  title: 'SortPopover',
  component: SortPopover,
  decorators: [withProvider()],
}

export const SortPopoverDefault = () => <SortPopover />
