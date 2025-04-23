import React, { useState } from 'react'
import { FaTimes, FaSignInAlt, FaBars } from 'react-icons/fa';
import headerLogo from "/logo (2).png"


const Header = () => {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <header header className="text-black  font-medium fixed z-10 w-[100vw] ">
      <section className=" mx-auto w-[100%] lg:w-[90%] bg-white px-1 pr-[2rem] sm:px-2 lg:px-3 flex flex-wrap items-center justify-between py-4">
        <div className='ml-10 w-[25%] sm:w-[17%] '>
          <img className="w-[90%]" src={headerLogo} alt="logo-image"/>
        </div>
        <div className="hidden md:flex w-[50vw] justify-between text-sm sm:text-base">
          {["Home", "About", "Services", "Blog", "Pricing", "Contact"].map((item) =>{
            return(
              <span
              key={item}
              className='cursor-pointer hover:bg-[#27ae60]  hover:text-white p-3'
              >
                {item}
              </span>
            )
          })}
        </div>
        <div className="hidden md:flex right:-1 items-center gap-x-4 mt-4 md:mt-0 ">
          <button className="cursor-pointer text-sm sm:text-base bg-[#27ae60] px-3 sm:px-4 py-2 flex items-center gap-x-2 text-white rounded-md font-semibold">
          <FaSignInAlt />
         <span  className="ml:2  sm:inline hidden">Sign in </span> 
          </button>
      </div>
        <div className='md:hidden'>
          <button className='cursor-pointer' onClick={()=>{setIsOpen(!isOpen)}}> 
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </section>

      {
          isOpen && 
          <>
             <div className="md:hidden text-green flex flex-col mx-auto bg-white text-sm sm:text-base">
          {["Home", "About", "Services", "Blog", "Pricing", "Contact"].map((item) =>{
            return(
              <span
              key={item}
              className='cursor-pointer hover:bg-[#27ae60] hover:text-white px-3 py-2 mx-auto '
              >
                {item}
              </span>
            )
          })}
          <div className="md:hidden flex flex-col mt-1 items-center md:mt-0 ">
            <button className="cursor-pointer text-sm sm:text-base mb-4 bg-[#27ae60] px-3 sm:px-4 py-2 flex items-center  text-white rounded-md font-semibold">
            <FaSignInAlt />
            <span  className="ml-2 inline ">Sign in </span> 
            </button>
        </div>
        </div>

          </>
        }
    </header>
  )
}

export default Header
