import React from 'react'
import { FaAngleDown } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row justify-start gap-12 bg-[#2C3F4D] px-3 py-5 h:auto md:h-48 text-white'>
      <div className='flex flex-col gap-8'>
        <h2 className='text-2xl after:relative after:w-[140px] after:mt-1 after:bg-[#FFC914] after:block after:h-[2px]'>Join our mailing list</h2>
        <form className="max-w-sm relative w-[90%]">
                <button className="p-2 w-32 h-11 text-white bg-[#008DC9] rounded-full absolute left-56 md:left-60 cursor-pointer">
                    SUBSCRIBE
                </button>
                <input
                 type="text"
                 placeholder="email address"
                 className="w-[90%] h-11 py-3 pl-4 pr-36 text-gray-500 border rounded-full outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
             />
        </form>
      </div>
      <div className='flex flex-col gap-8 w-64'>
        <h2 className='text-2xl after:relative after:w-[120px] after:mt-1 after:bg-[#FFC914] after:block after:h-[2px]'>Quick jump</h2>
        <div className="max-w-sm relative">
                <button className="p-3 text-white bg-[#008DC9] rounded-full absolute hidden md:block left-52 cursor-pointer">
                  <FaAngleDown className='text-2xl'/>
                </button>
                <select className="p-2.5 w-[100%] h-11 text-gray-500 bg-white border rounded-full shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>Select a disease</option>
                <option>Ebola Virus</option>
                <option>Marburg</option>
                <option>Sudan Virus</option>
                <option>Cholera</option>
                <option>Measles</option>
                <option>Yellow Fever</option>
            </select>
                
        </div>
      </div>
      <div>
        <div className="max-w-sm relative mt-[4.5rem]">
                <button className="p-3 text-white bg-[#008DC9] rounded-full absolute hidden md:block left-80 md:left-28 cursor-pointer">
                  <FaAngleDown className='text-2xl'/>
                </button>
                <select className="p-2.5 w-[95%] h-11 text-gray-500 bg-white border rounded-full shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>Select a country</option>
                <option>Nigeria</option>
                <option>Ghana</option>
                <option>Togo</option>
                <option>Uganda</option>
            </select>
                
        </div>
      </div>
    </div>
  )
}

export default Footer