import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

function Projects({}: Props) {
    const projects = [1, 2, 3, 4, 5]
  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}    
    className='h-screen relative flex overflow-hidden flex-col text-left
    md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 
        text-2xl'>
            Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden
        snap-x snap-mandatory z-20  scrollbar-thin scrollbar-track-gray-400/20
        scrollbar-thumb-[#F7AB0A]/80'>

                <div className='w-screen flex-shrink-0 snap-center snap-m
                    flex flex-col space-y-1 items-center justify-center p-20
                    md:p-44 h-screen'>
                    <motion.img
                        initial={{ y:-300, opacity: 0}}
                        whileInView={{ opacity: 1, y:0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true}}
                     src="https://cdn.discordapp.com/attachments/649311144342978610/1034791252010467378/all-devices-black.png"
                    alt="" 
                    />

                    <div className='space-y-1 px-0 md:px-10 max-w-3xl'>
                        <h4 className='text-2xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>
                            Case Study 1 of 5:
                            </span>{" "}
                            UPS clone
                        </h4>

                        <p className='text-l text-center md:text-left'>
                            Lorem ipsum dolor sit amet consectetur adipisicing 
                            elit. Ipsum corrupti a dolore numquam atque ea
                        </p>
                    </div> 
                </div>

                {/* TWO */}
                <div className='w-screen flex-shrink-0 snap-center snap-m
                    flex flex-col space-y-5 items-center justify-center p-20
                    md:p-44 h-screen'>
                    <motion.img
                        initial={{ y:-300, opacity: 0}}
                        whileInView={{ opacity: 1, y:0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true}}
                     src="https://cdn.discordapp.com/attachments/649311144342978610/1034799025653813268/3-devices-black_1.png
                     "
                    alt="" 
                    />

                    <div className='space-y-1 px-0 md:px-10 max-w-3xl'>
                        <h4 className='text-2xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>
                            Case Study 1 of 5:
                            </span>{" "}
                            UPS clone
                        </h4>

                        <p className='text-l text-center md:text-left'>
                            Lorem ipsum dolor sit amet consectetur adipisicing 
                            elit. Ipsum corrupti a dolore numquam atque ea
                        </p>
                    </div> 
                </div>

                {/* THREE */}
                <div className='w-screen flex-shrink-0 snap-center snap-m
                    flex flex-col space-y-5 items-center justify-center p-20
                    md:p-44 h-screen'>
                    <motion.img
                        initial={{ y:-300, opacity: 0}}
                        whileInView={{ opacity: 1, y:0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true}}
                     src="https://cdn.discordapp.com/attachments/649311144342978610/1034791874206117978/3-devices-black.png"
                    alt="" 
                    />

                    <div className='space-y-1 px-0 md:px-10 max-w-3xl'>
                        <h4 className='text-2xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>
                            Case Study 1 of 5:
                            </span>{" "}
                            UPS clone
                        </h4>

                        <p className='text-l text-center md:text-left'>
                            Lorem ipsum dolor sit amet consectetur adipisicing 
                            elit. Ipsum corrupti a dolore numquam atque ea
                        </p>
                    </div> 
                </div>

                {/* FOUR  */}
                <div className='w-screen flex-shrink-0 snap-center snap-m
                    flex flex-col space-y-5 items-center justify-center p-20
                    md:p-44 h-screen'>
                    <motion.img
                        initial={{ y:-300, opacity: 0}}
                        whileInView={{ opacity: 1, y:0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true}}
                     src="https://user-images.githubusercontent.com/63458393/173197662-7ab3b341-ae7f-4972-b786-2247637e3725.png"
                    alt="" 
                    />

                    <div className='space-y-1 px-0 md:px-10 max-w-3xl'>
                        <h4 className='text-2xl font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]/50'>
                            Case Study 1 of 5:
                            </span>{" "}
                            UPS clone
                        </h4>

                        <p className='text-l text-center md:text-left'>
                            Lorem ipsum dolor sit amet consectetur adipisicing 
                            elit. Ipsum corrupti a dolore numquam atque ea
                        </p>
                    </div> 
                </div>         
        </div>
        <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px]
        -skew-y-12'/>
    </motion.div>
  )
}

export default Projects