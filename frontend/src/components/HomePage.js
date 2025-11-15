import React from 'react'

function HomePage() {
  return (
    <div className='w-3/4 flex justify-center items-center'>
      <div className='flex flex-col justify-around items-center w-full  h-[170px]'>
        <h1 className='text-4xl font-poppins'>What can I help with?</h1>
        <input type='search' placeholder='Ask me anything' className='p-2 bg-gray-200 w-1/2 h-[50px] w-3/4 rounded-lg'/>
      </div>
    </div>
  )
}

export default HomePage