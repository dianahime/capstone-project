import { configureStore } from '@reduxjs/toolkit'
import { createProductsSlice } from './productsSlice'
import drawerReducer from './drawerSlice'
import undoable from 'redux-undo'

export const createReducer = (initialState) => ({
  products: undoable(
    createProductsSlice(initialState && initialState.products).reducer
  ),
  drawer: drawerReducer,
})

const store = configureStore({ reducer: createReducer() })

store.subscribe(() => {
  const { allProducts } = store.getState().products.present
  localStorage.setItem('products', JSON.stringify(allProducts))
})

export default store
