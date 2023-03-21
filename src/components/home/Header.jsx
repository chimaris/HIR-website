import React from 'react'
import img from '../../assets/boyImage.png'

const Header = () => {
  return (
    <div className='w-full h-auto bg-[#3CABDD]'>
        <ul className='flex justify-end gap-4 py-6 px-8 text-white text-lg font-bold'>
            <li>DASHBOARDS</li>
            <li>REGIONS</li>
            <li>COUNTRIES</li>
            <li>DISEASES</li>
            <li>PROGRAM STAGES</li>
            <li>TOOLS $ RESOURCES</li>
            <li>UPDATES $ EVENTS</li>
            <li>ABOUT</li>
        </ul>
        <h3 className='bg-[#FFC914] text-[22px]' style={{padding:'20px 20px 10px'}}><span className='mr-4 font-bold'>Latest news on NTDs:</span> Launch of the Mwele Malecela Mentorship Program for Women in Neglected Tropical Diseases</h3>
        <div className='flex justify-around mt-20 gap-4 text-white'>
            <div className='w-[30%] flex flex-col items-center mt-20'>
                <img src={img} alt="boy" className='relative bottom-0'/>
            </div>
            <div className='w-[62%] flex flex-col items-center px-4'>
                <h1 className='text-5xl text-center font-bold'>Accelerating elimination of NTDs - Towards 2030</h1>
                <div className='flex my-20 mx-10 gap-16'>
                    <div className='text-center'>
                        <h2 className='font-bold'> <span className='text-5xl'>1.5</span>billion</h2>
                        <p>people affected by NTDs worldwide</p>
                    </div>
                    <div className='text-center'>
                        <h2 className='font-bold text-5xl'>39%</h2>
                        <p>of the global NTD burden occurs in Africa</p>
                    </div>
                    <div className='text-center'>
                        <h2 className='font-bold text-5xl'>600</h2>
                        <p><span className='font-bold'>million</span> people require treatment in Africa</p>
                    </div>
                </div>
                <div className='relative -bottom-16 bg-white text-black p-16 text-center rounded-md'>
                    <p className='text-3xl'>The ESPEN Portal enables health ministries and stakeholders to share, and exchange subnational programme data, in support of the NTD control and elimination goals.</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Header