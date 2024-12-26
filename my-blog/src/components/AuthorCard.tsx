import React from 'react';
import Image from 'next/image';

export default function AuthorCard() {
  return (
    <div className='bg-white shadow-lg rounded-lg p-6 mt-12'>
      <div className='flex items-center animation-fadeIn'>
        <Image className='w-16 h-16 rounded-full mr-4 object-cover border-2 border-red-500'
          src="/htpic2.png"
          alt="image" 
          width={100}
          height={100}
          />
        <div>
          <h3 className='text-xl font-bold'>Rizwana Perveen</h3>
          <p className='text-slate-500'>Webdeveloper</p>
        </div>
      </div>
      <p>Rizwana perveen is a webdeveloper and passionate for coding, problem solving cooperative caring responsible person.</p>
      <div className='mt-4 flex space-x-3'>
        <a href="#"
          className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-300'>
         Twitter
          </a>
          <a href="#"
          className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-300'>
         LinkedIn
          </a>
          <a href="#"
          className='px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-300'>
         Github
          </a>
       </div>
  
    </div>
  )
}