import React from 'react'
import entrepreneur from '../assets/entrepreneur.png';
import melltoo2 from '../assets/melltoo-img2.png';
import melltoo1 from '../assets/melltoo-img1.png';
function Page5() {
  return (
    <div className='flex flex-row h-screen w-screen '>

    <div className=' flex flex-col w-2/4 space-y-16 bg-blue-500 justify-end  '>

      <div className='flex flex-col space-y-6 mb-10 pl-16'>
        <div><img src={entrepreneur}></img></div>
        <div><p className='font-extrabold text-5xl'>ABC 23478</p></div>
        <div><p className='text-xl font-normal'>We are the best <br /> web development company in the world</p></div>
      </div>

      <div className='flex flex-row space-x-56 align-center  pb-24 pl-16'>
        <div><p className='font-medium text-xl'>View Case Study ➡</p></div>
        <div><p className='font-medium text-xl'>S K I P</p></div>
      </div>

    </div>


    <div className='w-2/4 bg-grey-600 relative'>
     
      <img className='h-2/3 absolute top-32 right-20 ' src={melltoo1}></img>
      
      
      <img className='h-2/3 absolute top-32 left-20' src={melltoo2}></img>
      

      
    </div>


  </div>
  )
}

export default Page5
