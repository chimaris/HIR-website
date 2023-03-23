import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { BsBarChartFill } from "react-icons/bs";


const SearchSection = () => {
  return (
    <div className='w-[90%] my-12 m-auto'>
        <h2 className="text-center text-4xl my-12 after:relative after:w-16 after:mt-1 after:bg-[#D86422] after:block after:h-[2px] after:mx-auto">What are you looking for?</h2>
        <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-around gap-24 md:gap-1">
            <div className="flex flex-col items-center justify-center bg-[#008DC9] hover:bg-[#FFC914] w-[95%] md:w-[30%] h-[200px] rounded-md pt-12">
                <div className='flex flex-col items-center gap-2 text-white pt-12'>
                    <FaSearch className='text-6xl'/>
                    <div className='flex items-center border-b-2 font-bold'><h2>MAP SEARCH  </h2><FaAngleRight/></div>
                </div>
                <div className='relative -bottom-6 bg-white text-black text-center h-[150px] w-[300px] rounded-[50%] py-8'>
                    <p className='text-[24px] px-16'>Looking for Specific maps?</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#008DC9] hover:bg-[#FFC914] w-[95%] md:w-[30%] h-[200px] rounded-md pt-12">
                <div className='flex flex-col items-center gap-2 text-white pt-12'>
                    <BsBarChartFill className='text-6xl'/>
                    <div className='flex items-center border-b-2 font-bold'><h2>DATA SEARCH  </h2><FaAngleRight/></div>
                </div>
                <div className='relative -bottom-6 bg-white text-black text-center h-[150px] w-[300px] rounded-[50%] py-8'>
                    <p className='text-[24px] px-16'>Looking for just the data?</p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center bg-[#008DC9] hover:bg-[#FFC914] w-[95%] md:w-[30%] h-[200px] rounded-md pt-12">
                <div className='flex flex-col items-center gap-2 text-white pt-12'>
                    <FaSearch className='text-6xl'/>
                    <div className='flex items-center border-b-2 font-bold'><h2>MAP SEARCH  </h2><FaAngleRight/></div>
                </div>
                <div className='relative -bottom-6 bg-white text-black text-center h-[150px] w-[300px] rounded-[50%] py-8'>
                    <p className='text-[24px] px-16'>Looking for Specific maps?</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchSection