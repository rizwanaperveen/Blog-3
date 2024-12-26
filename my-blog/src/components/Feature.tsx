import React from 'react';
import Image from 'next/image';

const Feature = () => {
  return (
    <div>
      <section className='py-8 bg-neutral-100 mb-40'>

        <div className='w-full lg:w-[1440px] h-[200px] lg:h-[300px] justify-center items-center flex sm:text-3xl lg:text-5xl font-bold lg:text-center text-black animate-fade-in-up delay-100 bg-gradient-to-r from-slate-500 to-pink-400'>Welcome To Foody Blog</div>
        <div className='flex items-center'>
      <Image src="/logo-kitchen.png" alt="Logo" className='rounded-full' width={100} height={100}/>
        <h2 className='text-center text-3xl font-bold animate-fade-in-up transition-all duration-500 ease-in-out transform hover:translate-y-[-5px] hover:text-black text-red-600'>
         
        Flavours Unfolded 
        </h2>
        </div>
<p className='text-center m-4 mt-4 text-sm text-black sm:text-base md:mb-12 lg:mb-16 animate-fade-in-up delay-100'>

Welcome to *Flavours Unfolded*, your cozy corner for all things delicious! This kitchen blog is dedicated to bringing you easy-to-follow recipes, clever cooking tips, and inspiring stories that make your time in the kitchen a joy. Whether you're a seasoned chef or just starting out, you'll find something here to spark your culinary creativity.  

Dive into a world of flavorful dishes, from hearty family meals to indulgent desserts. Learn the secrets of kitchen efficiency, explore ingredient guides, and discover the art of meal prep—all while celebrating the magic of homemade food.  

At *Flovours Unfolded*, we believe great food is about more than just taste—it’s about sharing moments, creating memories, and savoring life one bite at a time.

.</p>
<div className='mx-auto max-w-7xl px-5'>
  <h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change'>Exploring Our Categories</h1>
<div className='grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 animate-fade-in-up delay-100'>
{
  [
   " Quick & Easy Recipes",
"Healthy Recipes",
"Desserts",
"Appetizers & Snacks",
"Breakfast Ideas",
"Dinner Favorites",
"Vegetarian & Vegan Recipes",
"International Cuisine",
  ].map((category, index) => (
<div key={index}
className='relative group p-6 bg-white rounded-lg shadow-lg hover:bg-sky-300 hover:text-black transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer flex items-center justify-center text-neutral-600'>
  <p className='text-center text-lg font-semibold'>{category}</p>
  <div className='absolute inset-0 border-2 border-transparent group hover:border-white rounded-lg transition duration-300 ease-in-out'></div>
  </div>
  ))
}

</div>
</div>
<p className='text-sm md:text-base text-black mb-6 px-4 animate-fade-in-down delay-100 mt-10'>
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod saepe maiores non! Maiores, quos nostrum voluptates nemo error quibusdam obcaecati incidunt cupiditate totam ratione mollitia dignissimos corrupti, adipisci accusamus tempora?
</p>
      </section>
    </div>
  );
}

export default Feature