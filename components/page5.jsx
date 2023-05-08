import React from "react";
import Bara from '../assets/bara-fish.jpg';
import Oil from '../assets/fish-oil.jpg';
import Fresh from '../assets/fresh-fish.jpg';
import Weed from '../assets/sea-weed.jpg';
import Net from '../assets/net-fish.jpg';
import Boat from '../assets/boat.jpg'

const Page5 = () => {
    return (
        <div className="bg-gradient-to-br from-[#021824] to-[#11161E]">
            <p className="text-[#6AC0E9] font-bold text-center pt-32 pb-6">Our Product</p>
            <p className='text-white font-["Oswald"] text-[2.7rem] leading-[2.75rem] mx-auto text-center w-[35%]'>THE PRODUCT THAT WE PROVIDE FOR YOU IS HIGH QUALITY</p>
            <p className="text-white text-center w-[30%] mx-auto pt-5">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
            <img src={Bara} className='w-[1170px] h-[500px] mx-auto mt-48' alt="" />
            <div className="flex place-content-center gap-7 -mt-[40rem]">
                <img src={Fresh} className='w-[357px] h-[238px]' alt="" />
                <img src={Weed} className='w-[357px] h-[238px]' alt="" />
                <img src={Oil} className='w-[357px] h-[238px]' alt="" />
            </div>
            <div className="flex place-content-center gap-28 -mt-12">
                <div className="box-content w-[277px] h-[96px] bg-white text-center">
                    <p className='text-black font-["Oswald"] text-2xl pt-4'>Fresh Fish</p>
                    <a href="#" className='font-{"Oswald"] text-[#6AC0E9]'>View Shop</a>
                </div>
                <div className="box-content w-[277px] h-[96px] bg-white text-center">
                    <p className='text-black font-["Oswald"] text-2xl pt-4'>Sea Weed</p>
                    <a href="#" className='font-{"Oswald"] text-[#6AC0E9]'>View Shop</a>
                </div>
                <div className="box-content w-[277px] h-[96px] bg-white text-center">
                    <p className='text-black font-["Oswald"] text-2xl pt-4'>Fish Oil</p>
                    <a href="#" className='font-{"Oswald"] text-[#6AC0E9]'>View Shop</a>
                </div>
            </div>
            <div className="grid grid-cols-2 mt-96 pb-36">
                <div className="ml-44">
                    <p className="text-[#6AC0E9] font-bold pt-32 pb-6 mr-3">Why Choose Us</p>
                    <p className='text-white font-["Oswald"] text-[2.7rem] leading-[2.75rem] w-[100%]'>MEASURE THE BEST QUALITY FROM THE LAND & SEA</p>
                    <p className="text-white pt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                    <div class="flex justify-between mb-1 mt-6">
                        <span class="text-xl font-medium text-white dark:text-white">Experiences</span>
                        <span class='text-sm font-medium text-blue-700 dark:text-white mr-40'>90%</span>
                    </div>
                    <div class='bg-gray-200 rounded-full h-4 w-[80%] dark:bg-gray-700'>
                        <div class='bg-blue-600 rounded-full h-4' style={{width: `90%`}}></div>
                    </div>
                    <div class="flex justify-between mb-1 mt-6">
                        <span class="text-xl font-medium text-white dark:text-white">Product Variant</span>
                        <span class='text-sm font-medium text-blue-700 dark:text-white mr-40'>92%</span>
                    </div>
                    <div class='bg-gray-200 rounded-full h-4 w-[80%] dark:bg-gray-700'>
                        <div class='bg-blue-600 rounded-full h-4' style={{width: `92%`}}></div>
                    </div>
                    <div class="flex justify-between mb-1 mt-6">
                        <span class="text-xl font-medium text-white dark:text-white">Product Quality</span>
                        <span class='text-sm font-medium text-blue-700 dark:text-white mr-40'>90%</span>
                    </div>
                    <div class='bg-gray-200 rounded-full h-4 w-[80%] dark:bg-gray-700'>
                        <div class='bg-blue-600 rounded-full h-4' style={{width: `90%`}}></div>
                    </div>
                    <div class="flex justify-between mb-1 mt-6">
                        <span class="text-xl font-medium text-white dark:text-white">Affordable Price</span>
                        <span class='text-sm font-medium text-blue-700 dark:text-white mr-40'>89%</span>
                    </div>
                    <div class='bg-gray-200 rounded-full h-4 w-[80%] dark:bg-gray-700'>
                        <div class='bg-blue-600 rounded-full h-4' style={{width: `89%`}}></div>
                    </div>
                </div>
                <div className="grid grid-cols-2 m2-36">
                    <img src={Boat} className='ml-44 h-[550px]' style={{width: `700px`}} alt="" />
                    <img src={Net} className="h-[327px] w-[347px] border-[10px] border-black absolute ml-32 mt-14" alt="" />
                </div>
            </div>
        </div>
    )
}
export default Page5;