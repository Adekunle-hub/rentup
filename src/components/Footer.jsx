import React from 'react'
import whiteLogoImage from '../../public/logo-light (2).png'

const Footer = () => {
  return (
    <>
     <fieldset className='mt-[10vh]  '>
        <main className='bg-[#27AE60] max-w-[100%] '>
          <div className='w-[80%] py-[2rem] items-start max-w-full gap-y-3 flex-col sm:flex-row flex justify-between mx-auto  sm:items-center'>
              <div>
                <h1 className='sm:text-4xl  text-2xl font-bold text-white'>Do You Have Questions?</h1>
                <h5 className='text-white mt-[1rem] sm:mt-[0] text-base'> We'll help you to grow your career and growth.</h5>
              </div>
              <button className='text-xl px-[1rem] sm:px-[40px] text-[#27AE60] py-[1rem] sm:py-[20px]  bg-white border-[#27ae601f] border-3 rounded-[50px]'> Contact Us Today</button>
          </div>
        </main>
        <fieldset className='bg-[#1d2636] '>
        <section className=' flex sm:grid flex-wrap sm:grid-cols-2 sm:gap-[4rem] items-center sm:w-[90%] lg:w-[80%] justify-between w-[80%] mx-auto'>
          <article >
            <img className="w-[20%] sm:w-[30%] text-white mt-[3rem] " src={whiteLogoImage} alt="logo-image"/>
            <h2 className='text-white sm:text-2xl font-semibold'>Do You Need Help With Anything?</h2>
            <p className='text-gray-400 mt-[1rem]'>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>
            <div className='flex items-center w-[80%] sm:w-[100%] sm:gap-3 gap-1 mt-[2rem]'>
              <input className='bg-white sm:px-4 px-2 py-2  rounded-md' placeholder='Email Address' />
              <button className=' sm:px-4 px-2 py-2 rounded-md bg-[#27AE60] text-white'>Subscribe</button>
            </div>
          </article>
          <article className='flex w-[100%] gap-[0.5rem] sm:justify-between sm:gap-[1.5rem] pb-[2rem] pt-[4rem] gap-y-[3rem] flex-col-3'>
            <div className='flex flex-col'>
              <h3 className='text-white text-sm  font-semibold mb-[1rem]'>LAYOUTS</h3>
              <ul className='text-gray-400 sm:text-base text-sm flex flex-col gap-y-[1rem]'>
                <li>Home Page</li>
                <li>About Page</li>
                <li>Service Page</li>
                <li>Property Page</li>
                <li>Contact Page</li>
                <li>Single Blog</li>
              </ul>
            </div>
            <div className='flex items-center flex-col'>
              <h3 className='text-white text-sm   font-semibold mb-[1rem]'>ALL SECTIONS</h3>
              <ul className='text-gray-400 sm:text-base text-sm flex flex-col gap-y-[1rem]'>
                <li> Headers</li>
                <li> Features</li>
                <li>Attractive</li>
                <li>Testimonials</li>
                <li>Videos</li>
                <li>Footers</li>
              </ul>

            </div>
            <div className='flex items-center flex-col'>
              <h3 className='text-white text-sm  font-semibold mb-[1rem]'>ALL SECTIONS</h3>
              <ul className='text-gray-400 text-sm sm:text-base flex flex-col gap-y-[1rem]'>
                <li> Headers</li>
                <li> Features</li>
                <li>Attractive</li>
                <li>Testimonials</li>
                <li>Videos</li>
                <li>Footers</li>
              </ul>

            </div>
          </article>
        </section>
        <div className='flex flex-col items-center gap-[2rem] justify-center'>
          <div className='h-[1px] w-full bg-gray-400 text-white'></div>
          <p className='pb-[2rem] text-white font-base '>© 2025 RentUP. Designed By SoftCoder.</p>
        </div>
        </fieldset>


      </fieldset> 
    </>
  )
}

export default Footer
