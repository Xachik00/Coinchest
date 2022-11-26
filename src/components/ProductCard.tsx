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
  let classPrice = 'text-lg font-bold absolute top-[100px] left-[4px] md:top-[132px] md:left-[22px] md:text-[16px]';
  let classPrice1 = 'text-lg font-bold absolute top-[70px] left-[30px] md:top-[102px] md:left-[43px] md:text-[25px]';
  let itemcheck = ' absolute top-[60px] right-[-15px]';

  const [select, setSelect] = useState<number | undefined>(1)

  return (
    <div className='flex   lg:w-[700px] justify-between scroll md:ml-4 stroke md:w-[780px]'>
      {
        products.map(product =>
          <div key={product.id} className={classProduct} onClick={() => { select !== product.id ? setSelect(product.id) : setSelect(0) }}>
            <div className=' w-[100px] h-[149px] md:w-[130px] md:h-[168px]'><img src={product?.sunduk_img} alt="" /></div>
            <p className={classPrice}> {product?.price_btc} </p>
            <p className={classPrice1}> ${product?.price} </p>
            <div className={select === product.id ? itemcheck : 'hidden'} >
              <img src="./image/icon.png" alt="" className='w-[40px] md:w-[60px]' />
            </div>
          </div>
        )}
    </div>)
}
