interface Btn{
  Step1:()=>void
}
export default function Steperku({Step1}:Btn) {
  return (
    <div className=' w-[920px] h-[1667px] bg-[#7A6DE6] ml-[20px] rounded-r-[20px] rounded-bl-[20px] border-[1px] border-dashed border-black'>
      <div className='flex mt-[30px]'>
        <button onClick={()=>Step1()} className=' w-[4%] text-[36px] text-white stroke ml-[40px] pointer' >{'<'}</button>
        <h2 className=' w-[90%] text-[36px] text-white stroke text-center ml-[-40px]'>Step 2</h2>
      </div>
      <div>
        <div className=' w-[30px] h-[30px] bg-white border border-solid'></div>
      </div>
    </div>
  )
}
