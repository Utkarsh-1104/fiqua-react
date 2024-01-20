import React from 'react'
import Logo from '../assets/logo.png'
import Bgimg from '../assets/background1.jpg'

const Page1 = () => {
  return (
    <div>
      <div style={{backgroundImage:`url(${Bgimg})`}} className='bg-cover pb-52'>
      <div className="flex items-center gap-x-[240px]">
        <img src={Logo} className="w-[8.5rem] ms-52 pt-5" alt='asdfa'/>
        <div className='flex gap-x-10 text-white pt-7'>
          <p className='hover:text-[#6AC0E9]'>Home</p>
          <p className='hover:text-[#6AC0E9]'>About Us</p>
          <p className='hover:text-[#6AC0E9]'>Contact</p>
          <p className='hover:text-[#6AC0E9]'>Services</p>
          <p className='hover:text-[#6AC0E9]'>Pages</p>
        </div>
      </div>
      <div className='text-white'>
        <p className='text-6xl font-bold font-["Oswald"] pt-[17rem] text-center'>FRESH FISH DELIVERED FOR YOU</p>
        <p className="text-center text-base w-[50%] mx-auto pt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor</p>
        <div className="flex ms-[39rem] pt-10">
          <button className="w-40 bg-[#6AC0E9] h-14 rounded-full me-7 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Learn More</button>
          <button className="w-40 bg-transparent h-14 rounded-full border border-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">Contact Us</button>
        </div>
      </div>
      </div>
    </div>
  )
}
export default Page1;