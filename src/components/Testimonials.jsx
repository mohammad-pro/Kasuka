import React, { Component } from 'react'

export default class Testimonials extends Component {
  render() {
    return (
      <div className='relative bg-fixed bg-cover mt-16' style={{ backgroundImage: "url('images/testimonials-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className='relative container mx-auto px-4 py-16 md:px-0 z-20'>
            <div className='flex flex-col items-center'>
                <div className='flex flex-col items-center'>
                    <img src="images/testimonials-1.jpg" className='rounded-full w-30 h-30 border-[5px] border-[rgba(0,0,0,0.5)] ' alt="" />
                    <div className='flex flex-col items-center'>
                        <h4 className='text-white font-bold text-xl'>Jena Karlis</h4>
                        <p className='text-white'>Store owner</p>
                    </div>
                </div>

                <div className='mt-10'>
                    <p className='text-white text-justify '>For if you export the labor of those who are gods, the work of those who are important, the things that none of them will come to, and the labor of those who have the least time, the labors that I have endured, and the love of those who will be the least.</p>
                </div>
            </div>
        </div>
        
      </div>
    )
  }
}


