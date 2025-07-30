import React, { Component } from 'react'
import { IoReceiptOutline } from "react-icons/io5";
import { IoCubeOutline } from "react-icons/io5";
import { IoImageOutline } from "react-icons/io5";
import { IoShieldOutline } from "react-icons/io5";


export default class Feature extends Component {
  render() {
    return (
      <div className='container  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 px-5 mb-20 md:px-0'>
        <div><img className='max-w-full h-auto rounded' src="images/features.jpg" alt="" /></div>
        <div className='flex flex-col justify-between gap-10 lg:h-auto  '>
            
            <div className='flex items-center '>
                <IoReceiptOutline className='text-amber-300 text-5xl flex-shrink-0' />
                <div className='flex flex-col justify-center ml-4'>
                    <h1 className='font-bold text-xl text-neutral-900'>Advertising is difficult.</h1>
                    <p className='text-neutral-700'>The results or outcomes of each of these employment goals are achieved</p>
                </div>
                
            </div>

            <div className='flex items-center '>
                <IoCubeOutline className='text-amber-300 text-5xl flex-shrink-0' />
                <div className='flex flex-col justify-center ml-4'>
                    <h1 className='font-bold text-xl text-neutral-900'>Which one of these is it?</h1>
                    <p className='text-neutral-700'>Those who lust after blacks do not see, they are to blame for abandoning their services</p>
                </div>
            
            </div>

            <div className='flex items-center '>
                <IoImageOutline className='text-amber-300 text-5xl flex-shrink-0' />
                <div className='flex flex-col justify-center ml-4'>
                    <h1 className='font-bold text-xl text-neutral-900'>Or is she blind?</h1>
                    <p className='text-neutral-700'>Either accepts or when no one avoids everyone. All the pain that makes them more</p>
                </div>
                
            </div>
        
            <div className='flex items-center '>
                <IoShieldOutline className='text-amber-300 text-5xl flex-shrink-0' />
                <div className='flex flex-col justify-center ml-4'>
                    <h1 className='font-bold text-xl text-neutral-900'>Happy Truth</h1>
                    <p className='text-neutral-700'>They follow nothing without bearing the truth when praising life.</p>
                </div>
            
            </div>

            
        </div>
      </div>
    )
  }
}
