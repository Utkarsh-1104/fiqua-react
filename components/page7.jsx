import React from "react";
import Hfish from '../assets/hand-fish.jpg';
import Prawn from '../assets/prawn.jpg';
import Nfish from '../assets/fish-net.jpg';
import Ffish from '../assets/fish-fish.jpg';

const Page7 = () => {
    return (
        <div className="bg-gradient-to-br from-[#021824] to-[#11161E]">
            <div className="ml-52 pt-28 pe-36">
                <p className="text-[#6AC0E9] pb-4">Our News</p>
                <div className="flex place-content-between">
                    <p className='text-white font-["Oswald"] text-[2.5rem]'>NEWS & ARTICLE</p>
                    <button className="bg-[#6AC0E9] text-white w-40 h-14 rounded-full transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200">View More</button>
                </div>
            </div>
            <div className="flex place-content-center ml-48 pt-16">
                <div className="flex gap-7">
                    <img src={Hfish} className="w-[285px] h-[216px]" alt="" />
                    <div className="box-content h-auto w-auto">
                        <p className='text-white font-["Oswald"] text-2xl w-[70%]'>Alaska salmon smashes records to end season on a high note</p>
                        <p className="text-white w-[70%] text-base pt-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                        <a href="%" className='text-[#6AC0E9] hover:text-amber-400'>Read More</a>
                    </div>
                </div>
                <div className="flex gap-7">
                    <img src={Prawn} className="w-[285px] h-[216px]" alt="" />
                    <div className="box-content h-auto w-auto">
                        <p className='text-white font-["Oswald"] text-2xl w-[70%]'>Can mussels improve the palatability of tiger prawn feeds?</p>
                        <p className="text-white w-[70%] text-base pt-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                        <a href="%" className='text-[#6AC0E9] hover:text-amber-400'>Read More</a>
                    </div>
                </div>
            </div>
            <div className="flex place-content-center ml-48 pt-16 pb-32">
                <div className="flex gap-7">
                    <img src={Nfish} className="w-[285px] h-[216px]" alt="" />
                    <div className="box-content h-auto w-auto">
                        <p className='text-white font-["Oswald"] text-2xl w-[70%]'>Finances spark sea change in EU seafood purchasing patterns</p>
                        <p className="text-white w-[70%] text-base pt-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                        <a href="%" className='text-[#6AC0E9] hover:text-amber-400'>Read More</a>
                    </div>
                </div>
                <div className="flex gap-7">
                    <img src={Ffish} className="w-[285px] h-[216px]" alt="" />
                    <div className="box-content h-auto w-auto">
                        <p className='text-white font-["Oswald"] text-2xl w-[70%]'>The World-Famous Sardine Migration Explained by Genomics</p>
                        <p className="text-white w-[70%] text-base pt-4">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
                        <a href="%" className='text-[#6AC0E9] hover:text-amber-400'>Read More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Page7;