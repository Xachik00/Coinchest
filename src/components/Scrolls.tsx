import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { fetchScrolls } from '../store/actions/productsActions'

export default function Scrolls() {

    const { scrolls } = useAppSelector(state => state.scrollsReducer)
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(fetchScrolls());
    }, []);

    return (
        <div className=' lg:mt-[52px] md:mt-[762px] mx-auto mt-[700px]'>
            <div className=' relative'>
                <img src="./image/group_.png" alt="" />
                <h2 className='text-[28px] text-white font-bold absolute left-[20px] top-[6px]'>Scrolls</h2>
            </div>
            <p className=' lg:w-[920px] ml-5 mt-8 md:text-[20px] tracking-[1px] md:w-[992px] w-[288px] text-[14px]'>At Coinchest we try to find the best projects in cryptocurrency sphere,
                which tokens can be hidden gems for an investors. Bellow few of them.</p>
            <div className=' flex lg:w-[920px] h-[200px] ml-[20px]  scroll1 md:w-[992px] w-[288px]'>
                {
                    scrolls.map(scroll =>
                        <div key={scroll.id} className=' relative border rounded-md  hover:transition-all cursor-pointer mr-[200px] text-[20px]  stroke'>
                            <div className='  w-[168px] absolute '><img src={scroll.bgr} alt="" /></div>
                            <div className=' absolute w-[168px] top-2 left-2'><img src={scroll.bg} alt="" /></div>
                            <div className=' absolute  w-[168px] top-4 left-4'><img src={scroll.img} alt="" /></div>
                            <p className=' absolute top-12 left-14 ' style={{ color: scroll.color }}><span className=' text-white '>x</span >{scroll.X}</p>
                            <p className=' absolute top-[70px] left-14 text-[#FFFF88] '>{scroll.kod}</p>
                            <p className=' absolute top-[125px] left-2 text-white'>{scroll.prace}</p>
                        </div>)
                }
            </div>
        </div>
    )
}
