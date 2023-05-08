import React from "react";
import Logo from '../assets/logo.png';

const Page8 = () => {
    return (
        <div>
            <div className="bg-[#0A0C12] h-auto w-auto">
                <div className="flex place-content-between pt-14">
                    <div className="ml-44">
                        <p className="text-[#6AC0E9] text-xl">Subscribe Newsletter</p>
                        <p className='text-white font-["Oswald"] text-[2.5rem]'>GET THE UPDATED NEWS</p>
                    </div>
                    <div className="flex gap-8 mr-44 pt-4 pb-16">
                        <form class="rounded">
                            <input className="rounded w-96 py-4 px-3 text-gray-700" id="username" type="text" placeholder="Email"></input>
                        </form>
                        <button className="bg-[#6AC0E9] text-white w-44 h-14 rounded">Subscribe Now</button>
                    </div>
                </div>
            </div>
            <div className="bg-black">
                <div className="flex gap-28 ml-40 pt-20 pb-16">
                    <div className="flex flex-col">
                        <p className='text-white text-2xl font-["Oswald"] pb-2 w-44'>Quick Links</p>
                        <p className="text-white pb-2">Home</p>
                        <p className="text-white pb-2">About Us</p>
                        <p className="text-white pb-2">Destination</p>
                        <p className="text-white pb-2">Contact</p>
                    </div>
                    <div className="flex flex-col">
                        <p className='text-white text-2xl font-["Oswald"] pb-2 w-44'>Other Pages</p>
                        <p className="text-white pb-2">Privacy & Policy</p>
                        <p className="text-white pb-2">Terms Of Use</p>
                        <p className="text-white pb-2">Disclaimer</p>
                        <p className="text-white pb-2">FAQ</p>
                    </div>
                    <div className="flex flex-col">
                        <p className='text-white text-2xl font-["Oswald"] pb-2'>Contact Info</p>
                        <p className="text-white pb-2">Jl. Raya Mas Ubud No.88, Gianyar, Bali, Indonesia – 80571</p>
                        <p className="text-white pb-2">+62 361 154874</p>
                        <p className="text-white pb-2">contact@domain.com</p>
                    </div>
                    <div className="flex flex-col w-auto">
                        <p className='text-white text-2xl font-["Oswald"] pb-2'>Closer With Us Now</p>
                        <p className="text-white pb-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                        <button className="bg-[#6AC0E9] text-white w-40 h-14 rounded-full">+62 361 154874</button>
                    </div>
                </div>
            </div>
            <div className="bg-[#0C151B]">
                <div className="flex ml-40 py-10">
                    <img src={Logo} className="w-[133px] h-[42px]" alt="" />
                    <p className="text-white text-sm ml-20">Design by Utkarsh Bajpai</p>
                    <p className="text-white text-sm ml-auto mr-48">Copyright © 2023. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}
export default Page8;