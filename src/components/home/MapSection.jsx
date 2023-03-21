import React from 'react'
import { FaDove } from "react-icons/fa";
import worm from '../../assets/worm.svg'


const MapSection = () => {
  return (
    <section className="flex flex-col bg-[#CCE8F4] py-[100px] px-5">
			<h2 className="text-center text-4xl">Browse 14,919 maps and data</h2>
			<div className="flex flex-col md:flex-row md:flex-wrap items-center m-auto gap-1 my-20 justify-center">
				<div className="flex flex-col items-center justify-center text-center gap-2 md:w-[44%] lg:w-[23%] xl:w-[20%]">
					<div className="flex flex-col items-center justify-center bg-[#008DC9] w-[130px] h-[130px] rounded-full">
					<img src={worm} alt="worm" width='50%' className='text-black' />
                    </div>
					<h4 className="text-black">Trachoma</h4>
				</div>
				<div className="flex flex-col items-center justify-center text-center gap-2 md:w-[44%] lg:w-[23%] xl:w-[20%]">
					<div className="flex flex-col items-center justify-center bg-[#008DC9] w-[130px] h-[130px] rounded-full" >
					<img src={worm} alt="worm" width='50%' className='text-black' />
                    </div>
					<h4 className="text-black">Correct Identity</h4>
					
				</div>
				<div className="flex flex-col items-center justify-center text-center gap-2 md:w-[44%] lg:w-[23%] xl:w-[20%]">
					<div className="flex flex-col items-center justify-center bg-[#008DC9] w-[130px] h-[130px] rounded-full" >
					<img src={worm} alt="worm" width='50%' className='text-black' />
                    </div>
					<h4 className="text-black">Quality Assurance</h4>
					
				</div>
				<div className="flex flex-col items-center justify-center text-center gap-2 md:w-[44%] lg:w-[23%] xl:w-[20%]">
					<div className="flex flex-col items-center justify-center bg-[#008DC9] w-[130px] h-[130px] rounded-full" >
					<img src={worm} alt="worm" width='50%' className='text-black' />
                    </div>
					<h4 className="text-black">Schistosomiasis</h4>
					
				</div>
                <div className="flex flex-col items-center justify-center text-center gap-2 md:w-[44%] lg:w-[23%] xl:w-[20%]">
					<div className="flex flex-col items-center justify-center bg-[#008DC9] w-[130px] h-[130px] rounded-full" >
					<img src={worm} alt="worm" width='50%' className='text-black' />
                    </div>
					<h4 className="text-black">Schistosomiasis</h4>
					
				</div>
                <div className="flex flex-col items-center justify-center text-center gap-2 md:w-[44%] lg:w-[23%] xl:w-[20%]">
					<div className="flex flex-col items-center justify-center bg-[#008DC9] w-[130px] h-[130px] rounded-full" >
					<img src={worm} alt="worm" width='50%' className='text-black' />
                    </div>
					<h4 className="text-black">Schistosomiasis</h4>
					
				</div>
                <div className="flex flex-col items-center justify-center text-center gap-2 md:w-[44%] lg:w-[23%] xl:w-[20%]">
					<div className="flex flex-col items-center justify-center bg-[#008DC9] w-[130px] h-[130px] rounded-full" >
					<img src={worm} alt="worm" width='50%' className='text-black' />
                    </div>
					<h4 className="text-black">Schistosomiasis</h4>
					
				</div>
			</div>
		</section>
  )
}

export default MapSection