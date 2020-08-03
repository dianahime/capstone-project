import { createSlice } from '@reduxjs/toolkit'
import {
  sortProductsByCreatedAt,
  sortProductsByNameAtoZ,
  sortProductsByNameZtoA,
  sortProductsBySoonToExpire,
} from './compareFunctions'
import { isProductExpired } from './filterFunctions'

const defaultState = {
  allProducts: JSON.parse(localStorage.getItem('products')) || [],
  selected: null,
  sorting: null,
}

export const createProductsSlice = (initialState) =>
  createSlice({
    name: 'products',
    initialState: initialState || defaultState,
    reducers: {
      productAdded(state, action) {
        return {
          ...state,
          allProducts: [action.payload, ...state.allProducts],
          sorting: null,
        }
      },

      productsSortedNameAtoZ(state) {
        return {
          ...state,
          allProducts: [...state.allProducts].sort(sortProductsByNameAtoZ),
          sorting: 'nameAtoZ',
        }
      },

      productsSortedNameZtoA(state) {
        return {
          ...state,
          allProducts: [...state.allProducts].sort(sortProductsByNameZtoA),
          sorting: 'nameZtoA',
        }
      },

      productsSortedByRecentlyAdded(state) {
        return {
          ...state,
          allProducts: [...state.allProducts].sort(sortProductsByCreatedAt),
          sorting: 'recentlyAdded',
        }
      },

      productsSortedBySoonToExpire(state) {
        return {
          ...state,
          allProducts: [...state.allProducts].sort(sortProductsBySoonToExpire),
          sorting: 'soonToExpire',
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

      productArchived(state, action) {
        return {
          ...state,
          allProducts: state.allProducts.map((product) =>
            product.id === action.payload.id
              ? { ...product, isArchived: true }
              : product
          ),
        }
      },

      productUnarchived(state, action) {
        return {
          ...state,
          allProducts: state.allProducts.map((product) =>
            product.id === action.payload.id
              ? { ...product, isArchived: false }
              : product
          ),
        }
      },

      productExpirationIgnored(state, action) {
        return {
          ...state,
          allProducts: state.allProducts.map((product) =>
            product.id === action.payload.id
              ? { ...product, isExpirationIgnored: true }
              : product
          ),
        }
      },
    },
  })

const productsSlice = createProductsSlice()

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
  productArchived,
  productUnarchived,
  productExpirationIgnored,
} = productsSlice.actions

export const selectors = {
  selectedProduct: (state) =>
    [...state.products.present.allProducts].find(
      (product) => product.id === state.products.present.selected
    ),
  products: (state) =>
    [...state.products.present.allProducts].filter(
      (product) => !product.isArchived
    ),
  archivedProducts: (state) =>
    [...state.products.present.allProducts].filter(
      (product) => product.isArchived
    ),
  recentProducts: (state) =>
    [...state.products.present.allProducts]
      .filter((product) => !product.isArchived)
      .sort(sortProductsByCreatedAt),
  soonToExpireProducts: (state) =>
    [...state.products.present.allProducts]
      .filter((product) => !product.isArchived && !isProductExpired(product))
      .sort(sortProductsBySoonToExpire),
  expiredProducts: (state) =>
    [...state.products.present.allProducts].filter(isProductExpired),
}
