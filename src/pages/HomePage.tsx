import { useState } from 'react'
import { TotalCard } from '../components/TotalCard';
import Step1 from '../components/Step1';
import Scrolls from '../components/Scrolls';
import Security from '../components/Security';
import Roadmap from '../components/Roadmap';
import Steperku from '../components/Steperku';
import Stepereq from '../components/Stepereq';


export function HomePage() {

    const [btnclick, setBtnclick] = useState(false);
    const [btnclick1, setBtnclick1] = useState(false);

    let btn = 'w-[164px] h-[53px] border-[1px] border-solid border-black text-[24px] text-center cursor-pointer bg-[#7A6DE6] stepp rounded-tl-[20px] z-10 '
    let btn1 = 'w-[164px] h-[53px] border-[1px] border-solid border-black text-[24px] text-center cursor-pointer bg-gray-400 ml-[-40px] stepp1 '
    let btn11 = 'w-[164px] h-[53px] border-[1px] border-solid border-black text-[24px] text-center cursor-pointer bg-[#7A6DE6]  ml-[-40px] stepp1 '
    let btn2 = 'w-[164px] h-[53px] border-[1px] border-solid border-black text-[24px] text-center cursor-pointer bg-gray-400 ml-[-40px] stepp2 rounded-tr-[20px]  '
    let btn22 = 'w-[164px] h-[53px] border-[1px] border-solid border-black text-[24px] text-center cursor-pointer bg-[#7A6DE6] ml-[-40px] stepp2 rounded-tr-[20px]  '
    let classHi = ' text-[#F4BF4E] text-[48px] w-[380px]  h-[110px] ml-[335px] mt-[36px] text-center ';
    let classVector = 'text-[28px] text-white font-bold absolute left-[20px] top-[6px]';
    let classContStep = ' flex ml-[20px] mt-[30px] text-white bg-black w-[409px] rounded-t-[50px]';

    function Step2() {
        setBtnclick1(!btnclick1)
        setBtnclick(true)
    }

    return (
        <div className=' w-[1440px] flex'>
            <div className=' w-[920px]'>
                <div className={classHi}>
                    {
                        btnclick1 ?
                            <h1>Pay as
                                <span className=' text-[#7A6DE6]'> You want </span>
                            </h1> :
                            btnclick ?
                                <h1>Present <br />
                                    <span className=' text-[#7A6DE6]'> a unique gift! </span>
                                </h1>
                                :
                                <h1>Hi, Let’s create <br />
                                    <span className=' text-[#7A6DE6]'> Your first chest </span>
                                </h1>
                    }
                </div>
                <div className=' mt-[51px] relative'>
                    <img src="./image/Vector.png" alt="" />
                    <h2 className={classVector}>Create a chest</h2>
                </div>
                <div className={classContStep}>
                    <div className={btn}><button className='mt-2 mr-8 '>1. Step</button></div>
                    <div className={btnclick ? btn11 : btn1} onClick={() => setBtnclick(!btnclick)}><button className='mt-2 mr-8'>2. Step</button></div>
                    <div className={btnclick ? btnclick1 ? btn22 : btn2 : btn2} onClick={Step2}><button className='mt-2 mr-8'>3. Step</button></div>
                </div>
                {
                    btnclick1 ?
                        <div>
                            <Stepereq />
                            <Security />
                        </div>
                        :
                        btnclick ?
                            <div>
                                <Steperku />
                                <Security />
                            </div>
                            : <div>
                                <Step1 btnclick={btnclick} setBtnclick={setBtnclick} />
                                <Scrolls />
                                <Security />
                                <Roadmap />
                            </div>
                }
            </div>
            <div className=' w-[500px] ml-[60px] mt-[36px]'>
                <TotalCard />
            </div>
        </div>);
}




