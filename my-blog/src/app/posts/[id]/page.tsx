'use client';
import React from 'react';
import CommentSection from '@/components/Comment-sec';
import AuthorCard from '@/components/AuthorCard';


const posts =[
{ 
  id: "1",
  title: "Biryani",
  description: "Explore the Taste of Karachi Biryani: Karachi biryani is a flavorful and aromatic rice dish, famous for its unique blend of spices and tender meat. Known for its rich taste, it combines basmati rice, zesty masalas, and saffron for a signature burst of flavors. Loved by food enthusiasts worldwide, it represents the vibrant culinary heritage of Karachi.",
  imageUrl: "/food8.jpg"
},
{
  id: "2",
  title: "Bihari Kabab",
  description: "Taste with Bihari Kabab: Bihari kabab is a smoky, flavorful dish made from marinated meat, traditionally cooked over charcoal. Known for its tender texture and rich spices, it's a beloved delicacy from Bihar's culinary heritage. Loved by food enthusiasts worldwide, it's a symbol of the vibrant culinary heritage of Bihar.",
  imageUrl: "/kabab.jpg"
},
{
  id: "3",
  title: "Chana Chaat",
  description: "Chatkharay Chana Chaat: Chana chaat is a tangy and spicy street food made with chickpeas, vegetables, and flavorful chutneys. This refreshing snack is a perfect blend of textures and zesty flavors. Loved by food enthusiasts worldwide, it's a symbol of the vibrant culinary heritage of Pakistan.",
  imageUrl: "/chana.webp"
},
{
  id: "4",
  title: "Burger",
  description: "Explore the Taste of Karachi: A burger is a hearty sandwich featuring a juicy patty, fresh vegetables, and flavorful sauces, all packed between soft buns. Loved for its convenience and endless customization, it’s a global favorite for quick, satisfying meals.",
  imageUrl: "/burger.webp"
},
{
  id: "5",
  title: " Cheezy Burger",
  description: "Explore the Taste of Karachi; A burger is a hearty sandwich featuring a juicy patty, fresh vegetables, and flavorful sauces, all packed between soft buns. Loved for its convenience and endless customization, it’s a global favorite for quick, satisfying meals.",
  imageUrl: "/burger2.webp"
},
{
  id: "6",
  title: "Samosa",
  description: "Explore the Taste of Karachi: Samosa is a popular snack, consisting of a crispy, golden pastry filled with spiced potatoes, peas, or meat. Its savory, crunchy exterior and flavorful filling make it a favorite appetizer across many cultures.",
  imageUrl: "/samosa.jpg"
},
{
  id: "7",
  title: "Paratha roll",
  description: "Explore the Taste of Karachi: A roll is a versatile dish, typically consisting of a soft, flatbread wrapped around flavorful fillings like meats, vegetables, or sauces. Popular as street food or a quick meal, it offers a delicious and portable option for any occasion.",
  imageUrl: "/food4.jpg"
},
{
  id: "8",
  title: "Kababi roll",
  description: "Explore the Taste of Karachi: A roll is a versatile dish, typically consisting of a soft, flatbread wrapped around flavorful fillings like meats, vegetables, or sauces. Popular as street food or a quick meal, it offers a delicious and portable option for any occasion.",
  imageUrl: "/food3.jpg"
},
{
  id: "9",
  title: "Biscuits",
  description: "Explore the Bakery: Biscuits are a delightful baked snack, loved for their crumbly texture and sweet or savory taste. Perfect with tea or coffee, they come in various flavors, from buttery shortbread to chocolate-filled treats. Simple yet comforting, biscuits are a timeless indulgence enjoyed by all ages.",
  imageUrl: "/biscuit.jpg"
},
{
  id: "10",
  title: "Biscuits",
  description: "Explore the Bakery: Biscuits are a delightful baked snack, loved for their crumbly texture and sweet or savory taste. Perfect with tea or coffee, they come in various flavors, from buttery shortbread to chocolate-filled treats. Simple yet comforting, biscuits are a timeless indulgence enjoyed by all ages.",
  imageUrl:"/food2.webp"
},
{
  id: "11",
  title: "Broast",
  description: "Broast is a crispy, flavorful fried chicken dish that combines pressure frying with a unique marinade, resulting in juicy, golden perfection.",
  imageUrl: "/food1.jpg"
},
{
  id: "12",
  title: "Cake",
  description: "Explore the taste of sweet of chocolate : Cake is a sweet dessert made with flour, sugar, and eggs, often flavored with chocolate, vanilla, or fruits. It’s a centerpiece for celebrations, symbolizing joy and togetherness. With endless varieties and decorations, cakes cater to every taste and occasion, from simple treats to lavish creations.",
  imageUrl: "/cake(2).jpg"
},
{
  id: "13",
  title: "Pizza",
  description: "Explore the taste of Karachi: Pizza is a beloved dish originating from Italy, featuring a crispy base topped with tangy tomato sauce, cheese, and various toppings. Its versatility allows for endless flavor combinations, from classic Margherita to gourmet creations. Globally cherished, pizza has become a symbol of comfort food and shared joy.",
  imageUrl: "/pizza-pizza.jpg"
},
{
  id: "14",
  title: "red sos pizza",
  description: "Explore the taste of Karachi: Pizza is a beloved dish originating from Italy, featuring a crispy base topped with tangy tomato sauce, cheese, and various toppings. Its versatility allows for endless flavor combinations, from classic Margherita to gourmet creations. Globally cherished, pizza has become a symbol of comfort food and shared joy.",
  imageUrl: "/food6.jpg"
},
{
  id: "15",
  title: "special pizzza",
  description: "Explore the taste of Karachi: Pizza is a beloved dish originating from Italy, featuring a crispy base topped with tangy tomato sauce, cheese, and various toppings. Its versatility allows for endless flavor combinations, from classic Margherita to gourmet creations. Globally cherished, pizza has become a symbol of comfort food and shared joy.",
  imageUrl: "/food5.jpg"
},
]
export default function PostPage({ params } : {params: {id: string}}) {
  const { id } = params;
  const post = posts.find((post) => post.id === id);
  if (!post) {
    return(
    <h2 className='text-2xl font-bold text-red-600 text-center mt-10'>Post not found</h2>
    );
  }
  const renderParagraphs = (description: string) => {
    return description.split("/n").map((para, index) => (
      <p key={index} className='mt-4 text-justify'>
        {para.trim()}
      </p>
    ));
  };
return(
  <div className='max-w-3xl mx-auto p-5'>

    <h1 className='md:text-4xl text-3xl font-bold text-red-600 text-center'>{" "}
      {post.title}
    </h1>
    {post.imageUrl && (
      <img
      src={post.imageUrl}
      alt={post.title}
      className='w-full h-auto rounded-md mt-4' />
    )}
   <div className='mt-6 text-lg yrxt-slate-700'>
    {renderParagraphs(post.description)}
   </div>

    <CommentSection postId={post.id} />
    <AuthorCard />
  </div>
)

}