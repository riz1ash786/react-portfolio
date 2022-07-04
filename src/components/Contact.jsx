import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-r from-[#071c05] to-[#6b8869] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/16e93481-2d1b-4e0f-81a9-1adefbd0de94" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#dbb434] text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or contact me via email - riz1ash786@gmail.com</p>
            </div>
            <input className='bg-[#e8f4ea] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#e8f4ea]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#e8f4ea] p-2' name="message" rows="10" placeholder='Your Message'></textarea>
            <button className='text-white border-2 hover:bg-[#dbb434] hover:border-[#dbb434] hover:text-[#000000] px-4 py-3 my-8 mx-auto flex items-center'>Send Message!</button>
        </form>
    </div>
  )
}

export default Contact