import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='xl:items-center p-1 flex z-20 items-start sticky top-0 justify-between max-w-7xl mx-auto'>
        
        <motion.div 
        initial={{ 
            x:-500,
            opacity: 0,
            scale: 0.5, 
        }}
        animate={{
            x:0,
            opacity: 1,
            scale:1, 
        }}
        transition={{
            duration: 1.5,
        }}
        
        className='flex flex-row items-center'>
            {/* Social icons */}
            <SocialIcon
            url="https://www.twitter.com/Aleardo21"
            target="_blank"
            fgColor='gray'
            bgColor='transparent'
            />


            <SocialIcon
            url="https://www.linkedin.com/in/aleardo-kandiah-504959195/"
            target="_blank"
            fgColor='gray'
            bgColor='transparent'
            />


            <SocialIcon
            url="https://github.com/AleardoKandiah"
            target="_blank"
            fgColor='gray'
            bgColor='transparent'
            />


            <SocialIcon
            url="https://aleardo.hashnode.dev/towards-medical-artificial-intelligence"
            target="_blank"
            fgColor='gray'
            bgColor='transparent'
            />


            <SocialIcon
            url="https://codepen.io/aleardokandiah"
            target="_blank"
            fgColor='gray'
            bgColor='transparent'
            />

        </motion.div>

            <Link href='#contact'> 
        <motion.div
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x: 0,
            opacity: 1,
            scale: 1,
        }}
        transition={{
            duration: 1,
        }}
        className='flex flex-row items-center text-gray-300 cursor-pointer'>
            <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
            />

            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>
                Get In Touch
            </p>
        </motion.div>
        </Link>
    </header>
  )
}