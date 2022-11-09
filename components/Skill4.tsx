import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean;

}

function skill4({directionLeft}: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.img
            initial={{
                x : directionLeft ? -200: 200,
                opacity : 0,
            }}
            transition={{ duration: 1 }}
            whileInView ={{ opacity: 1, x: 0 }}
            src="https://cdn.discordapp.com/attachments/649311144342978610/1034768655008940062/unknown.png"
            className='rounded-full border border-gray-500 object-cover w-16 h-16 
            md:w-18 md:h-18 xl:w-22 xl:h-22 filter group-hover:grayscale transition duration-300 ease-in-out'
        />        
        {/* <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
         ease-in-out group-hover:bg-white h-16 w-16 md:w-18 md:h-18 xl:w-22 xl:h-22 rounded-full z-0'>
            <div className='flex items-center justify-center h-full'>
                <p className='text-1xl font-bold text-black opacity-100'>90%</p>
            </div>
        </div> */}
    </div>
  )
}

export default skill4



