import React, { useState } from 'react'

import AddButton from './AddButton'
import GlobalStyles from '../GlobalStyles'

export default {
  title: 'AddButton',
  component: AddButton,
}

export const DefaultAddButton = () => {
  const [isCancel, setIsCancel] = useState(false)
  return (
    <>
      <GlobalStyles />
      <AddButton onClick={() => setIsCancel(!isCancel)} isCancel={isCancel} />
    </>
  )
}
