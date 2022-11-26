import { useState } from 'react'
import { TotalCard } from '../components/TotalCard';
import Stepmek from '../components/Stepmek';
import Scrolls from '../components/Scrolls';
import Security from '../components/Security';
import Roadmap from '../components/Roadmap';
import Steperku from '../components/Steperku';
import Stepereq from '../components/Stepereq';


export function HomePage() {

    const [btnclick1, setBtnclick1] = useState(true);
    const [btnclick2, setBtnclick2] = useState(false);
    const [btnclick3, setBtnclick3] = useState(false);


    let btn = 'w-[117px] h-[36px] md:w-[164px] md:h-[53px] border-[1px] border-solid border-black md:text-[24px] text-[16px] text-center cursor-pointer bg-[#7A6DE6] stepp rounded-tl-[20px] z-10 '
    let btn1 = 'w-[117px] h-[36px] md:w-[164px] md:h-[53px] border-[1px] border-solid border-black md:text-[24px] text-[16px] text-center cursor-pointer bg-gray-400 md:ml-[-40px] ml-[-27px] stepp1 '
    let btn11 = 'w-[117px] h-[36px] md:w-[164px] md:h-[53px] border-[1px] border-solid border-black md:text-[24px] text-[16px] text-center cursor-pointer bg-[#7A6DE6]  md:ml-[-40px] ml-[-27px] stepp1 '
    let btn2 = 'w-[117px] h-[36px] md:w-[164px] md:h-[53px] border-[1px] border-solid border-black md:text-[24px] text-[16px] text-center cursor-pointer bg-gray-400 md:ml-[-40px] ml-[-27px] stepp2 rounded-tr-[20px]  '
    let btn22 = 'w-[117px] h-[36px] md:w-[164px] md:h-[53px] border-[1px] border-solid border-black md:text-[24px] text-[16px] text-center cursor-pointer bg-[#7A6DE6] md:ml-[-40px] ml-[-27px] stepp2 rounded-tr-[20px]  '
    let classHi = ' text-[#F4BF4E] md:text-[48px] text-[24px]   h-[110px]  mt-[36px] text-center ';
    let classVector = ' text-[18px] md:text-[28px] text-white font-bold absolute left-[20px] top-[6px]';
    let classContStep = ' flex  mt-[30px] text-white bg-black md:w-[409px] rounded-t-[50px] w-[288px] ml-4 lg:ml-5';

    function Step1() {
        setBtnclick1(true)
        setBtnclick2(false)
        setBtnclick3(false)
    }
    function Step2() {
        setBtnclick1(false)
        setBtnclick2(true)
        setBtnclick3(false)
    }
    function Step3() {
        setBtnclick1(false)
        setBtnclick2(false)
        setBtnclick3(true)
    }

    return (
            <div className='lg:max-w-[920px] md:max-w-[1023px] '>
                <div className={classHi}>
                    {
                        btnclick1 &&
                        <h1>Hi, Let’s create <br />
                            <span className=' text-[#7A6DE6]'> Your first chest </span>
                        </h1>
                    }
                    {btnclick2 &&
                        <h1>Present <br />
                            <span className=' text-[#7A6DE6]'> a unique gift! </span>
                        </h1>
                    }{
                        btnclick3 &&
                        <h1>Pay as
                            <span className=' text-[#7A6DE6]'> You want </span>
                        </h1>
                    }


                </div>
                <div className=' mt-[51px] relative'>
                    <img src="./image/Vector.png" className=' w-[157px] md:w-[243px]' alt="" />
                    <h2 className={classVector}>Create a chest</h2>
                </div>
                <div className={classContStep}>
                    <div className={btn} onClick={Step1}><button className='md:mt-2 md:mr-8 '>1. Step</button></div>
                    <div className={btnclick2 || btnclick3 ? btn11 : btn1} onClick={Step2}><button className='mt-2 mr-8'>2. Step</button></div>
                    <div className={btnclick3 ? btn22 : btn2} onClick={Step3}><button className='mt-2 mr-8'>3. Step</button></div>               </div>
                {
                    btnclick1 &&
                    <div>
                        <Stepmek Step2={Step2} />
                        <div className='md:max-w-[992px] lg:max-w-[500px]   '>
                            <TotalCard />
                        </div>
                        <Scrolls />
                        <Security />
                        <Roadmap />
                    </div>
                }{btnclick2 &&
                    <div>
                        <Steperku Step1={Step1} />
                        <div className=' lg:w-[500px] lg:ml-[60px] lg:mt-[36px] md:w-[992px] md:mt-[1200px] md:ml-[-1004px] ml-[-288px] mt-[1200px]'>
                            <TotalCard />
                        </div>
                        <Security />
                    </div>
                }{btnclick3 &&

                    <div>
                        <Stepereq />
                        <div className=' lg:w-[500px] lg:ml-[60px] lg:mt-[36px] md:w-[992px] md:mt-[1200px] md:ml-[-1004px] ml-[-288px] mt-[1200px]'>
                            <TotalCard />
                        </div>
                        <Security />
                    </div>

                }
            </div>);
}




