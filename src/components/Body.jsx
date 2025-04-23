import React from 'react'
import { FaSearch } from 'react-icons/fa';


const Body = () => {

  const placeHolders = [
  {
    id:1,
    label: "City/Street",
    placeholder: "Location"
  },
  {
    id:2,
    label: "Property Type",
    placeholder: "Property Type",
  },
  {
    id:3,
    label: "Price Range",
    placeholder: "Price Range",
  },
  ]

   return (
    
    <section className=" overflow-hidden relative h-[auto] bg-cover bg-center"
      style = {{
      backgroundImage: `url("/banner (2).png")`
      }}>
      <article className='flex flex-col items-center gap-[1rem]'>
      <div className=" absolute inset-0 flex flex-col gap-[1rem] justify-center items-center " >
        <h1 className='font-bold w-[90%]  sm:w-[60%]  md:w-[40%] xl:w-[37%] text-sm-20  text-center text-white text-6xl'>Search Your Next <span className=' mt-4 sm:mt-8 inline-block text-amber-300'>Home</span></h1>
        <p className='text-white text-center text-base lg:text-xl  mb-3  px-2.5 mt-4 sm:mt-8 opacity-80'> Find new & featured property located in your local city.</p>
      </div>

        <fieldset className='bg-white w-[80vw]  rounded-sm sm:rounded-lg  p-4 gap-0.5 sm:gap-4 grid grid-rows-4  sm:grid-cols-4 sm:grid-rows-1 absolute bottom-0'>
          {placeHolders.map((detail)=>{
             return (<form key={detail.id} >
             <div className=' min-w-[100%] '>
               <label >
                 <p className=' lg:text-lg text-xstext-grey '>{detail.label}</p>
                 <input className='border-1 border-gray-300 w-[100%] border-opacity-20  px-2 py-1' type='text' placeholder={detail.placeholder} />
               </label>
             </div>
             </form> )})}
           <div className='flex items-center gap-2  '>
            <h1 className=' w-[60%] text-base lg:text-xl lg:w-[85%] font-bold'>Advance Filter</h1>
            <div className=' bg-green-500 w-[40%] sm:w-[30%]  sm:p-2 flex  justify-center p-3 rounded-sm'>
            <FaSearch className='text-white'   />
            </div>
          
           </div>
      </fieldset>
          

      </article>

      
    </section>
    
    
  )
}

export default Body
