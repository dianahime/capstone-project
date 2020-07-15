import { createSlice } from '@reduxjs/toolkit'

const drawerSlice = createSlice({
  name: 'drawer',
  initialState: {
    isOpen: false,
  },
  reducers: {
    drawerIsOpened(state, action) {
      return {
        ...state,
        isOpen: action.payload,
      }
    },
  },
})

export default drawerSlice.reducer
export const { drawerIsOpened } = drawerSlice.actions
