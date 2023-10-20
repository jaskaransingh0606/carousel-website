import React from 'react'
import karavan2 from '../assets/karavan_2.png';
import karavanNetworking from '../assets/karavanNetworking.png';
import socialNetworking from '../assets/socialNetworking.png';
import karavanAppScreen from '../assets/karavanAppScreen.png';
import developerSocial from '../assets/developerSocial.png';

function Page7() {
  return (
    <div className='flex flex-row h-screen w-screen '>

      <div className=' flex flex-col w-2/4 space-y-16 bg-green-500 justify-end  '>

        <div className='flex flex-col space-y-6 mb-10 pl-16'>
          <div><p className='font-extrabold text-5xl'>ABC 567</p></div>
          <div><p className='text-xl font-normal'>We are the best <br /> web development company <br /> in the world</p></div>
        </div>

        <div className='flex flex-row space-x-56 align-center  pb-24 pl-16'>
          <div><p className='font-medium text-xl'>View Case Study ➡</p></div>
          <div><p className='font-medium text-xl'>S K I P</p></div>
        </div>

      </div>


      <div className='w-2/4 bg-red-600 relative'>
        <img className='h-2/4 absolute top-0 left-20 ' src={karavanAppScreen}></img>
        <img className='h-2/4 absolute bottom-0 left-20 ' src={karavan2 }></img>
        
        <img className='h-2/4 absolute bottom-0 left-80 ' src={karavanNetworking}></img>
        <img className='h-2/4 absolute top-0 left-80  ' src={socialNetworking}></img>
        <img className='h-2/4  absolute right-2 top-40' src={developerSocial}></img>

        
      </div>


    </div>
  )
}

export default Page7
