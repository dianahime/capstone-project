import { configureStore } from '@reduxjs/toolkit'
import productsReducer from './productsSlice'
import drawerReducer from './drawerSlice'
import undoable from 'redux-undo';

export const reducer = {
  products: undoable(productsReducer),
  drawer: drawerReducer,
}

const store = configureStore({ reducer })

store.subscribe(() => {
  const { allProducts } = store.getState().products.present
  localStorage.setItem('products', JSON.stringify(allProducts))
})

export default store
