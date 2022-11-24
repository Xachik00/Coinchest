export default function Header() {
    let classHeader = ' flex bg-[#7A6DE6] lg:w-[1440px] h-[90px] md:w-[1023px] w-[320px] grid grid-cols-5';
    let classLinks = ' md:flex items-center w-[490px] justify-between ml-5 text-white text-[20px]';
    let classIcon = 'flex  w-[400px] lg:ml-[500px] justify-between mr-5 items-center md:ml-[390px]';
    let classFA = ' absolute left-5 top-[-15px] bg-[#F6E835] rounded-[50%] text-black text-[16px] w-6 h-6 text-center leading-5 border-solid border-2 border-black';
    let classImg = ' hidden md:block rounded-[50%] w-11 h-11 border-solid border-3 border-black';
    let classBtn = 'border-[1px] border-black border-b-[4px] border-solid rounded-[6px] bg-[#F4BF4E] md:w-[142px] h-[46px] text-white md:text-[20px] stroke w-[100px] text-[16px]';
    let classSelect = 'md:flex w-[60px] h-[42px] bg-[#58B6EF] border-[1px] border-black border-solid rounded-[6px] text-[20px] text-white stroke p-1 hidden';

    return (
        <div className=' w-[100%] h-[90px] mx-auto '>
            <header className={classHeader}>
                <div className={classLinks}>
                    <a href="#"><img src="./image/Coinchest.png" alt="" /></a>
                    <a href="#" className="hidden md:block">Why coinchest?</a>
                    <a href="#" className="hidden md:block">Roadmap</a>
                </div>
                <div className={classIcon}>
                    <div className="hidden md:block">
                        <i className="fa-solid fa-bell text-[27px] text-white relative">
                            <p className={classFA}>14</p>
                        </i>
                    </div>
                    <img src="./image/Ellipse_68.jpg" alt="" className={classImg} />
                    <button className={classBtn}>Log out</button>
                    <div className="md:hidden flex ml-[-200px]">
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <select className={classSelect}>
                        <option value="en">En</option>
                        <option value="en">Arm</option>
                        <option value="en">Ru</option>
                    </select>
                </div>
            </header>
        </div>
    )
}
