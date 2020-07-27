import { createSlice } from '@reduxjs/toolkit'
import dayjs from 'dayjs'

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

    productsSortedNameAtoZ(state) {
      return {
        ...state,
        allProducts: [...state.allProducts].sort((a,b) => a.name.localeCompare(b.name))
      }
    },

    productsSortedNameZtoA(state) {
      return {
        ...state,
        allProducts: [...state.allProducts].sort((a,b) => b.name.localeCompare(a.name))
      }
    },

    productsSortedByRecentlyAdded(state) {
      return {
        ...state,
        allProducts: [...state.allProducts].sort((a, b) => (dayjs(a.createdAt).isBefore(dayjs(b.createdAt)) ? 1 : -1))
      }
    },

    productsSortedBySoonToExpire(state) {
      return {
        ...state,
        allProducts: [...state.allProducts].sort((a,b) =>
          (dayjs(a.date).add(a.month, 'M').isAfter(dayjs(b.date).add(b.month, 'M')) ? 1 : -1))

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
  productsSortedNameAtoZ,
  productsSortedNameZtoA,
  productsSortedByRecentlyAdded,
  productsSortedBySoonToExpire,
} = productsSlice.actions
