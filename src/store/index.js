import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { createProductsSlice } from './productsSlice'
import drawerReducer from './drawerSlice'
import undoable from 'redux-undo'
import localForage from 'localforage'
import { persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'products',
  storage: localForage,
}

export const createReducer = (initialState) => ({
  products: persistReducer(
    persistConfig,
    undoable(createProductsSlice(initialState && initialState.products).reducer)
  ),
  drawer: drawerReducer,
})

const store = configureStore({
  reducer: createReducer(),
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['persist/PERSIST'],
    },
  }),
})

export default store
