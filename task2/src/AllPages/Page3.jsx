import React from 'react'
import vemeBlockchain from '../assets/vemeBlockchain.png';
import vemeAppUi from '../assets/vemeAppUi.png';
import paths3 from '../assets/paths3.svg';
import { motion } from 'framer-motion';
function Page3() {
  return (
    <div className='flex flex-row h-screen w-screen relative '>

      <div className=' flex flex-col w-2/4 space-y-16 bg-violet-900 justify-end  '>

        <div className='flex flex-col space-y-6 mb-10 pl-16'>
          <div><p className='font-extrabold text-5xl'>ABC 234</p></div>
          <motion.div
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ type: "tween", duration: 1 }}>
          <div><p className='text-xl font-normal'>We are the best <br /> web development company <br /> in the world</p></div>
          </motion.div>
        </div>

        <div className='flex flex-row space-x-56 align-center  pb-24 pl-16'>
          <div><p className='font-medium text-xl'>View Case Study ➡</p></div>
          <div><p className='font-medium text-xl'>S K I P</p></div>
        </div>

      </div>


      <div className='w-2/4 bg-blue-950 relative'>

        <motion.img 
        initial={{y:-20,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{type:"tween",duration:1}}
        className='h-3/6 absolute -top-8 right-32 ' src={vemeAppUi}>

        </motion.img>


        <motion.img 
        initial={{y:20,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{type:"tween",duration:1}}
        className='h-3/6 absolute bottom-16 left-32' src={vemeBlockchain}>

        </motion.img>



      </div>
      <div className='absolute left-4/10 top-24 '>
        <img className='h-64 w-64 rounded-full' src={paths3}></img>

        <motion.div
          initial={{ opacity: 0.25 }}
          animate={{ opacity: 1 }}
          transition={{ type: "tween", duration: 0.75 }}>
          <p className='absolute bottom-40 left-0 '>The Next Big</p>
        </motion.div>

        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ type: "tween", duration: 0.5 }}>
          <p className='absolute bottom-28 left-0 text-4xl font-bold'>Blockchain</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.25 }}
          animate={{ opacity: 1 }}
          transition={{ type: "tween", duration: 0.75 }}>
          <p className='absolute bottom-20 left-16'>Revolution</p>
        </motion.div>
      </div>

    </div>
  )
}

export default Page3
