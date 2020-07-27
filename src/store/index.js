import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsSlice'
import drawerReducer from './drawerSlice'
import undoable from 'redux-undo';

const store = configureStore({
  reducer: {
    products: undoable(productsReducer),
    drawer: drawerReducer,
  },
})

store.subscribe(() => {
  const { allProducts } = store.getState().products.present
  localStorage.setItem('products', JSON.stringify(allProducts))
})

export default store
