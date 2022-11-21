import { useAppSelector, useAppDispatch } from '../hooks/redux'
import { useState, useEffect } from 'react'
import { fetchTotal } from '../store/actions/productsActions';


export function TotalCard() {

    const { totals } = useAppSelector(state => state.totalReducer)
    const dispatch = useAppDispatch();
    let [chests, setChests] = useState(false)

    useEffect(() => {
        dispatch(fetchTotal());
    }, [dispatch]);

    let classesChests = 'w-[220px] h-[64px] border border-solid border-black rounded-t-[10px] ';
    let classInput = ' h-[40px] w-[400px] rounded-[8px] border-[1px] border-solid border-black text-black ml-[20px] mt-[30px] text-[18px] p-2 pl-10';
    let classSelect = ' w-[178px] h-[42px] bg-[#BA99F5] text-[28px] text-white stroke ml-[20px] mt-8';
    let classElementName = ' absolute top-1 left-[76px] text-[24px] text-white stroke';
    let classP = ' absolute w-[192px] h-[30px] bg-white flex top-[30px] left-[41px] border border-solid border-black rounded-[4px] text-white text-[22px] stroke items-center';
    let classElementDate = ' ml-1 bg-[#6666CA] w-[150px] h-[22px] border border-solid rounded-[4px] mt-[-22px]';
    let classDarling = ' w-[170px] h-[68px] bg-white border border-solid rounded-[5px] mt-[-30px] ml-[-21px]';
    let classId = ' absolute text-[16px] text-white stroke top-[293px] left-[14px]';
    let classTokos = 'absolute w-[388px] h-[24px] bg-white rounded-[5px] top-[317px] left-[6px] border border-solid items-center';
    let classStart = ' absolute top-[344px] left-[14px] text-white text-[20px] font-bold stroke block';
    let classTotal = ' absolute w-[100px]  top-[347px] left-[280px] text-white text-[20px] font-bold stroke block text-end';

    function Save(el: any) {
        if (+el.id === 0) {
            el.className = "fa-solid fa-star text-[#F6E835]";
            el.id = 1
        } else {
            el.className = "fa-solid fa-star "
            el.id = 0
        }
    }

    return (
        <div >
            <div className=' text-[22px] text-white stroke'>
                <button className={classesChests + 'bg-[#F4BF4E]'} onClick={() => setChests(false)}>All chests</button>
                <button className={classesChests + 'bg-[#CBCBCB]'} onClick={() => setChests(true)}>My chests</button>
            </div>
            <div className=' w-[440px] h-[1900px] bg-[#BA99F5]'>
                <div className='text-center w-[400px]'>
                    <i className="fa-solid fa-magnifying-glass text-[#F6E835] relative  left-[-160px] text-[18px] top-[62px] stroke"></i>
                    <input
                        className={classInput}
                        placeholder="Search" />
                </div>
                <div className='flex'>
                    <h1 className={classSelect}>All chests</h1>
                    <img src="./image/filtr.png" className=' w-[26px] h-[18px] mt-11 ml-[-30px]' alt="" />
                </div>
                <div className=' mt-[16px]'>
                    {chests === false ?
                        totals.map(el => <div key={el.id} className=' ml-5 mt-[20px] relative'>
                            <img src={el.bg_img} className=' w-[400px] h-[410px] relative' alt="" />
                            <img src={el.bg1_img} className=' w-[388px] h-[398px] absolute top-[6px] left-[6px]' alt="" />
                            <h1 className={classElementName}>{el.name}</h1>
                            <div className={classP}>
                                <p className=' ml-[35px] text-[#94CEF1]'>{el.n1}</p>
                                <p className=' ml-[30px]'>$<span className=' text-[#F6E835]'>{el.n2}</span></p>
                            </div>
                            <img src={el.logo} alt="" className=' absolute top-[12px] left-[12px]' />
                            <span className=' absolute w-[30px] block top-[3px] left-[355px] text-[28px] text-white'>
                                <i className="fa-sharp fa-solid fa-share"></i>
                                <i className="fa-solid fa-star " onClick={(el) => Save(el.target)} id='0'></i>
                                <i className="fa-solid fa-clone"></i>
                            </span>
                            <div className=' absolute top-[89px] left-[27px]'>
                                <img src="./image/oclock.png" alt="" />
                                <div className={classElementDate}>
                                    <div className=' bg-[#ADADF4] w-[120px] h-[20px] rounded-[4px] items-center flex'>
                                        <p className=' ml-6 text-[16px] text-white stroke'>{el.date}</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' w-[200px] h-[180px] absolute left-[6px] top-[119px]'>
                                <img src={el.sunduk_img} alt="" />
                            </div>
                            <div className=' absolute top-[127px] left-[237px]'>
                                <img src={el.image} alt="" />
                                <div className={classDarling}>
                                    <p className='text-[14px] mt-4 ml-2'>This gift is for you my darling.</p>
                                </div>
                            </div>
                            <div className={classId}>{el.id}</div>
                            <div className={classTokos}>
                                <div className={'h-[22px] bg rounded-[5px]'} style={{ width: el.tokos + '%' }}></div>
                            </div>
                            <div className=' absolute top-[287px]  text-white text-[16px] stroke ' style={{ left: el.tokos - 13 + '%' }} >
                                <img src="./image/level.png" alt="" />
                                <p className=' mt-[-40px] ml-3'>x<span className=' text-[#94CEF1]'>{el.tokosA}</span></p>
                                <p className=' mt-[-24px] ml-[45px]'>$<span className=' text-[#FEFE92]'>{el.tokosB}</span></p>
                                <h2 className=' text-[24px] mt-[12px] ml-8'>{el.tokos}%</h2>
                            </div>
                            <div className={classStart}>
                                <p>Start</p>
                                <p className=' mt-[-10px]'>$<span className=' text-[#FEFE92]'>{el.start}</span></p>
                            </div>
                            <div className={classTotal}>
                                <p>Total</p>
                                <div className=' flex mt-[-10px] w-[100px] justify-end'>
                                    <p>x<span className=' text-[#94CEF1]'>{el.targetA}</span></p>
                                    <p>$<span className=' text-[#FEFE92]'>{el.targetB}</span></p>
                                </div>
                            </div>
                        </div>)
                        : <div className=' text-center text-[30px] text-red-500 stroke'>You don't have any chests yet</div>}
                </div>
            </div>
        </div>
    )
}
