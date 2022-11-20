import { Dispatch } from "@reduxjs/toolkit";
import  axios  from '../../axios';
import { fetching, fetchError, fetchSuccess } from "../slices/productSlice";
import { scrollfetching, scrollfetchError, scrollfetchSuccess } from "../slices/scrollsSlice";
import { totalfetching, totalfetchError, totalfetchSuccess } from "../slices/totalSlice";

export const  fetchProducts =  (_page=1, _limit=8)=>{
    return async (dispatch: Dispatch) => {
        try{
          dispatch(fetching());
          const response = await axios.get('products',{
           params: {

            _limit
           }
          });

          dispatch(fetchSuccess(
            response.data
          ))

        }catch(error){
          dispatch(fetchError(error as Error))
        }
    }
}
export const  fetchScrolls =  (_page=1, _limit=8)=>{
  return async (dispatch: Dispatch) => {
      try{
        dispatch(scrollfetching());
        const response = await axios.get('scrolls',{
         params: {
                 _limit
         }
        });

        dispatch(scrollfetchSuccess(
          response.data
        ))
      }catch(error){
        dispatch(scrollfetchError(error as Error))
      }
  }
}
export const  fetchTotal =  (_page=1, _limit=8)=>{
    return async (dispatch: Dispatch) => {
        try{
          dispatch(totalfetching());
          const response = await axios.get('productTotal',{
           params: {

            _limit
           }
          });

          dispatch(totalfetchSuccess(
            response.data
          ))

        }catch(error){
          dispatch(totalfetchError(error as Error))
        }
    }
}
