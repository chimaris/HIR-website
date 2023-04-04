import React from 'react'
import img from '../../assets/boyImage.png'

const Header = () => {
  return (
    <div className='w-full h-auto bg-[#3CABDD]'>
        
        <h3 className='bg-[#FFC914] text-[22px]' style={{padding:'20px 20px 10px'}}><span className='mr-4 font-bold'>
            Latest news in EPR:</span> Launch of the new platform for data reporting</h3>
        <div className='flex justify-around mt-20 gap-4 text-white'>
            <div className='w-[30%] md:flex flex-col items-center mt-20 hidden'>
                <img src={img} alt="boy" className='relative bottom-0'/>
            </div>
            <div className='w-[95%] md:w-[62%] flex flex-col items-center px-4'>
                <h1 className='text-3xl md:text-5xl text-center font-bold' style={{lineHeight: '1.5'}}>Accelerating elimination of Cholera - Towards 2030</h1>
                <div className='flex md:flex-row flex-col my-20 mx-10 gap-16'>
                    <div className='text-center'>
                        <h2 className='font-bold'> <span className='text-5xl'>1.3 to 4.0</span>Million</h2>
                        <p>people affected by cases of cholera worldwide</p>
                    </div>
                    <div className='text-center'>
                        <h2 className='font-bold text-5xl'>Over 60%</h2>
                        <p>of the global cholera cases occurs in Africa</p>
                    </div>
                    <div className='text-center'>
                        <h2 className='font-bold text-5xl'>600</h2>
                        <p><span className='font-bold'>million</span> people require treatment in Africa</p>
                    </div>
                </div>
                <div className='relative -bottom-16 bg-white text-black p-16 text-center rounded-md'>
                    <p className='text-2xl md:text-3xl'>The EPR Collaborative hub is a platform to share links, and exchange subnational programme data, in support of the work EPR is doing to help</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Header