import { createSlice } from '@reduxjs/toolkit'
import {
  sortProductsByCreatedAt,
  sortProductsByNameAtoZ,
  sortProductsByNameZtoA,
  sortProductsBySoonToExpire,
} from './compareFunctions'

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
        allProducts: [...state.allProducts].sort(sortProductsByNameAtoZ)
      }
    },

    productsSortedNameZtoA(state) {
      return {
        ...state,
        allProducts: [...state.allProducts].sort(sortProductsByNameZtoA)
      }
    },

    productsSortedByRecentlyAdded(state) {
      return {
        ...state,
        allProducts: [...state.allProducts].sort(sortProductsByCreatedAt)
      }
    },

    productsSortedBySoonToExpire(state) {
      return {
        ...state,
        allProducts: [...state.allProducts].sort(sortProductsBySoonToExpire)
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

export const selectors = {
  recentProducts: state => [...state.products.present.allProducts].sort(sortProductsByCreatedAt),
  soonToExpireProducts: state => [...state.products.present.allProducts].sort(sortProductsBySoonToExpire)
}