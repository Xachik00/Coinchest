export default function Security() {
    return (
        <div className=' mt-[61px]'>
            <div className=' relative'>
                <img src="./image/group2_.png" alt="" />
                <h2 className='text-[28px] text-white font-bold absolute left-[20px] top-[6px]'>Security</h2>
            </div>
            <div className='md:flex lg:w-[940px]  ml-5 mt-[32px] md:w-[992px] block'>
                <div className="ml-[30px]">
                    <img src="./image/swords.png" alt="" />
                </div>
                <p className=' lg:w-[820px] ml-[30px] md:text-[20px] font-[500] tracking-[1.5px] md:w-[892px] w-[288px] text-[14px]'>
                    The chest is NFT with a smart contract, it stored in the Polygon network. When creating the chest, the creator specifies the smart
                    contract rules, how long to keep the chest closed and at what token price open the chest and sell the tokens. <br /><br />
                    Coinchest service only provides an interface for creating chest!
                    If the service disappears, the chest will still remain on polygon network and follow it’s creator rules.</p>
            </div>
        </div>
    )
}
