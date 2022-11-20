import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {IProduct} from '../../models/product';

interface ProductState {
  loading: boolean;
  error: string;
  products: IProduct[]
}

const initialState: ProductState = {
  loading: false,
  error: '',
  products:[]
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    fetching(state){
      state.loading = true;
    },
    fetchSuccess(state, action: PayloadAction<IProduct[]>){
      state.loading = false;
      state.products = action.payload;
      state.error = '' 
    },
    fetchError(state, action: PayloadAction<Error>){
      state.loading = false;
      state.error = action.payload.message
    }
  }
})

export const { fetching, fetchSuccess, fetchError } = productSlice.actions


export default productSlice.reducer