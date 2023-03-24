import React from 'react'
// import espenLogo from '../../assets/espenLogo.png'
import logo from '../../assets/logo.png'
import Search from '../Search';


const Nav = () => {
  return (
    <div className='w-[95%] m-auto flex justify-between items-center '>
        {/* <img src={espenLogo} alt="espenLogo" width='30%' height='30%' /> */}
        <img src={logo} alt="logo" width='30%' height='30%' />
        {/* <ul className='flex flex-row-reverse self-start w-[100%] mx-4 mt-4 gap-2'>
            <li>ESPEN Collect login</li>
            <li>JAP Upload Tool login</li>
            <li>Contact</li>
            <li>Feedback</li>
        </ul> */}
        
        <div className='flex flex-row '>
        <select className="p-2.5  text-gray-500 bg-white border rounded-full shadow-sm outline-none appearance-none focus:border-indigo-600">
                <option>Select Language</option>
                <option>English</option>
                <option>French</option>
                <option>Spanish</option>
        </select>
        <Search/>
          {/* <img src={logo} alt="logo" width='100%' height='30%' /> */}
        </div>
    </div>
  )
}

export default Nav