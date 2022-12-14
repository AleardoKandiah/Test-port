import type { NextPage } from 'next'
import Head from 'next/head'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y 
    snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Aleardo | Portfolio</title>
      </Head>

      <Header/>

    <section id='hero' className='snap-start'>
      <Hero />
    </section>

    <section id='about' className='snap-center'>
      <About/>
    </section>

    <section id='experience' className='snap-center'>
      <WorkExperience/>
    </section>

    {/* Skills */}
    <section id='skills' className='snap-start'>
      <Skills />
    </section>
    {/* Projects */}
    <section id='projects' className='snap-start'>
      <Projects/> 
    </section>
    {/* Contact Me */}

    <section id='contact' className='snap-start' >
      <ContactMe/>
    </section>

    <Link href='#hero'>
      <footer className='sticky bottom-1 w-full cursor-pointer'>
        <div className='flex items-center justify-center'>
          <img 
          className='h-16 w-22 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
          src="https://cdn.discordapp.com/attachments/649311144342978610/989190188804739083/IMG_8746.png" 
          alt="" />
        </div>
      </footer>
    </Link>
    </div>
  )
}

export default Home
