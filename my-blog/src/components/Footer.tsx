import React from 'react'
import Link from "next/link";
const Footer = () => {
  return (
    <div className='mt-20'>
  
    <div id="footer" className='mt-16 py-6 text-center'>
      @ Rizwana | All rights reserved 2024.
      <Link href="#"> <button className='h-10 w-56 bg-black text-white text-center border-4 border-blue-600 rounded-lg ml-[600px] mt-10 px-5 animate-pulse ease-in duration-300'>Back to top</button></Link>
    </div>
    </div>
  )
}

export default Footer