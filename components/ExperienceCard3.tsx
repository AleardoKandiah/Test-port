import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function ExperienceCard3({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100
    opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
        initial={{
            y:-100,
            opacity:0,
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity:1, y: 0 }}
        viewport={{ once: true }}
        className="w-20 h-20 rounded-full xl:w-[120px] xl:h-[120px]
        object-cover object-center"
        src='https://cdn.discordapp.com/attachments/649311144342978610/1034754969653477376/unknown.png'
        alt=''
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-3xl font-light'>Software Engineer</h4>
            <p className='font-bold text-21xl mt-1'>100Devs</p>
            <div className='flex space-x-2 my-2'>
                <img 
                className='h-10 w-10 rounded-full'
                src="https://cdn.discordapp.com/attachments/649311144342978610/1034762195986296842/unknown.png"
                 alt="" 
                 />
                <img 
                className='h-10 w-10 rounded-full'
                src="https://cdn.discordapp.com/attachments/649311144342978610/1034763132771512330/unknown.png"
                 alt="" 
                 />
                <img 
                className='h-10 w-10 rounded-full'
                src="https://cdn.discordapp.com/attachments/649311144342978610/1034763396991692902/unknown.png"
                 alt="" 
                 />    
            </div>
            <p className='uppercase py-3 text-gray-300'>
               08-2022-Present
            </p>

            <ul className='list-disc space-y-2 ml-5 text-lg'>
                <li>Freelance Software Engineer</li>
                <li>Remote Working with Team across the world</li>
                <li>Building Full-Stack web apps</li>
            </ul>

        </div>
    </article>
  )
}

export default ExperienceCard3
