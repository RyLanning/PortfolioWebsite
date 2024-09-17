import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#eae2b7] flex justify-center items-center p-4'>
      <form className='flex flex-col max-w-[600px] w-full' action="https://getform.io/f/fe457ea5-6831-47ef-a69b-103bce0895a2" method='POST'>
            <div className='pb-8'>
                  <p className='text-4xl font-bold inline border-b-4 border-[#fcbf49] text-[#bf2222]'>Contact</p>
                  <p className='text-black py-4'>// Submit the form below or send me an email at rylen.lanning@gmail.com</p>
            </div>
            <input className='bg-[#fcbf49] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#fcbf49]'type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#fcbf49] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-[#bf2222] border-2 border-black hover:bg-[#bf2222] hover:text-black duration-300 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
      </form>
    </div>
  )
}

export default Contact