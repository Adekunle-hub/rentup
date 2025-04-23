import React from 'react'
import propertyImage1 from '/h1.png'


const  PropertyFeatures = () => {
  const propertyTypes = [{
    id:1,
    propertyImage:  {propertyImage1},
    propertyText: "Family House",
    propertyContent: "122 Property"
  },
  {
    id:2,
    propertyImage: "/h2.png",
    propertyText: "House & Villa",
    propertyContent: "155 Property"
  },
  {
    id:3,
    propertyImage: "/h3.png",
    propertyText: "Apartment",
    propertyContent: "300 Property"
  },
  {
    id:4,
    propertyImage: "/h4.png",
    propertyText: "Office & Studio",
    propertyContent: "80 Property"
  },
  {
    id:5,
    propertyImage:"/h6.png",
    propertyText: "Villa & Condo",
    propertyContent: "80 Property"
  },
]
 
  return (
    <>
    <fieldset className='bg-[#f7f9fc]'>
      <div className='pt-[10vh] flex justify-center items-center flex-col'>
        <h1 className='text-[#2d3954] w-[80%] text-center  text-4xl font-semibold'> Featured Property Types</h1>
        <p className='text-[#72809d] text-lg my-2.5'>Find All Type of Property.</p>
      </div>
      <section className='mt-[5vh] mx-auto w-[80%] grid mb-5  grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-4'>
          {propertyTypes.map(property=>{
            return (
              <div key={property.id} className='bg-white shadow-xl items-center pt-[15%] pb-6 justify-center flex flex-col '>
                <img className='w-[3.5rem]  h-[3.5rem]' key={property.id} src={property.propertyImage}/>
                <h1 className='font-bold mt-[1rem]'>{property.propertyText}</h1>
                <p className='text-sm'>{property.propertyContent}</p>     
              </div>
            )
          })}
      </section>
    </fieldset>
      
    </>
  )
}

export default PropertyFeatures
