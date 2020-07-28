import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsSlice'
import drawerReducer from './drawerSlice'

export const reducer = {
  products: productsReducer,
  drawer: drawerReducer,
}

const store = configureStore({ reducer })

store.subscribe(() => {
  const { allProducts } = store.getState().products
  localStorage.setItem('products', JSON.stringify(allProducts))
})

export default store
