import { createSlice } from '@reduxjs/toolkit'

const drawerSlice = createSlice({
  name: 'drawer',
  initialState: {
    isOpen: false,
    visibleComponent: 'Form',
  },
  reducers: {
    drawerIsOpened(state, action) {
      return {
        ...state,
        isOpen: action.payload,
      }
    },
    displayDrawerContent(state, action) {
      return {
        ...state,
        isOpen: true,
        visibleComponent: action.payload,
      }
    },
  },
})

export default drawerSlice.reducer
export const { drawerIsOpened, displayDrawerContent } = drawerSlice.actions
