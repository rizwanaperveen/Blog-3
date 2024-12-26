import React from 'react'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <div>
      <h1 className='text-4xl font-semibold text-center'>ABOUT US</h1>
    <div className='flex flex-col md:flex-row justify-around items-center mt-10'>
      <Image src="/about.jpg" alt="image" width={440} height={400} className='m-10 '/>
      <p className='sm:text-base lg:text-xl'>**Flavor Unfolded** is a delightful kitchen blog that celebrates the art of cooking and the stories behind each dish. It combines vibrant recipes, easy-to-follow guides, and personal anecdotes to inspire home cooks of all skill levels. From comforting classics to innovative culinary creations, the blog explores flavors from around the world. With a passion for fresh ingredients and creative techniques, **Flavor Unfolded** turns cooking into a flavorful adventure. It’s the perfect destination for anyone looking to unfold the magic of food, one recipe at a time.</p>
    </div>
    </div>
  )
}

export default AboutUs



