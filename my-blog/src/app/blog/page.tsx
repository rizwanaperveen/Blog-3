import React from 'react'
import Image from "next/image";
import BlogCard from '@/components/BlogCard'
const blog = () => {
    
          const  posts = [
            {
              id: "1",
              title: "Biryani",
              description: "Explore the Taste of Karachi",
              imageUrl: "/food8.jpg"
            },
            {
              id: "2",
              title: "Bihari Kabab",
              description: "Taste with Bihari Kabab",
              imageUrl: "/kabab.jpg"
            },
            {
              id: "3",
              title: "Chana Chaat",
              description: "Chatkharay Chana Chaat",
              imageUrl: "/chana.webp"
            },
            {
              id: "4",
              title: "Burger",
              description: "Explore the Taste of Karachi",
              imageUrl: "/burger.webp"
            },
            {
              id: "5",
              title: " Cheezy Burger",
              description: "Explore the Taste of Karachi",
              imageUrl: "/burger2.webp"
            },
            {
              id: "6",
              title: "Samosa",
              description: "Explore the Taste of Karachi",
              imageUrl: "/samosa.jpg"
            },
            {
              id: "7",
              title: "Paratha roll",
              description: "Explore the Taste of Karachi",
              imageUrl: "/food4.jpg"
            },
            {
              id: "8",
              title: "Kababi roll",
              description: "Explore the Html",
              imageUrl: "/food3.jpg"
            },
            {
              id: "9",
              title: "Biscuits",
              description: "Explore the Bakery",
              imageUrl: "/biscuit.jpg"
            },
            {
              id: "10",
              title: "Biscuits",
              description: "Explore the Bakery",
              imageUrl:"/food2.webp"
            },
            {
              id: "11",
              title: "Broast",
              description: "Crunchy Crispy Broast",
              imageUrl: "/food1.jpg"
            },
            {
              id: "12",
              title: "Cake",
              description: "Explore the taste of sweet cake",
              imageUrl: "/cake(2).jpg"
            },
            {
              id: "13",
              title: "Pizza",
              description: "Explore the taste of Karachi",
              imageUrl: "/pizza-pizza.jpg"
            },
            {
              id: "14",
              title: "red sos pizza",
              description: "Explore the taste of Karachi",
              imageUrl: "food6.jpg"
            },
            {
              id: "15",
              title: "special pizzza",
              description: "Explore the taste of Karachi",
              imageUrl: "food5.jpg"
            },
          ]
          return (
            <div className='my-8'>
          
    <div>
        <Image src="/Group78(4).png" alt="image" width={1440} height={400}/>
        </div>
              <h1 className='text-3xl font-bold text-center my-8 text-red-600 animate-color-change'>Exploring the world of AI</h1>
            <div className='grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
              {posts.map((post, index) => (
                <div className='fade-in' key={post.id}>
                  <div className='blog-card hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out transform hover:translate-y-[-5px] hover:text-black '>
                    <BlogCard post={post} isDarkBackground={index % 2 === 0}/>
                  </div>
                  </div>
              )
        
              )}
            </div>
            
            </div>
          )
        }

export default blog