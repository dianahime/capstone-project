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
  const { allProducts } = store.getState().products
  localStorage.setItem('products', JSON.stringify(allProducts))
})

export default store
