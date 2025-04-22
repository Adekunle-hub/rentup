import React from 'react'
import { FaTrophy, FaBriefcase, FaHeart , FaLightbulb} from 'react-icons/fa'

const awardsData = [{
  id:1,
  icon: <FaTrophy />,
  awardNumber: '32M',
  text: "Blue Burmin Award"
},
{
  id:2,
  icon: <FaBriefcase />,
  awardNumber: '43M',
  text: "Mimo X11 Award"
},
{
  id:3,
  icon: <FaHeart />,
  awardNumber: '51M',
  text: "Australian UGC Award"
},
{
  id:4,
  icon: <FaLightbulb />,
  awardNumber: '42M',
  text: "IITCA Green Award"
},
]

const Awards = () => {
  return (
    <>
      <section className='mt-[3vh] mb-[1rem] max-w-[100%] pb-[4vh]  bg-[#122947]'>
          <div className='flex flex-col gap-2 items-center pt-[2rem] mx-auto  w-[90%] sm:w-[45%] justify-center'>
          <p className='pt-[3vh] sm:[5vh] sm:pt-[8vh] text-base text-[#27ae60]'>Our Awards </p>
          <h1 className="text-white w-[80%] sm:w-fit text-xl sm:text-3xl font-normal text-center ">Over 1,24,000+ Happy User Being With Us Still They Love Our Services</h1>
          </div>

          <fieldset className=' '>
            <div className='mx-auto  mt-[3rem] gap-y-8  grid grid-cols-2 gap-[1rem] sm:grid-cols-4 sm:gap-[30px] justify-between w-[80%]'>
             {awardsData.map((award)=>{
              return (
                <div key={award.id} className='mx-auto flex items-center justify-center flex-col '>
                  <div className='bg-[#FFFFFF1A]  flex items-center justify-center rounded-[4%_50%] h-[100px] w-[100px]  text-4xl text-white '>
                    {award.icon}    
                  </div>
                <h1 className='text-white mt-2 font-semibold text-left item-center text-3xl sm:text-4xl' >{award.awardNumber}</h1>
                <p className='text-gray-500 mx-0 text-center text-base'>{award.text}</p>
              </div>

              )
             })} 
              
             
             
            </div>
           
          </fieldset>
        
      </section>
    </>
  )
}

export default Awards
