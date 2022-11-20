import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {ITotal} from '../../models/product';

interface TotalState {
  loading: boolean;
  error: string;
  totals: ITotal[]
}

const initialState: TotalState = {
  loading: false,
  error: '',
  totals:[]
}

export const totalSlice = createSlice({
  name: 'totalss',
  initialState,
  reducers: {
    totalfetching(state){
      state.loading = true;
    },
    totalfetchSuccess(state, action: PayloadAction<ITotal[]>){
      state.loading = false;
      state.totals = action.payload
      state.error = ''
    },
    totalfetchError(state, action: PayloadAction<Error>){
      state.loading = false;
      state.error = action.payload.message
    }
  }
})

export const { totalfetching, totalfetchSuccess, totalfetchError } = totalSlice.actions


export default totalSlice.reducer
