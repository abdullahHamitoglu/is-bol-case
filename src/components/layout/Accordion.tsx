import React, { useState } from 'react'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type Props = {
  title: string,
  subtitle: string,
  children: React.ReactNode;
}

const Accordion = (props: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <div className='bg-white shadow-sm flex flex-wrap'>
      <div className="flex flex-wrap w-full py-5 px-7 cursor-pointer" onClick={() => setOpen(!open)}>
        <div className="flex flex-col w-11/12">
          <h4 className='text-[#2253af] font-semibold'>{props.title}</h4>
          <p className='text-gray-800 text-sm'>{props.subtitle}</p>
        </div>
        {open ?
          <IoIosArrowUp className='1/12 h-full text-3xl text-[#2253af] m-auto' />
          :
          <IoIosArrowDown className='1/12 h-full text-3xl text-[#2253af] m-auto' />
        }
      </div>
      <div className={`w-full py-5 px-7 pt-5 border-t border-gray-200 ${open ? 'block' : 'hidden'}`}>
        {props.children}
      </div>
    </div>
  )
}

export default Accordion