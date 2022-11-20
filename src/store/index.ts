import { configureStore,combineReducers } from '@reduxjs/toolkit'
import productReducer from './slices/productSlice'
import scrollsReducer from './slices/scrollsSlice';
import totalReducer from './slices/totalSlice';

const rootReducer=combineReducers({
  productReducer,
  scrollsReducer,
  totalReducer
})

export function setupStore(){
  return configureStore({
    reducer:rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
