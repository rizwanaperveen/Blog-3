import React from 'react';
import Image from 'next/image';
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { GoClockFill } from "react-icons/go";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="w-full h-[316px] flex justify-center items-center mt-2">
        <Image
          src="/Group78(1).png"
          alt="image"
          width={1440}
          height={450}
          className="w-full max-w-screen-xl"
        />
      </div>

      {/* Contact Section */}
      <div className="w-full max-w-screen-xl mx-auto px-4">
        <div>
          <h1 className="text-4xl font-semibold text-center">Get In Touch With Us</h1>
          <p className="max-w-lg mx-auto text-base text-center text-[#9F9F9F] mt-5">
            For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-10">
          {/* Left Side */}
          <div className="flex flex-col gap-8">
            {/* Location */}
            <div className="flex items-start gap-4">
              <FaLocationDot size={20} />
              <div>
                <h1 className="text-2xl">Address</h1>
                <p className="text-[#9F9F9F] text-base">
                  236 5th SE Avenue, New York NY10000, United States
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <FaPhone size={20} />
              <div>
                <h1 className="text-2xl">Phone</h1>
                <p className="text-[#9F9F9F] text-base">
                  Mobile: +(84) 546-6789 <br />
                  Hotline: +(84) 456-6789
                </p>
              </div>
            </div>

            {/* Working Time */}
            <div className="flex items-start gap-4">
              <GoClockFill size={20} />
              <div>
                <h1 className="text-2xl">Working Time</h1>
                <p className="text-[#9F9F9F] text-base">
                  Monday-Friday: 9:00 - 22:00 <br />
                  Saturday-Sunday: 9:00 - 21:00
                </p>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="w-full max-w-md mt-10 md:mt-0">
            <form className="flex flex-col gap-6">
              <div>
                <label htmlFor="name" className="block text-left">
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Abc"
                  className="w-full border-2 border-[#9F9F9F] rounded-lg p-3 mt-2"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-left">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Abc@def.com"
                  className="w-full border-2 border-[#9F9F9F] rounded-lg p-3 mt-2"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-left">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="This is an optional field"
                  className="w-full border-2 border-[#9F9F9F] rounded-lg p-3 mt-2"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-left">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Hi! I’d like to ask about..."
              
                  className="w-full border-2 border-[#9F9F9F] rounded-lg p-3 mt-2"
                
                />
              </div>

              <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#F4F4F4] py-10 mt-10">
        <div className="flex flex-col md:flex-row justify-around items-center max-w-screen-xl mx-auto gap-6">
          <div className="text-center">
            <h1 className="text-3xl font-semibold">Free Delivery</h1>
            <p className="text-[#9F9F9F] text-xl">
              For all orders over $50, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-semibold">90 Days Return</h1>
            <p className="text-[#9F9F9F] text-xl">
              If goods have problems, consectetur adipiscing elit.
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-3xl font-semibold">Secure Payment</h1>
            <p className="text-[#9F9F9F] text-xl">
              100% secure payment, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
