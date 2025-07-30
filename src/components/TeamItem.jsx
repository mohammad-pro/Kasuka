import React, { Component } from 'react';
import { FaInstagram } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

export default class TeamItem extends Component {
  render() {
    const { name, role, image } = this.props;

    return (
      <div className='group relative bg-white flex flex-col shadow-md overflow-hidden mt-10 z-10'>
        <div className='relative'>
          <img src={image} alt="" />
          <div className='absolute z-20 flex justify-center w-full bottom-3 gap-2 left-0 
                          opacity-0 invisible group-hover:opacity-100 group-hover:visible 
                          transition-opacity duration-300'>
                            
            <div className='w-8 h-8 flex justify-center items-center rounded-md 
                            bg-[rgba(196,196,196,0.57)] hover:bg-amber-300 
                            cursor-pointer transition-all duration-300'>
              <CiTwitter />
            </div>
            <div className='w-8 h-8 flex justify-center items-center rounded-md 
                            bg-[rgba(196,196,196,0.57)] hover:bg-amber-300 
                            cursor-pointer transition-all duration-300'>
              <FaInstagram />
            </div>
            <div className='w-8 h-8 flex justify-center items-center rounded-md 
                            bg-[rgba(196,196,196,0.57)] hover:bg-amber-300 
                            cursor-pointer transition-all duration-300'>
              <FaLinkedinIn />
            </div>
            <div className='w-8 h-8 flex justify-center items-center rounded-md 
                            bg-[rgba(196,196,196,0.57)] hover:bg-amber-300 
                            cursor-pointer transition-all duration-300'>
              <FaFacebookF />
            </div>
          </div>
        </div>

        <div className='flex flex-col text-center py-3'>
          <h4 className='text-neutral-900 font-bold'>{name}</h4>
          <p className='text-neutral-700'>{role}</p>
        </div>
      </div>
    );
  }
}
