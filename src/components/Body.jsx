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
    
    <section className="overflow-hidden flex flex-col justify-center items-center relative h-[110dvh] bg-cover bg-center"
      style = {{
      backgroundImage: `url("/banner (2).png")`
      }}>

      
      <section className=' flex mx-auto w-[80%] flex-col items-center gap-y-[10vh] justify-between'>
        <fieldset className="flex justify-center text-center sm:w-[60%] mt-2rem w-[100%] mx-auto items-center  flex-col" >
          <h1 className='font-bold text-sm-20 text-white text-6xl'>Search Your Next <span className=' mt-4 sm:mt-8 inline-block text-amber-300'>Home</span></h1>
          <p className='text-white w-[130%] text-base lg:text-xl  mb-3  px-2.5 mt-4 sm:mt-8 opacity-80'> Find new & featured property located in your local city.</p>
        </fieldset>
        <fieldset className='bg-white w-[80vw] items-center justify-center rounded-sm sm:rounded-lg mt-[10vh] p-4 gap-0.5 sm:gap-4 grid grid-rows-4  sm:grid-cols-4 sm:grid-rows-1 '>
          {placeHolders.map((detail)=>{
             return (<form key={detail.id} >
             <div className=' min-w-[100%] '>
               <label >
                 <p className='lg:text-lg text-xstext-grey '>{detail.label}</p>
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
      </section>

      
          

  

      
    </section>
    
    
  )
}

export default Body
