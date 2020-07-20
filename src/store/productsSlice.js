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
    productChanged(state, action) {
      return {
        ...state,
        allProducts: state.allProducts.map((product) =>
          product.id === action.payload.id ? action.payload : product
        ),
      }
    },
    selectedProductRemoved(state) {
      return {
        ...state,
        selected: null,
        allProducts: state.allProducts.filter(
          (product) => product.id !== state.selected
        ),
      }
    },
  },
})

export default productsSlice.reducer
export const {
  productAdded,
  productSelected,
  productChanged,
  selectedProductRemoved,
} = productsSlice.actions
