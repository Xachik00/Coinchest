import { ProductSearch } from '../components/ProductSearch';
import { ProductCard } from '../components/ProductCard';
import { useState } from 'react'

interface btn{
    btnclick:boolean
    setBtnclick:(el:boolean)=>void
}
export default function Step1({btnclick,setBtnclick}:btn) {

    const [value,setValue]=useState('');
    const [value1,setValue1]=useState('');
    const price=(+value)*(+value1)    
    
    let classStep1 = ' w-[920px] h-[774px] bg-[#7A6DE6] ml-[20px] rounded-r-[20px] rounded-bl-[20px] border-[1px] border-dashed border-black';
    let classContSelect = ' w-[729px] h-[49px] flex text-white mt-[40px] justify-between';
    let classSelect = ' w-[133px] h-[49px] bg-[#F4BF4E] ml-[14px] rounded-[8px] text-[24px] stroke p-2'
    let classTarget = ' w-[680px] h-[75px] flex text-white ml-[36px] mt-[40px] justify-between items-center';
    let classHInt = ' absolute top-0 left-[25px] text-[24px]  text-black';
    let classHInt1 = ' absolute top-[30px] left-[25px] text-[24px] stroke text-[#FAE76F]';
    let classInput='absolute z-10 w-[160px] h-[49px]  border-none p-5 pr-10 top-[-25px] left-[-80px] text-[24px] rounded-[7px] '
    
    return (
        <div className={classStep1}>
            <h2 className='text-[36px] text-white stroke text-center mt-[30px]'>Step 1</h2>
            <div className=' w-[600px] h-[66px] text-white flex ml-[20px] mt-[38px] text-center'>
                <h2 className='text-[22px] mt-[5px]'>Choose a token</h2>
                <ProductSearch />
            </div>
            <div className='  h-[201px] text-white flex ml-[20px]  text-center mt-[49px] items-center'>
                <h2 className='text-[22px] w-[148px] text-end'>Select ammount</h2>
                <ProductCard />
            </div>
            <div className={classContSelect}>
                <h2 className='text-[22px] w-[181px] text-end'>Chest term</h2>
                <select className={classSelect} name="" id="">
                    <option value="">5 Year</option>
                    <option value="">4 Year</option>
                    <option value="">3 Year</option>
                    <option value="">2 Year</option>
                    <option value="">1 Year</option>
                </select>
                <h6 className='text-[16px] font-sans ml-[22px] w-[449px]'>At the end of the term, if the price does not rise to the
                    target,the chest will opens but the tokens will not be sold.</h6>
            </div>
            <div className={classTarget}>
                <h2 className=' text-[22px] '>Target price</h2>
                <div className=' relative   text-center text-white  stroke z-10' placeholder='saf'>
                    <input type="number" max={5} className={classInput+' bg-[#D9D9D9] '} value={value} onChange={(el)=>setValue(el.target.value)} placeholder='0' />
                    <p className=' absolute top-[-20px] left-[45px] text-[24px] z-20 '>$</p>
                    {
                        +value<0 ?
                        <p className=' w-[160px] h-[30px] bg-[#FF6161] absolute top-5 left-[-80px] text-[16px] stroke rounded-b-[7px]'>Error text</p>:<div></div>}
                </div>
                <h2 className=' text-[22px] '>or</h2>
                <div className=' relative text-center text-white  stroke'>
                    <input type="number" className={classInput} value={value1} onChange={(el)=>setValue1(el.target.value)} placeholder='0'/>
                    <p className=' absolute top-[-20px] left-[45px] text-[24px] z-20'>X</p>
                    {
                        +value1<0 ?
                        <p className=' w-[160px] h-[30px] bg-[#FF6161] absolute top-5 left-[-80px] text-[16px] stroke rounded-b-[7px]'>Error text</p>:<div></div>}
                </div>
                <div className=' relative'>
                    <img src="./image/hint.png" alt="" />
                    <p className={classHInt} >Profit</p>
                    <p className={classHInt1}><span className='text-white'>$</span>{+value<0||+value1<0?0:price}</p>
                </div>
            </div>
            <div className=' w-[305px] h-[58px] flex mt-[41px] ml-[595px] text-white'>
                <div className=' w-[173px] text-end'>
                    <p className=' stroke text-[28px]'>$10.5</p>
                    <p className='text-[16px]'>Commission free $0.5</p>
                </div>
                <button className=' relative ml-[20px] mt-2'>
                    <img src="./image/step.png" alt="" />
                    <p className=' absolute top-1 left-6 text-[23px] text-white stroke' onClick={()=>setBtnclick(!btnclick)}>Next {'>'}</p>
                </button>
            </div>
        </div>

    )
}

