import React from 'react'
import locationsData from '../LocationsData'

const Locations = () => {

 
  return (
    <>
    <section className='mt-[6vh]'>
      <div className='flex flex-col gap-y-3 justify-center items-center text-center mx-auto '>
          <h1 className='text-[#2d3954] text-4xl font-semibold'>Explore by Location</h1>
          <p className='w-[70vw] sm:w-[50vw] text-[#72809d]'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
      </div>

      <fieldset className='mt-[3rem]'>
        <main className='grid sm:grid-cols-2 lg:grid-cols-3 grid-col-1 gap-[3rem] gap-y-[4rem] w-[80%]  sm:w-[80%] pb-[4rem] mx-auto'>
           
       
              {locationsData.map((locationData)=>{
                return (
                  <div className='relative cursor-pointer '>
                        <img src= {locationData.img} alt='New Orleans' className='h-auto rounded-lg ' /> 
                        <div className='absolute ml-4 rounded-lg -mr-4 inset-0 -mb-4 mt-4 bg-black/50 hover:ml-5 hover:-mr-5  flex flex-col items-center justify-center transition-all duration-300 ease-in-out'> 
                        <h2 className='text-[#fff] font-medium text-lg'>
                        {locationData.location}
                        </h2>
                        <p className='text-[#fff] opacity-80 '> {locationData.explore} </p>
                    </div>
            </div> )
             })}

            
          
           
        </main>
      </fieldset>
      
    </section>
   
    </>
  )
}

export default Locations
