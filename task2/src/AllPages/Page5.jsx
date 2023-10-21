import React from 'react'
import entrepreneur from '../assets/entrepreneur.png';
import melltoo2 from '../assets/melltoo-img2.png';
import melltoo1 from '../assets/melltoo-img1.png';
import paths5 from '../assets/paths5.svg';
import { motion } from 'framer-motion';
function Page5() {
  return (
    <div className='flex flex-row h-screen w-screen  relative'>

      <div className=' flex flex-col w-2/4 space-y-16 bg-emerald-800 justify-end  '>

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


      <div className='w-2/4 bg-emerald-600 relative'>

        <motion.img
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.5 }}
          className='h-2/3 absolute top-32 right-10 ' src={melltoo1}>

        </motion.img>


        <motion.img
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 0.5 }}
          className='h-2/3 absolute top-40 left-40' src={melltoo2}>

        </motion.img>



      </div>
      <div className='absolute left-4/10 top-24 '>
        <img className='h-64 w-64 rounded-full' src={paths5}></img>
        <motion.div
        initial={{ opacity: 0.25 }}
        animate={{ opacity: 1 }}
        transition={{ type: "tween", duration: 0.75 }}>
          <p className='absolute bottom-40 left-0 '>Biggest Classifieds</p>
        </motion.div>

        <motion.div
         initial={{ y: -20 }}
         animate={{ y: 0 }}
         transition={{ type: "tween", duration: 0.5 }}>
          <p className='absolute bottom-28 left-0 text-4xl'>East Asia</p>
        </motion.div>

        <motion.div
        initial={{ opacity: 0.25 }}
        animate={{ opacity: 1 }}
        transition={{ type: "tween", duration: 0.75 }}>
          <p className='absolute bottom-20 left-16'>Countries</p>
        </motion.div>

      </div>

    </div>
  )
}

export default Page5
