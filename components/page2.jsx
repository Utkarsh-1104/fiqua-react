import React from 'react'
import Cert from '../assets/certi.png'
import Leaf from '../assets/leaf.png'
import High from '../assets/high.png'

const Page2 = () => {
    return (
        <div className="bg-[#0A0C12] pt-20">
            <div className="-mt-40 flex gap-x-16 ps-48 pe-48">
                <div className="box-content w-auto h-auto ps-10 border-4 pb-8 border-sky-600 bg-[#0F121A]">
                    <img src={Cert} className="w-14 h-12 mt-10 mb-5" alt="" />
                    <p className="text-white text-3xl font-bold align-middle">Certified Farm</p>
                    <p className="text-white mb-5">Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    <a href="#" className="text-[#6AC0E9] hover:text-amber-400">Read More</a>
                </div>
                <div className="box-content w-auto h-auto ps-10 border-4 border-sky-600 bg-[#0F121A]">
                    <img src={Leaf} className="w-14 h-12 mt-10 mb-5" alt="" />
                    <p className="text-white text-3xl font-bold align-middle">Organic Farm</p>
                    <p className="text-white mb-5 ">Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    <a href="#" className="text-[#6AC0E9] hover:text-amber-400">Read More</a>
                </div>
                <div className="box-content w-auto h-auto ps-10 border-4 border-sky-600 bg-[#0F121A]">
                    <img src={High} className="w-14 h-12 mt-10 mb-5" alt="" />
                    <p className="text-white text-3xl font-bold align-middle">High quality</p>
                    <p className="text-white mb-5 ">Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
                    <a href="#" className="text-[#6AC0E9] hover:text-amber-400">Read More</a>
                </div>
            </div>
            <div className="flex place-content-center gap-x-6 pt-10 pb-24">
                <p className="text-white">Don't hesitate to contact us to get better Information.</p>
                <a href="#" className="text-[#6AC0E9] hover:text-amber-400">Contact Our Sales</a>
            </div>
        </div>
    )
}

export default Page2;