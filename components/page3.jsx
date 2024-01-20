import React from 'react'
import Fish1  from '../assets/fish1.jpg'
import Count1 from '../assets/count1.png'
import Count2 from '../assets/count2.png'
import Vfish from '../assets/very-fish.jpg'
import Mfish from '../assets/man-fish.jpg'

const Page3 = () => {
    return (
        <div className="h-[100rem] bg-gradient-to-br from-[#021824] to-[#11161E]">
            <div className="flex gap-x-60 ms-52 pt-24 pb-20">
                <div>
                    <p className='text-white font-["Oswald"] text-5xl'>WELLCOME TO FIQUA</p>
                    <button className='bg-[#6AC0E9] w-40 h-14 rounded-full text-white mt-6 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200'>Learn More</button>
                </div>
                <p className='text-white basis-[40%]'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
            </div>
            <div className="flex place-content-center gap-x-10 mb-40">
                <img src={Fish1} className='w-[530px] h-[260px]' alt=""/>
                <img src={Count1} className='w-[265px] h-[267px]' alt="" />
                <img src={Count2} className='w-[265px] h-[267px]' alt="" />
            </div>
            <img src={Vfish} className='w-[650px] h-[640px] ms-[14rem]' alt="" />
            <img src={Mfish} className='w-[436px] h-[457px] ms-[14rem] border-y-[20px] relative -top-96 border-e-[20px] border-black' alt="" />
            <div className="box-content w-[32rem] h-[36rem] bg-white ps-14 absolute ml-[50rem] -mt-[66.7rem]">
                <p className='text-[#6AC0E9] font-bold pt-16 pb-4'>About Us</p>
                <p className='text-black font-["Oswald"] text-5xl leading-[3.5rem]'>WE PRODUCE THE BEST QUALITY SEA PRODUCT</p>
                <p className='text-[#0c0909a3] pt-5 w-[80%] pb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedo eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commod consequat</p>
                <div className="flex gap-32">
                    <div className="ml-5 flex-list text-[#0c0909a3]">
                        <ul style={{listStyleType:`disc`}}>
                            <li>High Quality</li>
                            <li>Fresh & Clean</li>
                            <li>Quality Certified</li>
                        </ul>
                    </div>
                    <div className="flex-list text-[#0c0909a3]">
                        <ul style={{listStyleType:`disc`}}>
                            <li>High Quality</li>
                            <li>Fresh & Clean</li>
                            <li>Quality Certified</li>
                        </ul>
                    </div>
                </div>
                <button className='bg-[#6AC0E9] w-40 h-14 rounded-full text-white mt-8 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200'>About Us</button>
            </div>
        </div>
        
    )
}
export default Page3;