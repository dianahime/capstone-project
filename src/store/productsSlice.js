import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  allProducts: JSON.parse(localStorage.getItem('products')) || [],
  selected: null,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    productAdded(state, action) {
      return {
        ...state,
        allProducts: [...state.allProducts, action.payload],
      }
    },
    productSelected(state, action) {
      return {
        ...state,
        selected: action.payload,
      }
    },
  },
})

export default productsSlice.reducer
export const { productAdded, productSelected } = productsSlice.actions
