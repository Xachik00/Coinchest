export default function Footer() {

    let classFooter = ' w-[1440px] h-[254px] bg-[#978BF5] mt-[50px] pt-[1px] ';
    let classIcons = 'flex mt-[14px] ml-5 justify-between w-[1100px]';
    let classRoadmap = '  w-[89px] h-[30px] text-white text-[20px]';
    let classCoinchest = ' mt-[15px] w-[149px] h-[30px] text-white text-[20px]';
    let classPrivacy = 'w-[1440px] h-[40px] bg-[#7A6DE6] flex justify-between items-center text-white mt-[30px]';



    return (
        <footer className={classFooter}>
            <div className='flex  ml-[20px] mt-[30px] h-[54px]'>
                <a href="#"><img src="./image/Coinchest.png" alt="" /></a>
            </div>
            <div className={classIcons}>
                <div className='flex w-[320px] h-[36px] mt-[30px] justify-between '>
                    <a rel="noreferrer" href="https://www.viber.com " target="_blank"><img src="image/link1.png" alt="" /></a>
                    <a rel="noreferrer" href="https://www.youtube.com " target="_blank"><img src="image/link2.png" alt="" /></a>
                    <a rel="noreferrer" href="https://www.twiter.com " target="_blank"><img src="image/link3.png" alt="" /></a>
                    <a rel="noreferrer" href="https://www.web.telegram.org " target="_blank"><img src="image/link4.png" alt="" /></a>
                    <a rel="noreferrer" href="https://www.facebook.com " target="_blank"><img src="image/link5.png" alt="" /></a>
                    <a rel="noreferrer" href="https://web.whatsapp.com/" target="_blank"><img src="image/link6.png" alt="" /></a>
                </div>

                <div className=" ">
                    <div className=" flex">
                        <div className='ml-5'><a rel="noreferrer" href='https://www.google.com/maps/place/15+%D5%84%D5%AB%D5%AF%D5%B8%D5%B5%D5%A1%D5%B6+%D6%83%D5%B8%D5%B2%D5%B8%D6%81,+%D4%B5%D6%80%D6%87%D5%A1%D5%B6+0090,+%D5%80%D5%A1%D5%B5%D5%A1%D5%BD%D5%BF%D5%A1%D5%B6/@40.1831186,44.5670815,19.17z/data=!4m5!3m4!1s0x406abcb20cc55c6f:0x2e7beb956a52c346!8m2!3d40.1830158!4d44.567669' target='_blank'><img src="./image/gps.png" alt="" /></a></div>
                        <div className='ml-5'><a rel="noreferrer" href='https://www.google.com/maps/place/15+%D5%84%D5%AB%D5%AF%D5%B8%D5%B5%D5%A1%D5%B6+%D6%83%D5%B8%D5%B2%D5%B8%D6%81,+%D4%B5%D6%80%D6%87%D5%A1%D5%B6+0090,+%D5%80%D5%A1%D5%B5%D5%A1%D5%BD%D5%BF%D5%A1%D5%B6/@40.1831186,44.5670815,19.17z/data=!4m5!3m4!1s0x406abcb20cc55c6f:0x2e7beb956a52c346!8m2!3d40.1830158!4d44.567669' target='_blank'>Mina Rashid, Dubai United <br /> Arab Emirates</a></div>
                    </div>
                    <div className=" flex mt-4">
                        <div className=' mt-5 ml-5'><a href='tel:+37477219733'><img src="./image/sms.png" alt="" /></a></div>
                        <div className=' mt-5 ml-5'><a href='tel:+37477219733'>coinchestio@gmail.com</a></div>
                    </div>
                </div>
                <div>
                    <p className={classRoadmap}><a rel="noreferrer" href='https://monday.com/lp/swd/?utm_medium=cpc&utm_source=adwordssearch&utm_campaign=ww-en-prm-workos-dev-product_management-h-search-desktop-exp-aw&utm_keyword=roadmap&utm_match_type=e&cluster=tech&subcluster=swd_product_roadmap&ati=&gclid=Cj0KCQiAyMKbBhD1ARIsANs7rEGmw4ZaxUmUHKRaMb_PkyfBz9_n67MqyKMLDG0zQ0y3DALqTn6yTCoaAuhqEALw_wcB' target='_blank'>Roadmap</a></p>
                    <p className={classCoinchest}><a rel="noreferrer" href='https://fulltimehomebusiness.com/coinchest-app/' target='_blank'>Why coinchest?</a></p>
                </div>
            </div>


            <div className={classPrivacy}>
                <p className='ml-[20px]'>Copyright  ©  2022 Coinchest.io   All  rights  reserved</p>
                <p className='mr-[20px]'>Privacy Policy <span className='mx-[4px] text-black'>|</span>  Terms & Conditions</p>
            </div>
        </footer >
    )
}
