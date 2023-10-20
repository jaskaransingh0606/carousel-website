import React from 'react'
// import paths from '../assets/paths.svg';

import dominosBread from '../assets/dominos-bread.png';
import domi1 from '../assets/domi-img1.png';
import dominosBreadSticks from '../assets/dominos-bread1.png';
import pizzaBox from '../assets/pizza_box.png';
import domi2 from '../assets/dominosImg2.png';

function Page1() {
  return (
    <div className='flex flex-row h-screen w-screen '>

      <div className=' flex flex-col w-2/4 space-y-16 bg-green-500 justify-end  '>

        <div className='flex flex-col space-y-6 mb-10 pl-16'>
          <div><p className='font-extrabold text-5xl'>ABC 456</p></div>
          <div><p className='text-xl font-normal'>We are the best <br /> web development company <br /> in the world</p></div>
        </div>

        <div className='flex flex-row space-x-56 align-center  pb-24 pl-16'>
          <div><p className='font-medium text-xl'>View Case Study ➡</p></div>
          <div><p className='font-medium text-xl'>S K I P</p></div>
        </div>

      </div>


      <div className='w-2/4 bg-red-600 relative'>
        <img className='h-2/6 absolute top-0 left-0' src={pizzaBox}></img>
        <img className='h-3/6 absolute top-28 right-32 ' src={domi2}></img>
        
        <img className='h-1/5 absolute right-16 top-0' src={dominosBread}></img>
        <img className='h-3/6 absolute bottom-0 left-8' src={domi1}></img>
        <img className='h-2/6  absolute right-0 bottom-0' src={dominosBreadSticks}></img>

        
      </div>


    </div>
  )
}

export default Page1
{/* <img src={paths}></img> */ }