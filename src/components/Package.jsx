import React from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa'

const Package = () => {
  return (
    <section className='bg-white  '>

      <div className='  '>
        <header className='text-[#2d3954] mx-auto flex flex-col items-center gap-y-4 text-center pt-[2rem] sm:pt-[4rem] sm:w-[50%] w-[80%]'>
          <h1 className='text-6xl font-semibold  '>
            Select Your Package
          </h1>
          <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores</p>
        </header>
      </div>
     


      <fieldset className='flex flex-col flex-wrap  items-center justify-center gap-y-5 pb-[2rem] sm:flex-row mx-auto mt-[4rem] w-[80%] pl-0' >
        <div className='flex-1 mr-4 shadow-[0px_0px_20px_0px_rgba(112,121,138,0.18)]  rounded-md flex flex-col text-center gap-y-3.5 '>
          <h1 className='pt-[2rem] text-2xl m-0 p-0 font-extrabold text-center'> Basic </h1>
          <h1 className='text-6xl text-center font-extrabold'>
            <span className='text-3xl font-bold m-0 p-0'>
               $
            </span> 
              29 
            </h1>
          <p>per user, per month</p>
          <ul className='flex flex-col gap-y-3'>
            <li className=' mx-[2rem] flex items-center gap-3'>
               <label className='inline-block bg-[rgba(39,174,96,0.12)] rounded-[50%] p-2 '> 
                <FaCheck className='text-[#27ae60]' />
                </label> 
              <p className='inline-block text-base'>
               99.5% Uptime Guarantee
                </p>
            </li>
            <li className=' mx-[2rem] flex items-center gap-3'>
               <label className='inline-block bg-[rgba(39,174,96,0.12)] rounded-[50%] p-2 '> 
                <FaCheck className='text-[#27ae60]' />
                </label> 
              <p className='inline-block text-base'>
              120GB CDN Bandwidth
                </p>
            </li>
            <li className=' mx-[2rem] flex items-center gap-3'>
               <label className='inline-block bg-[rgba(39,174,96,0.12)] rounded-[50%] p-2 '> 
                <FaCheck className='text-[#27ae60]' />
                </label> 
              <p className='inline-block text-base'>
              5GB Cloud Storage
                </p>
            </li>
            <li className=' mx-[2rem] flex items-center gap-3'>
               <label className='inline-block bg-[rgba(220,53,69,0.12)] rounded-[50%] p-2 '> 
                <FaTimes className='text-[#dc3545]' />
                </label> 
              <p className='inline-block text-base'>           
                    Personal Help Support
              </p>
            </li>
            <li className=' mx-[2rem] flex items-center gap-3'>
               <label className='inline-block bg-[rgba(220,53,69,0.12)] rounded-[50%] p-2 '> 
                <FaTimes className='text-[#dc3545]' />
                </label> 
              <p className='inline-block text-base'>
              Enterprise SLA
              </p>
            </li>

          </ul>

          <button className='w-[80%] mx-auto cursor-pointer  px-[40px]  py-[20px] bg-[#ffffff] border-2 rounded-[50px] border-[#27ae601f] text-[#27ae60] text-lg font-bold mb-[3rem]'>
            Start Basic
          </button>
        </div>
        <div className=' flex-1 mr-4 shadow-[0px_0px_20px_0px_rgba(112,121,138,0.18)]  rounded-md flex flex-col text-center gap-y-3.5 '>
          <button className='cursor-pointer rounded-[50px] mt-[2rem] mx-auto font-bold p-2 bg-[#ff6922] text-white w-[50%]'>Best Value </button>
          <h1 className='pt-[0.5rem] text-2xl m-0 p-0 font-extrabold text-center'> Standard </h1>
          <h1 className='text-6xl text-center font-extrabold'>
            <span className='text-3xl font-bold m-0 p-0'>
               $
            </span> 
              49 
            </h1>
          <p>per user, per month</p>
          <ul className='flex flex-col gap-y-3'>
            <li className=' mx-[2rem] flex items-center gap-3'>
               <label className='inline-block bg-[rgba(39,174,96,0.12)] rounded-[50%] p-2 '> 
                <FaCheck className='text-[#27ae60]' />
                </label> 
              <p className='inline-block text-base'>
               99.5% Uptime Guarantee
                </p>
            </li>
            <li className=' mx-[2rem] flex items-center gap-3'>
               <label className='inline-block bg-[rgba(39,174,96,0.12)] rounded-[50%] p-2 '> 
                <FaCheck className='text-[#27ae60]' />
                </label> 
              <p className='inline-block text-base'>
              120GB CDN Bandwidth
                </p>
            </li>
            <li className=' mx-[2rem] flex items-center gap-3'>
               <label className='inline-block bg-[rgba(39,174,96,0.12)] rounded-[50%] p-2 '> 
                <FaCheck className='text-[#27ae60]' />
                </label> 
              <p className='inline-block text-base'>
              5GB Cloud Storage
                </p>
            </li>
            <li className=' mx-[2rem] flex items-center gap-3'>
               <label className='inline-block bg-[rgba(39,174,96,0.12)] rounded-[50%] p-2 '> 
                <FaCheck className='text-[#27ae60]' />
                </label> 
              <p className='inline-block text-base'>           
                    Personal Help Support
              </p>
            </li>
            <li className=' mx-[2rem] flex items-center gap-3'>
               <label className='inline-block bg-[rgba(220,53,69,0.12)] rounded-[50%] p-2 '> 
                <FaTimes className='text-[#dc3545]' />
                </label> 
              <p className='inline-block text-base'>
              Enterprise SLA
              </p>
            </li>

          </ul>

          <button className='w-[80%] mx-auto  px-[40px]  py-[20px] bg-green-600 border-2 rounded-[50px] border-[#27ae601f] text-white text-lg cursor-pointer font-bold mb-[3rem]'>
            Start Standard
          </button>
        </div>
        <div className='flex-1 shadow-[0px_0px_20px_0px_rgba(112,121,138,0.18)]  rounded-md flex flex-col text-center gap-y-3.5 '>
          <h1 className='pt-[2rem] text-2xl m-0 p-0 font-extrabold text-center'> Platinum </h1>
          <h1 className='text-6xl text-center font-extrabold'>
            <span className='text-3xl font-bold m-0 p-0'>
               $
            </span> 
              79 
            </h1>
          <p> 2 user, per month</p>
          <ul className='flex flex-col gap-y-3'>
            <li className=' mx-[2rem] flex items-center gap-3'>
               <label className='inline-block bg-[rgba(39,174,96,0.12)] rounded-[50%] p-2 '> 
                <FaCheck className='text-[#27ae60]' />
                </label> 
              <p className='inline-block text-base'>
               100% Uptime Guarantee
                </p>
            </li>
            <li className=' mx-[2rem] flex items-center gap-3'>
               <label className='inline-block bg-[rgba(39,174,96,0.12)] rounded-[50%] p-2 '> 
                <FaCheck className='text-[#27ae60]' />
                </label> 
              <p className='inline-block text-base'>
             200GB CDN Bandwidth
                </p>
            </li>
            <li className=' mx-[2rem] flex items-center gap-3'>
               <label className='inline-block bg-[rgba(39,174,96,0.12)] rounded-[50%] p-2 '> 
                <FaCheck className='text-[#27ae60]' />
                </label> 
              <p className='inline-block text-base'>
              20GB Cloud Storage
                </p>
            </li>
            <li className=' mx-[2rem] flex items-center gap-3'>
               <label className='inline-block bg-[rgba(39,174,96,0.12)] rounded-[50%] p-2 '> 
                <FaCheck className='text-[#27ae60]' />
                </label> 
              <p className='inline-block text-base'>           
                    Personal Help Support
              </p>
            </li>
            <li className=' mx-[2rem] flex items-center gap-3'>
               <label className='inline-block bg-[rgba(39,174,96,0.12)] rounded-[50%] p-2 '> 
                <FaCheck className='text-[#27ae60]' />
                </label> 
              <p className='inline-block text-base'>
              Enterprise SLA
              </p>
            </li>

          </ul>

          <button className='w-[80%] mx-auto  px-[40px]  py-[20px] bg-[#ffffff] border-2 rounded-[50px] border-[#27ae601f] text-[#27ae60] text-lg cursor-pointer font-bold mb-[3rem]'>
            Start Platinum
          </button>
        </div>
      </fieldset> 
    </section>
  )
}

export default Package
