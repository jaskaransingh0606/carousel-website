import React from 'react'
import erpApp from '../assets/erpApp.png';

function Page6() {
  return (
    <div className='flex flex-row h-screen w-screen '>

    <div className=' flex flex-col w-2/4 space-y-16 bg-orange-500 justify-end  '>

      <div className='flex flex-col space-y-6 mb-10 pl-16'>
        <div><p className='font-extrabold text-5xl'>ABC 678</p></div>
        <div><p className='text-xl font-normal'>We are the best <br /> web development company <br /> in the world</p></div>
      </div>

      <div className='flex flex-row space-x-56 align-center  pb-24 pl-16'>
        <div><p className='font-medium text-xl'>View Case Study ➡</p></div>
        <div><p className='font-medium text-xl'>S K I P</p></div>
      </div>

    </div>


    <div className='w-2/4 bg-yellow-600 relative'>
     
      <img className='h-full absolute w-full ' src={erpApp}></img>
      
      
     
      

      
    </div>


  </div>
  )
}

export default Page6
