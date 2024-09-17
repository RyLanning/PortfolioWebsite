import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#eae2b7] text-[#bf2222]'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-width-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                  <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-[#fcbf49]'>About</p>
                  </div>
                  <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid px-4'>
                  <div>
                        <pre className='text-black w-[1000px] overflow-x-auto break-words whitespace-pre-wrap'>   I am a Software Engineering Student at the Univeristy of Nebraska-Licoln,
                              graduating in 2025. I am currently learning full-stack development. I am a competent, communicative, and efficient
                              engineer who has an "anything is possible" mindset.
                        </pre>
                  </div>
            </div>
      </div>
    </div>
  )
}

<p className='text-black py-4 max-w-[700px]'>I am a Software Engineering Student at the Univeristy of Nebraska-Licoln,
graduating in 2025. I am currently learning full-stack development. I am a competent, communicative, and efficient
engineer who has an "anything is possible" mindset.</p>

export default About