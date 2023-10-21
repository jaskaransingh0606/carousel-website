import React from 'react'
import { motion } from 'framer-motion';

import measureWeight from '../assets/measureWeight.png';
import nasaTracker from '../assets/nasaTracker.png';
import paths2 from '../assets/paths2.svg';


function Page2() {
  return (

    <div className='flex flex-row h-screen w-screen relative'>

      <div className=' flex flex-col w-2/4 space-y-16 bg-blue-950 justify-end  '>

        <div className='flex flex-col space-y-6 mb-10 pl-16'>
          <div><p className='font-extrabold text-5xl'>ABC 345</p></div>
          <motion.div
            initial={{ y: 5 }}
            animate={{ y: 0 }}
            transition={{ type: "tween", duration: 1 }}>
            <div><p className='text-xl font-normal'>We are the best <br /> web development company <br /> in the world</p></div></motion.div>
        </div>

        <div className='flex flex-row space-x-56 align-center  pb-24 pl-16'>
          
            <div><p className='font-medium text-xl'>View Case Study ➡</p></div>
          
          <div><p className='font-medium text-xl'>S K I P</p></div>
        </div>

      </div>


      <div className='w-2/4 bg-blue-900 relative'>


        <motion.img
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 1 }}
          className='h-3/6 absolute -top-8 right-32 ' src={measureWeight}>

        </motion.img>




        <motion.img
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 1 }}
          className='h-3/6 absolute bottom-16 left-32' src={nasaTracker}>

        </motion.img>




      </div>
      <div className='absolute left-4/10 top-24 '>
        <img className='h-64 w-64 rounded-full' src={paths2}></img>

        <motion.div
          initial={{ opacity: 0.25 }}
          animate={{ opacity: 1 }}
          transition={{ type: "tween", duration: 0.75 }}>
          <p className='absolute bottom-40 left-0 '>Powered by advance</p>
        </motion.div>


        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ type: "tween", duration: 0.5 }}>
          <p className='absolute bottom-24 left-0 text-7xl font-bold'>NASA</p>
        </motion.div>


        <motion.div
          initial={{ opacity: 0.25 }}
          animate={{ opacity: 1 }}
          transition={{ type: "tween", duration: 0.75 }}>
          <p className='absolute bottom-16 left-16'>algorithm</p>
        </motion.div>

      </div>

    </div>

  )
}

export default Page2
