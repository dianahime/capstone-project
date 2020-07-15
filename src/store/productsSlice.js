import { createSlice } from '@reduxjs/toolkit'

const initialState = JSON.parse(localStorage.getItem('products')) || []

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productAdded(state, action) {
      state.push(action.payload)
    },
  },
})

export default productsSlice.reducer
export const { productAdded } = productsSlice.actions
