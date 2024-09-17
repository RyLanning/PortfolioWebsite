import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import Reacting from '../assets/react.png';
import GitHub from '../assets/github.png';
import Scrum from '../assets/scrum.png';

const Skills = () => {
  return (
      <div name='skills' className='w-full h-screen bg-[#eae2b7] text-[#bf2222]'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                  <div>
                        <p className='text-4xl font-bold inline border-b-4 border-[#fcbf49]'>Skills</p>
                        <p className='py-4'>// These are some of the technologies I've worked with</p>
                  </div>

                  <div className='w-full grid grid-cols-2 sm:grid-cols-6 text-center py-8'>
                        <div className='shadow-ms shadow-[#040c16] hover:scale-110 duration-500'>
                              <img className='w-20 mx-auto' src={HTML} alt="HTML Icon" />
                              <p className='my-4'>HTML</p>
                        </div>
                        <div className='shadow-ms shadow-[#040c16] hover:scale-110 duration-500'>
                              <img className='w-20 mx-auto' src={CSS} alt="HTML Icon" />
                              <p className='my-4'>CSS</p>
                        </div>
                        <div className='shadow-ms shadow-[#040c16] hover:scale-110 duration-500'>
                              <img className='w-20 mx-auto' src={JavaScript} alt="HTML Icon" />
                              <p className='my-4'>JavaScript</p>
                        </div>
                        <div className='shadow-ms shadow-[#040c16] hover:scale-110 duration-500'>
                              <img className='w-20 mx-auto' src={Reacting} alt="HTML Icon" />
                              <p className='my-4'>React</p>
                        </div>
                        <div className='shadow-ms shadow-[#040c16] hover:scale-110 duration-500'>
                              <img className='w-20 mx-auto' src={GitHub} alt="HTML Icon" />
                              <p className='my-4'>GitHub</p>
                        </div>
                        <div className='shadow-ms shadow-[#040c16] hover:scale-110 duration-500'>
                              <img className='w-20 mx-auto' src={Scrum} alt="HTML Icon" />
                              <p className='my-4'>Scrum</p>
                        </div>
                  </div>
            </div>
      </div>
  )
}

export default Skills