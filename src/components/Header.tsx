export default function Header() {
    let classHeader = ' flex bg-[#7A6DE6] w-[1440px] h-[90px] ';
    let classLinks = ' flex items-center w-[490px] justify-between ml-5 text-white text-[20px]';
    let classIcon = ' flex  w-[400px] ml-[500px] justify-between mr-5 items-center';
    let classFA = ' absolute left-5 top-[-15px] bg-[#F6E835] rounded-[50%] text-black text-[16px] w-6 h-6 text-center leading-5 border-solid border-2 border-black';
    let classImg = ' rounded-[50%] w-11 h-11 border-solid border-3 border-black';
    let classBtn = 'border-[1px] border-black border-b-[4px] border-solid rounded-[6px] bg-[#F4BF4E] w-[142px] h-[46px] text-white text-[20px] stroke';
    let classSelect = ' w-[60px] h-[42px] bg-[#58B6EF] border-[1px] border-black border-solid rounded-[6px] text-[20px] text-white stroke p-1';

    return (
        <div className=' w-[100%] h-[90px] mx-auto'>
            <header className={classHeader}>
                <div className={classLinks}>
                    <a href="#"><img src="./image/Coinchest.png" alt="" /></a>
                    <a href="#">Why coinchest?</a>
                    <a href="#">Roadmap</a>
                </div>
                <div className={classIcon}>
                    <div >
                        <i className="fa-solid fa-bell text-[27px] text-white relative">
                            <p className={classFA}>14</p>
                        </i>
                    </div>
                    <img src="./image/Ellipse_68.jpg" alt="" className={classImg} />
                    <button className={classBtn}>Log out</button>
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
