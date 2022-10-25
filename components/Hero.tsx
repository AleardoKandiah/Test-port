import Link from 'next/link';
import React from 'react'
import { Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles';


type Props = {}

export default function Hero({}: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Aleardo Kandiah",
            "Guy-who-loves-Coffee.tsx",
            "<ButLovesToCodeMore/>",
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center
        text-center overflow-hidden'>
            <BackgroundCircles/>
            <img 
            className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src='https://media-exp1.licdn.com/dms/image/C4E03AQEjb34JTVsKkQ/profile-displayphoto-shrink_400_400/0/1638368525019?e=1671667200&v=beta&t=qUgL4y-2fGIIN3uDw4KbzIgoN1v_Pt4lE6RqSr4qnV0'
                alt=''
             />

             <div className='z-20'>
                <h2 className='tex-sm uppercase text-gray-500 pb-2 tracking-[15px]'>Software Engineer</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A'/>
                </h1>

               <div className='pt-5'>
                <Link href="#about">
                        <button className='heroButton'>About</button>
                </Link>
                <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                </Link>
                     
               </div>                                          

             </div>
        </div>
  )
}