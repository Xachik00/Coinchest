import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import {IScrolls} from '../../models/product';

interface ScrollsState {
  loading: boolean;
  error: string;
  scrolls: IScrolls[]
}

const initialState: ScrollsState = {
  loading: false,
  error: '',
  scrolls:[]
}

export const scrollsSlice = createSlice({
  name: 'scrolls',
  initialState,
  reducers: {
    scrollfetching(state){
      state.loading = true;
    },
    scrollfetchSuccess(state, action: PayloadAction<IScrolls[]>){
      state.loading = false;
      state.scrolls = action.payload
      state.error = ''
    },
    scrollfetchError(state, action: PayloadAction<Error>){
      state.loading = false;
      state.error = action.payload.message
    }
  }
})

export const { scrollfetching, scrollfetchSuccess, scrollfetchError } = scrollsSlice.actions


export default scrollsSlice.reducer
