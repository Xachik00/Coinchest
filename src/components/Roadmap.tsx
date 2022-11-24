import { useState } from 'react'

export default function Roadmap() {

    const [check, setCheck] = useState(0)

    return (
        <div className=' mt-[52px] mx-auto'>
            <div className=' relative'>
                <img src="./image/group3_.png" alt="" />
                <h2 className='text-[28px] text-white font-bold absolute left-[20px] top-[6px]'>Roadmap</h2>
            </div>
            <div className=' lg:w-[820px] lg:ml-[120px] mt-[32px] md:w-[892px] md:ml-[116px] w-[288px]'>
                <p className='md:text-[20px] font-[500] tracking-[1.5px] text-[14px] ml-[16px]'>
                    At the start, the service will only be avaiable for Ethereum ERC-20 network tokens only. The priority is the introduction of top blockchains
                    and DLT platforms: Cardano, Avalanch, Polkadot, Solana, Binance Chain, XRP Ledger, XLM.
                </p>
                <div className='md:flex mt-[60px] md:w-[820px] justify-between grid grid-cols-4 grid-rows-2 gap-5 w-[288px] ml-[16px]'>
                    <a rel="noreferrer" href="https://www.binance.com/ru/price/ethereum" target='_blank' onClick={() => setCheck(1)}  className=' relative'><img src="./image/layer.png" alt="" />
                        {check == 1 && <img src="./image/done.png" className=' absolute top-[-30px] left-8' />}</a>
                    <a rel="noreferrer" href="https://www.binance.com/ru/trade/ADA_BUSD?_from=markets&theme=dark&type=spot" target='_blank' onClick={() => setCheck(2)} className='relative'><img src="./image/cardano.png" alt="" />
                        {check == 2 && <img src="./image/done.png" className=' absolute top-[-30px] left-8' />}</a>
                    <a rel="noreferrer" href="https://www.binance.com/ru/trade/AVAX_BUSD?_from=markets" target='_blank' onClick={() => setCheck(3)} className='relative'><img src="./image/avax.png" alt="" />
                        {check == 3 && <img src="./image/done.png" className=' absolute top-[-30px] left-8' />}</a>
                    <a rel="noreferrer" href="https://www.binance.com/ru/trade/DOT_BUSD?_from=markets&theme=dark&type=spot" target='_blank' onClick={() => setCheck(4)} className='relative'><img src="./image/polkadot.png" alt="" />
                        {check == 4 && <img src="./image/done.png" className=' absolute top-[-30px] left-8' />}</a>
                    <a rel="noreferrer" href="https://www.binance.com/ru/trade/SOL_BUSD?_from=markets&theme=dark&type=spot" target='_blank' onClick={() => setCheck(5)} className='relative'><img src="./image/solana.png" alt="" />
                        {check == 5 && <img src="./image/done.png" className=' absolute top-[-30px] left-8' />}</a>
                    <a rel="noreferrer" href="https://www.binance.com/ru/trade/BNB_BUSD?_from=markets" target='_blank' onClick={() => setCheck(6)} className='relative'><img src="./image/bnb.png" alt="" />
                        {check == 6 && <img src="./image/done.png" className=' absolute top-[-30px] left-8' />}</a>
                    <a rel="noreferrer" href="https://www.binance.com/ru/trade/XRP_BUSD?_from=markets" target='_blank' onClick={() => setCheck(7)} className='relative'><img src="./image/xrp.png" alt="" />
                        {check == 7 && <img src="./image/done.png" className=' absolute top-[-30px] left-8' />}</a>
                    <a rel="noreferrer" href="https://www.binance.com/ru/trade/XLM_BUSD?_from=markets&theme=dark&type=spot" target='_blank' onClick={() => setCheck(8)} className='relative'><img src="./image/xlm.png" alt="" />
                        {check == 8 && <img src="./image/done.png" className=' absolute top-[-30px] left-8' />}</a>
                </div>
            </div>
        </div>
    )
}
