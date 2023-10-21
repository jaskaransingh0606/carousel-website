import React from 'react'
import worldAward from '../assets/worldAward.png';
import nexgTv from '../assets/nexgTv.png';
import nexgTvEntertainment from '../assets/nexgTvEntertainment.png';
import paths4 from '../assets/paths4.svg';
import { motion } from 'framer-motion';

function Page4() {
  return (
    <div className='flex flex-row h-screen w-screen  relative'>

      <div className=' flex flex-col w-2/4 space-y-16 bg-purple-800 justify-end  '>

        <div className='flex flex-col space-y-6 mb-10 pl-16'>
          <div><img src={worldAward}></img></div>
          <div><p className='font-extrabold text-5xl'>ABC 123</p></div>
          <div><p className='text-xl font-normal'>We are the best <br /> web development company in the world</p></div>
        </div>

        <div className='flex flex-row space-x-56 align-center  pb-24 pl-16'>
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 1 }}>
            <div><p className='font-medium text-xl'>View Case Study ➡</p></div>
          </motion.div>
          <div><p className='font-medium text-xl'>S K I P</p></div>
        </div>

      </div>


      <div className='w-2/4 bg-purple-100 relative'>

        <motion.img
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.5 }}
          className='h-2/3 absolute top-32 right-20 ' src={nexgTv}>

        </motion.img>


        <motion.img
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 1 }}
          className='h-2/3 absolute top-32 left-20' src={nexgTvEntertainment}>

        </motion.img>



      </div>
      <div className='absolute left-4/10 top-24 '>
        <img className='h-64 w-64 rounded-full' src={paths4}></img>
        <motion.div
        initial={{ y: -10 }}
        animate={{ y: 0 }}
        transition={{ type: "tween", duration: 0.5 }}>
          <p className='absolute bottom-28 left-0 text-4xl'>25M+ Downloads</p>
        </motion.div>

        <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ type: "tween", duration: 0.5 }}>
          <p className='absolute bottom-20 left-16'>on appstore</p>
        </motion.div>
      </div>

    </div>
  )
}

export default Page4
