import React from 'react'
import { FaCheckCircle, FaMapMarkerAlt, FaFacebook, FaLinkedin,FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope} from 'react-icons/fa'

import agentsData from '../AgentsData.jsx'

const Agents = () => {
  return (
    <section className='bg-[#f7f9fc] mt-[2rem] pb-[2rem] sm:pb-[4rem]  '>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-4xl text-[#2d3954] mt-6 sm:mt-[5rem] font-semibold'>Our Featured Agents</h1>
        <p className='text-[#72809d] text-center mt-4 w-[80%] sm:w-[80vw]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. </p>
      </div>

      <fieldset className='mt-[2rem] gap-[2rem] mx-auto w-[80%] grid sm:grid-cols-3 grid-cols-1 '>
        {
          agentsData.map((agentdata)=>{
            return (
              <div key={agentdata.id} className='bg-white rounded-md pb-[2rem] '>
              <button className='bg-[#ff6922] text-white font-semibold rounded-[50px] py-2 px-6 sm:mx-[2rem] mx-[1rem] cursor-pointer sm:mt-[2rem] mt-[1rem] mb-[1rem]'>
                 60 Listings
              </button>
            <div className='flex flex-col items-center justify-center'>
              <div className='relative'>
              <img src={agentdata.image} className='w-[110px] cursor-pointer p-2 border-[#edf0f5] border-[5px] h-[110px] rounded-[50%]' />
                  
              <FaCheckCircle   className='cursor-pointer absolute right-2 top-1/2 text-blue-600'/>
              </div>
        
              <label className='flex items-center text-[#2d3954] cursor-pointer '> <FaMapMarkerAlt /> {agentdata.location} </label>
              <h4 className='font-extrabold text-sm'>{agentdata.name}</h4>
          
            <div className='flex gap-3 sm:w-[80%] w-[50%] flex-wrap  mt-[1rem]  items-center justify-center mx-auto'>
                <span className='cursor-pointer bg-[#f4f5f7] w-[40px] flex items-center justify-center rounded-[50%] h-[40px]'>
                  <FaFacebook className='text-base text-gray-400 px-auto'/>
                </span>
                <span className='cursor-pointer bg-[#f4f5f7] w-[40px] flex items-center justify-center rounded-[50%] h-[40px]'>
                  <FaLinkedin className='cursor-pointer text-base text-gray-400 px-auto'/>
                </span>
                <span className='cursor-pointer bg-[#f4f5f7] w-[40px] flex items-center justify-center rounded-[50%] h-[40px]'>
                  <FaTwitter className=' cursor-pointer text-base text-gray-400 px-auto'/>
                </span>
                <span className=' bg-[#f4f5f7] w-[40px] flex items-center justify-center rounded-[50%] h-[40px]'>
                  <FaInstagram className='text-base cursor-pointer text-gray-400 px-auto'/>
                </span>
           
            </div>
  
            <div className='flex justify-between w-[70%] mt-[1.5rem]'>
              <button className='bg-green-500 py-3 cursor-pointer  text-white px-5 sm:px-6  gap-x-2 rounded-md flex flex-col sm:flex-row items-center justify-center'> <FaEnvelope /> <span className='text-sm font-bold'>Message</span> </button> 
              <button className='bg-black py-3 cursor-pointer rounded-md px-6 text-white'> <FaPhoneAlt/> </button>
            </div>
          </div>
          </div>
            )
          })
        }
      

      </fieldset>
     
    </section>
  )
}

export default Agents
