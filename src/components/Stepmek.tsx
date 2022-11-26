import { ProductSearch } from './ProductSearch';
import { ProductCard } from './ProductCard';
import { useState } from 'react'

interface Btn {
    Step2: () => void;
}
export default function Stepmek({ Step2 }: Btn) {

    const [value, setValue] = useState('');
    const [value1, setValue1] = useState('');
    const price = (+value) * (+value1)

    let classStep1 = ' lg:max-w-[920px] md:h-[774px] bg-[#7A6DE6] ml-4 mr-4 lg:mr-0 lg:ml-5 md:rounded-r-[20px] rounded-br-[20px] rounded-bl-[20px] border-[1px] border-dashed border-black md:max-w-[992px] min-w-[288px] h-[825px]';
    let classContSelect = ' max-w-[729px] h-[49px] md:flex text-white mt-[40px] md:justify-between';
    let classSelect = ' w-[115px] h-[36px] md:w-[133px] md:h-[49px] bg-[#F4BF4E] ml-[14px] rounded-[8px] md:text-[24px] stroke p-2'
    let classTarget = ' md:w-[680px] h-[75px] md:flex text-white ml-5 mt-[70px] md:ml-[36px] md:mt-[40px] md:justify-between items-center';
    let classHInt = ' absolute top-0 left-[25px] text-[24px]  text-black';
    let classHInt1 = ' absolute top-[30px] left-[25px] text-[24px] stroke text-[#FAE76F]';
    let classInput = ' w-[120px] h-[36px] md:w-[160px] md:h-[49px]  border-none p-5 pr-10 text-[16px]  md:text-[24px] rounded-[7px] '

    return (
        <div className={classStep1}>
            <h2 className='md:text-[36px] text-white stroke text-center mt-[30px] text-[20px]'>Step 1</h2>
            <div className=' max-w-[600px] h-[66px] text-white md:flex ml-[20px] md:mt-[38px]  '>
                <h2 className='md:text-[22px] mt-[5px] text-[14px]'>Choose a token</h2>
                <ProductSearch />
            </div>
            <div className='  md:h-[201px] text-white md:flex ml-[20px]   mt-[49px] items-center'>
                <h2 className='text-[14px] md:text-[22px] md:max-w-[148px] md:text-end'>Select ammount</h2>
                <ProductCard />
            </div>
            <div className={classContSelect}>
                <h2 className=' ml-5 md:text-[22px] md:w-[281px] md:text-end'>Chest term</h2>
                <select className={classSelect} name="" id="">
                    <option value="">5 Year</option>
                    <option value="">4 Year</option>
                    <option value="">3 Year</option>
                    <option value="">2 Year</option>
                    <option value="">1 Year</option>
                </select>
                <h6 className=' text-[12px] md:text-[16px] font-sans ml-[22px] max-w-[449px]'>At the end of the term, if the price does not rise to the
                    target,the chest will opens but the tokens will not be sold.</h6>
            </div>
            <div className={classTarget}>
                <h2 className='md:text-[22px] '>Target price</h2>
                <div className=' flex w-[200px] md:w-[380px] justify-between items-center'>
                    <div className=' relative text-center text-white  stroke z-10 ' placeholder='saf'>
                        <input type="number" className={classInput + ' bg-[#D9D9D9] '} value={value} onChange={(el) => setValue(el.target.value)} placeholder='0' />
                        <p className=' absolute  left-[100px] text-[16px] top-[7px] md:left-[125px] md:text-[24px]  '>$</p>
                        {
                            +value < 0 ?
                                <p className=' w-[120px] md:w-[160px] h-[30px] bg-[#FF6161] absolute top-[35px] md:top-[45px]  text-[16px] stroke rounded-b-[7px] -z-10'>Error text</p> : <div></div>
                        }
                    </div>
                    <h2 className=' text-[14px] md:text-[22px] '>or</h2>
                    <div className=' relative text-center text-white  stroke z-10'>
                        <input type="number" className={classInput} value={value1} onChange={(el) => setValue1(el.target.value)} placeholder='0' />
                        <p className=' absolute  left-[100px] text-[16px] top-[7px] z-20 md:left-[125px] md:text-[24px] '>X</p>
                        {
                            +value1 < 0 ?
                                <p className=' w-[120px] md:w-[160px] h-[30px] bg-[#FF6161] absolute top-[35px] md:top-[45px] text-[16px] stroke rounded-b-[7px] -z-10'>Error text</p> : <div></div>}
                    </div>
                </div>
                <div className=' hidden relative md:flex'>
                    <img src="./image/hint.png" alt="" />
                    <p className={classHInt} >Profit</p>
                    <p className={classHInt1}><span className='text-white'>$</span>{+value < 0 || +value1 < 0 ? 0 : price}</p>
                </div>
                <div className=' flex relative md:hidden top-[30px] left-[120px] max-w-[100px]'>
                    <img src="./image/Polygon 5.png" alt="" />
                    <div className=' w-[158px] h-[40px] bg-white absolute top-4 left-[-59px] rounded-[6px] flex items-center text-center pl-4 text-[14px]'>
                    <p className={' text-black '} >Profit</p>
                    <p className={'stroke ml-4 text-[#FAE76F]'}><span className='text-white'>$</span>{+value < 0 || +value1 < 0 ? 0 : price}</p>
                    </div>
                </div>
            </div>
            <div className='   flex mt-[100px] md:mt-[41px] text-white justify-end'>
                <div className='text-end'>
                    <p className=' stroke text-[18px] md:text-[28px]'>$10.5</p>
                    <p className=' text-[14px] md:text-[16px]'>Commission free $0.5</p>
                </div>
                <button className=' relative ml-[20px] mt-2'>
                    <img src="./image/step.png" className=' max-w-[95px] md:w-[123px]' alt="" />
                    <p className=' absolute top-1 left-1 md:top-1 md:left-6 text-[16px] md:text-[23px] text-white stroke' onClick={Step2}>Next {'>'}</p>
                </button>
            </div>
        </div>

    )
}

