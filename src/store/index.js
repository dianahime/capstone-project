import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import undoable from 'redux-undo'
import localForage from 'localforage'
import { createProductsSlice } from './productsSlice'
import drawerReducer from './drawerSlice'

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
