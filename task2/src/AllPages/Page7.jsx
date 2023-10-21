import React from 'react'
import karavan2 from '../assets/karavan_2.png';
import karavanNetworking from '../assets/karavanNetworking.png';
import socialNetworking from '../assets/socialNetworking.png';
import karavanAppScreen from '../assets/karavanAppScreen.png';
import developerSocial from '../assets/developerSocial.png';
import paths7 from '../assets/paths7.svg';
import { motion } from 'framer-motion';
function Page7() {
  return (
    <div className='flex flex-row h-screen w-screen relative '>

      <div className=' flex flex-col w-2/4 space-y-16 bg-blue-950 justify-end  '>

        <div className='flex flex-col space-y-6 mb-10 pl-16'>
          <div><p className='font-extrabold text-5xl'>ABC 567</p></div>
          <div><p className='text-xl font-normal'>We are the best <br /> web development company <br /> in the world</p></div>
        </div>

        <div className='flex flex-row space-x-56 align-center  pb-24 pl-16'>
          <div><p className='font-medium text-xl'>View Case Study ➡</p></div>
          <div><p className='font-medium text-xl'>S K I P</p></div>
        </div>

      </div>


      <div className='w-2/4 bg-sky-500 relative'>
        <motion.img 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1 }}
        className='h-2/4 absolute top-0 left-20 ' src={karavanAppScreen}>

        </motion.img>

        <motion.img
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1 }} 
        className='h-2/4 absolute bottom-0 left-20 ' src={karavan2}>

        </motion.img>

        <motion.img 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1 }}
        className='h-2/4 absolute bottom-0 left-80 ' src={karavanNetworking}>

        </motion.img>

        <motion.img 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1 }}
        className='h-2/4 absolute top-0 left-80  ' src={socialNetworking}>

        </motion.img>

        <motion.img 
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "tween", duration: 1 }}
        className='h-2/4  absolute right-2 top-40' src={developerSocial}>

        </motion.img>


      </div>

      <div className='absolute left-4/10 top-24 '>
        <img className='h-64 w-64 rounded-full' src={paths7}></img>

        <motion.div
        initial={{ opacity: 0.25 }}
        animate={{ opacity: 1 }}
        transition={{ type: "tween", duration: 0.75 }}>
          <p className='absolute bottom-40 left-0 '>Text Headline</p>
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
          <p className='absolute bottom-20 left-16'>Footer Headline</p>
        </motion.div>
      </div>
    </div>
  )
}

export default Page7
