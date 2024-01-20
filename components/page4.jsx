import React from 'react';
import Bgimg from '../assets/sec32.jpg'

const Page4 = () => {
    return (
        <div className="bg-fixed bg-cover brightness-75 h-[40rem]" style={{backgroundImage:`url(${Bgimg})`}}>
            <p className="text-white text-center text-xl font-bold pt-44">Contact Us</p>
            <p className='text-white text-center text-5xl font-bold font-["Oswald"] pt-6 mx-auto w-[40%]'>BECOME OUR CUSTOMER & GET SPECIAL OFFER EVERYDAY</p>
            <p className="text-white text-center w-[40%] mx-auto py-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <button className='text-white ml-[45rem] bg-transparent w-40 h-14 rounded-full border-white border-4 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-110 duration-200'>Contact Us</button>
        </div>
    )
}
export default Page4;