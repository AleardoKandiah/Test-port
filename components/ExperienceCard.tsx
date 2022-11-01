import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function ExperienceCard({}: Props) {
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
        src='https://cdn.discordapp.com/attachments/649311144342978610/1034756145715351562/unknown.png'
        alt=''
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-3xl font-light'>Juniour Web Developer</h4>
            <p className='font-bold text-21xl mt-1'>Internship</p>
            <div className='flex space-x-2 my-2'>
                <img 
                className='h-10 w-10 rounded-full'
                src="https://cdn.discordapp.com/attachments/649311144342978610/1034758603770449990/unknown.png"
                 alt="" 
                 />
                <img 
                className='h-10 w-10 rounded-full'
                src="https://cdn.discordapp.com/attachments/649311144342978610/1034757524064309308/unknown.png"
                 alt="" 
                 />
                <img 
                className='h-10 w-10 rounded-full'
                src="https://cdn.discordapp.com/attachments/649311144342978610/1034759197809717308/unknown.png"
                 alt="" 
                 />    
            </div>
            <p className='uppercase py-3 text-gray-300'>
                06/2022-07/2022
            </p>

            <ul className='list-disc space-y-2 ml-5 text-lg'>
                <li>Team of 3 engineers</li>
                <li>Startup company webpage development</li>
                <li>React/JS focussed role</li>
            </ul>

        </div>
    </article>
  )
}
