import { useState, useEffect } from 'react';
import { fetchProducts } from '../store/actions/productsActions'
import { useAppSelector, useAppDispatch } from '../hooks/redux'

export function ProductCard() {

  const { products } = useAppSelector(state => state.productReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  let classProduct = 'relative border rounded-md  hover:transition-all cursor-pointer mr-5';
  let classPrice = 'text-lg font-bold absolute top-[132px] left-[22px] text-[16px]';
  let classPrice1 = 'text-lg font-bold absolute top-[102px] left-[43px] text-[25px]';
  let itemcheck = ' absolute top-[60px] right-[-15px]';

  const [select, setSelect] = useState<number | undefined>(1)

  return (
    <div className='flex   w-[700px] justify-between scroll ml-4 stroke'>
      {
        products.map(product =>
          <div className={classProduct} onClick={() => { select !== product.id ? setSelect(product.id) : setSelect(0) }}>
            <div className='w-[130px] h-[168px]'><img src={product?.sunduk_img} alt="" /></div>
            <p className={classPrice}> {product?.price_btc} </p>
            <p className={classPrice1}> ${product?.price} </p>
            <div className={select === product.id ? itemcheck : 'hidden'} >
              <img src="./image/icon.png" alt="" />
            </div>
          </div>
        )}
    </div>)
}
