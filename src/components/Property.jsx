import React from 'react'
import { FaHeart } from 'react-icons/fa'
import { IoLocationSharp } from 'react-icons/io5'
import Properties  from '../Properties.js'


const Property = () => {
  return (
    <>
    <section className='mt-[5vh] '>
      <div className='flex flex-col w-[80vw] mx-auto mb-5  items-center justify-center '>
        <h1 className='text-center mb-3 text-[#2d3954] w-[100%] font-semibold text-4xl' >Recent Property Listed</h1>
        <p className='text-center w-[100%] sm:w-[60%] text-[#72809d] text-sm  sm:text-base '> Lorem ipsum dolor sit amet, consecteur adipising elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam.</p>
      </div>
      <fieldset className='mx-auto grid  grid-col-1 sm:grid-cols-3 gap-y-[1rem] sm:gap-8 gap-3 w-[80%]'>
        {Properties.map((property) =>{
          return (
           <div key={property.id}  className='shadow-2xl my-[1rem]'>
          <img className='' src={property.img} />
          <div className='pt-[2rem] flex  justify-between items-center mx-auto ] w-[80%]'>
            <p className={`font-semibold py-1 px-0 sm:px-3 text-sm
             ${property.checkSale 
              ? "bg-[rgba(37,181,121,0.1)] text-[#25B579]"
              : "bg-[rgba(255,152,0,0.1)] text-[#ff9800]"}`}>
              {property.usedFor}
            </p>
            <FaHeart className='text-[#bec7d8] text-xl' />
          </div>
        <div className='mx-auto w-[80%] mt-[0.5rem] mb-[2rem] '>
            <p className='font-semibold '> {property.name}</p>
            <div className='text-[#72809d]'>  <IoLocationSharp className='inline-block'/> <p className='underline sm:no-underline decoration-dotted decoration-[#bec7d8] inline-block'>{property.location}</p></div>
        </div>
      <div className='bg-[#bec7d8]  w-full h-[1px] '></div>
        <div className='mx-auto w-[85%] sm:[95%] lg:[w-85%] sm:flex-col lg:flex-row flex flex-row justify-between py-4  items-center '>
            <div className='flex items-center'>
              <button className=' px-8 py-4 lg:px-8 lg:py-4sm:py-2 sm:px-4 rounded-full font-semibold text-lg sm:text-xl text-white bg-[#27ae60]'>${property.price} </button><span> /sqft</span>
            </div>
            <p className='inline-block font-semibold '>{property.purpose}</p>
        </div>
        </div>)
        })}
       
      </fieldset>
    </section>
    </>
  )
}

export default Property
