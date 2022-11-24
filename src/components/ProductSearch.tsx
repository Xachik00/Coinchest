import { useState, useEffect } from 'react'
import { useInput } from './../hooks/input';
import axios from './../axios/index';
import { IProduct } from './../models/product';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from '../hooks/debounce';

export function ProductSearch() {

  const input = useInput('');
  const debounced = useDebounce(input.value, 400);
  const [products, setProducts] = useState<IProduct[]>([]);
  const navigate = useNavigate();
  const [dropdown, setDropdown] = useState(false);
  const max = products.length - 1
  const random = Math.floor(Math.random() * max)

  async function searchProduct() {
    const response = await axios.get<IProduct[]>('products', { params: { limit: 5 } });
    setProducts(response.data);
  }

  useEffect(() => {
    if (debounced.length > 0) {
      searchProduct().then(() => setDropdown(true))
    } else {
      setDropdown(false)
    }
  }, [debounced]);


  let classInput = 'w-[264px] h-[36px] md:h-[49px] md:w-[222px] rounded-[8px] border-[1px] border-solid border-black text-black ml-[14px] text-[24px] p-2 pl-10';


  return (
    <div className='relative mb-4'>
      <i className="fa-solid fa-magnifying-glass text-[#F6E835] absolute text-[22px] top-3 left-6 stroke"></i>
      <input  className={classInput}  placeholder="Search" max={7} {...input}/>
      {
        dropdown &&
        <div className=' relative left-[250px] top-[-60px]'>
          <div className=' cursor-pointer text-[24px] ' key={products[random].id} onClick={() => navigate('/product/' + products[random].id)}>
            <img src="./image/message.png" alt="" />
            <p className=' text-black absolute top-0 left-6'>Current  price</p>
            <div className=' absolute stroke top-7 left-6'>$<span className=' text-[#FAE76F]'>{products[random]?.price}</span></div>
          </div>
        </div>
      }
    </div>
  )
}
