import React from 'react'
import erpApp from '../assets/erpApp.png';
import paths6 from '../assets/paths6.svg';
import { motion } from 'framer-motion';
function Page6() {
  return (
    <div className='flex flex-row h-screen w-screen relative'>

      <div className=' flex flex-col w-2/4 space-y-16 bg-blue-900 justify-end  '>

        <div className='flex flex-col space-y-6 mb-10 pl-16'>
          <motion.div
          initial={{ y: 10 }}
          animate={{ y: 0 }}
          transition={{ type: "tween", duration: 1 }}>
            <div><p className='font-extrabold text-5xl'>ABC 678</p></div>
          </motion.div>
          <div><p className='text-xl font-normal'>We are the best <br /> web development company <br /> in the world</p></div>
        </div>

        <div className='flex flex-row space-x-56 align-center  pb-24 pl-16'>
          <div><p className='font-medium text-xl'>View Case Study ➡</p></div>
          <div><p className='font-medium text-xl'>S K I P</p></div>
        </div>

      </div>


      <div className='w-2/4 bg-yellow-600 relative'>

        <motion.img
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "tween", duration: 1 }}
          className='h-full absolute w-full ' src={erpApp}>

        </motion.img>






      </div>

      <div className='absolute left-4/10 top-24 '>
        <img className='h-64 w-64 rounded-full' src={paths6}></img>

        <motion.div
          initial={{ opacity: 0.25 }}
          animate={{ opacity: 1 }}
          transition={{ type: "tween", duration: 0.75 }}>
          <p className='absolute bottom-40 left-0 '>Developing ERP</p>
        </motion.div>

        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ type: "tween", duration: 0.5 }}>
          <p className='absolute bottom-28 left-0 text-4xl'>Text Headline</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.25 }}
          animate={{ opacity: 1 }}
          transition={{ type: "tween", duration: 0.75 }}>
          <p className='absolute bottom-20 left-16'>in furniture industry</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Page6
