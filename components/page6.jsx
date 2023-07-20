import React from "react";
import Ocean from '../assets/ocean.jpg';
import Aaron from '../assets/aaronsc.png';
import Thomas from '../assets/thomas.png';
import Patricia from '../assets/patricia.png';
import Sharon from '../assets/sharon.png';

const Page6 = () => {
    return (
        <div className="bg-fixed brightness-75 bg-cover h-auto pb-44" style={{backgroundImage:`url(${Ocean})`}}>
            <div className="text-center">
            <p className="text-[#6AC0E9] pt-36 font-bold pb-8">Testimonial</p>
            <p className='text-white font-["Oswald"] brightness-200 text-5xl'>WHAT OUR CUSTOMER SAY</p>
            <p className="text-white w-[30%] mx-auto pt-6">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
            </div>
            <div className="flex gap-9">
                <div className="box-content w-auto h-auto bg-white text-center py-9">
                    <img src={Aaron} className="h-[4.5rem] w-[4.5rem] rounded-full mx-auto" alt="" />
                    <p className='text-black font-["Oswald"] text-2xl font-bold pt-6'>Aaron Scott</p>
                    <p className='text-slate-900 mx-auto pt-6 w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                <div className="box-content w-auto h-auto bg-white text-center py-9">
                    <img src={Thomas} className="h-[4.5rem] w-[4.5rem] rounded-full mx-auto" alt="" />
                    <p className='text-black font-["Oswald"] text-2xl font-bold pt-6'>Thomas Larson</p>
                    <p className='text-slate-900 mx-auto pt-6 w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                <div className="box-content w-auto h-auto bg-white text-center py-9">
                    <img src={Patricia} className="h-[4.5rem] w-[4.5rem] rounded-full mx-auto" alt="" />
                    <p className='text-black font-["Oswald"] text-2xl font-bold pt-6'>Patricia Wade</p>
                    <p className='text-slate-900 mx-auto pt-6 w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
                <div className="box-content w-auto h-auto bg-white text-center py-9">
                    <img src={Sharon} className="h-[4.5rem] w-[4.5rem] rounded-full mx-auto" alt="" />
                    <p className='text-black font-["Oswald"] text-2xl font-bold pt-6'>Sharon Hunter</p>
                    <p className='text-slate-900 mx-auto pt-6 w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
            </div>
        </div>
    )
}
export default Page6;