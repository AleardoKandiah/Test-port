import React from 'react'
import Skill from './Skill'
import { motion } from 'framer-motion'
import Skill2 from './Skill2'
import Skill3 from './Skill3'

type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}    
    className='flex relative flex-col text-center md:text-left xl:flex-row
    max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Skills
        </h3>

        <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
            Hover a skill for current procicency
        </h3>

        <div className='grid grid-cols-3 gap-5'>
            <Skill/>
            <Skill2/>
            <Skill3/>
        </div>
    </motion.div>
  )
}

export default Skills