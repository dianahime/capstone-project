import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsSlice'
import drawerReducer from './drawerSlice'

const store = configureStore({
  reducer: {
    products: productsReducer,
    drawer: drawerReducer,
  },
})

store.subscribe(() => {
  const { products } = store.getState()
  localStorage.setItem('products', JSON.stringify(products))
})

export default store
