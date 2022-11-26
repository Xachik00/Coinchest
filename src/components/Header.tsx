export default function Header() {
    
    return (
            <header className='bg-[#7A6DE6] flex justify-between items-center h-[50px] lg:h-[90px] '>
                <div className={'flex text-[20px] text-white  justify-around md:w-[430px] lg:w-[490px]'}>
                    <a href="#"><img src="./image/Coinchest.png" alt=""/></a>
                    <a href="#" className="hidden md:block">Why coinchest?</a>
                    <a href="#" className="hidden md:block">Roadmap</a>
                </div>
                <div className={'flex  justify-around w-[130px] md:w-[320px] lg:w-[400px]'}>
                    <div className=" relative bottom-[10px]">
                        <p className=' relative bg-[#F6E835] rounded-[50%] text-center w-4 h-4 text-[12px] left-4 top-2   lg:w-6 lg:h-6 lg:text-[16px] '>14</p>
                        <i className="fa-solid fa-bell  text-white text-[20px] lg:text-[27px]"></i>
                    </div>
                    <img src="./image/Ellipse_68.jpg" alt="" className={' rounded-[50%] w-8 h-8 lg:w-[50px] lg:h-[50px]'} />
                    <div className="md:hidden flex ">
                        <i className="fa-solid fa-bars text-[32px] text-[#F6E835] stroke"></i>
                    </div>
                    <button className='hidden border-[1px] border-black border-b-[4px] border-solid rounded-[6px] bg-[#F4BF4E]   text-white  stroke items-center text-[16px] w-[100px] h-[36px] pl-5 md:flex lg:text-[20px] lg:w-[142px] lg:h-[46px] lg:pl-9'>Log out</button>
                    <select className='hidden bg-[#58B6EF] border-[1px] border-black border-solid rounded-[6px]  text-white stroke p-1 text-[16px] w-[71px] h-[36px] md:flex lg:text-[20px]  lg:h-[46px]'>
                        <option value="en">En</option>
                        <option value="en">Arm</option>
                        <option value="en">Ru</option>
                    </select>
                </div>
            </header>
    )
}
