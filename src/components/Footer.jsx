import { IoIosHeart } from "react-icons/io";
import React, { Component } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaSkype } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

export default class Footer extends Component {
  render() {
    return (
      <div className="">
        <header className="bg-[rgb(21,21,21)]">
          <div className="container mx-auto px-5 md:px-0 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 py-10">
              <div className="flex flex-col justify-between mt-4 md:mt-0">
                <div className="flex flex-row  items-center">
                  <img src="images/logo.png" className="w-20" alt="" />
                  <span className="text-white font-bold text-2xl">KASUKA</span>
                </div>

                <div className="flex flex-col text-white text-[12px]">
                  <span>Tehran, Azadi Street</span>
                  <span>Phone: 01234567895</span>
                  <span>Email: info@example.com</span>
                </div>

                <div className="flex flex-row gap-3 mt-6 text-sm">
                  <div className="bg-[rgb(64,64,64)] w-7 h-7 flex justify-center items-center rounded text-white  hover:bg-amber-300 hover:text-black cursor-pointer duration-300 transition-all">
                    <FaLinkedinIn />
                  </div>
                  <div className="bg-[rgb(64,64,64)] w-7 h-7 flex justify-center items-center rounded text-white  hover:bg-amber-300 hover:text-black cursor-pointer duration-300 transition-all">
                    <FaSkype />
                  </div>
                  <div className="bg-[rgb(64,64,64)] w-7 h-7 flex justify-center items-center rounded text-white  hover:bg-amber-300 hover:text-black cursor-pointer duration-300 transition-all">
                    <FaInstagram />
                  </div>
                  <div className="bg-[rgb(64,64,64)] w-7 h-7 flex justify-center items-center rounded text-white  hover:bg-amber-300 hover:text-black cursor-pointer duration-300 transition-all">
                    <FaFacebookF />
                  </div>
                  <div className="bg-[rgb(64,64,64)] w-7 h-7 flex justify-center items-center rounded text-white  hover:bg-amber-300 hover:text-black cursor-pointer duration-300 transition-all">
                    <FaTwitter />
                  </div>
                </div>
              </div>

              <div className="flex flex-col text-white mt-4 md:mt-0">
                <h1 className="text-[16px]">Useful links</h1>
                <div className="flex flex-col gap-y-3 mt-4 ">
                  <a
                    href="#"
                    className="flex flex-row text-sm items-center hover:text-amber-300 duration-300 transition-all"
                  >
                    <IoIosArrowForward className="text-amber-300" /> HOME
                  </a>
                  <a
                    href="#"
                    className="flex flex-row text-sm items-center hover:text-amber-300 duration-300 transition-all"
                  >
                    <IoIosArrowForward className="text-amber-300" /> About us
                  </a>
                  <a
                    href="#"
                    className="flex flex-row text-sm items-center hover:text-amber-300 duration-300 transition-all"
                  >
                    <IoIosArrowForward className="text-amber-300" /> Services
                  </a>

                  <a
                    href="#"
                    className="flex flex-row text-sm items-center hover:text-amber-300 duration-300 transition-all"
                  >
                    <IoIosArrowForward className="text-amber-300" /> Terms of
                    Service
                  </a>
                  <a
                    href="#"
                    className="flex flex-row text-sm items-center hover:text-amber-300 duration-300 transition-all"
                  >
                    <IoIosArrowForward className="text-amber-300" /> Privacy
                    Policy
                  </a>
                </div>
              </div>

              <div className="flex flex-col text-white mt-4 md:mt-0">
                <h1 className="text-[16px]">Our services</h1>
                <div className="flex flex-col gap-y-3 mt-4 ">
                  <a
                    href="#"
                    className="flex flex-row text-sm items-center hover:text-amber-300 duration-300 transition-all"
                  >
                    <IoIosArrowForward className="text-amber-300" /> Website
                    design
                  </a>
                  <a
                    href="#"
                    className="flex flex-row text-sm items-center hover:text-amber-300 duration-300 transition-all"
                  >
                    <IoIosArrowForward className="text-amber-300" /> Web
                    development
                  </a>
                  <a
                    href="#"
                    className="flex flex-row text-sm items-center hover:text-amber-300 duration-300 transition-all"
                  >
                    <IoIosArrowForward className="text-amber-300" /> Production
                    management
                  </a>

                  <a
                    href="#"
                    className="flex flex-row text-sm items-center hover:text-amber-300 duration-300 transition-all"
                  >
                    <IoIosArrowForward className="text-amber-300" /> Marketing
                  </a>
                  <a
                    href="#"
                    className="flex flex-row text-sm items-center hover:text-amber-300 duration-300 transition-all"
                  >
                    <IoIosArrowForward className="text-amber-300" /> Graphic
                    design
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-y-5 mt-4 md:mt-0">
                <h1 className="text-[16px] text-white ">Our newsletter</h1>
                <span className="text-white text-sm">
                  However, none of the things I read will be our great fault.
                </span>
                <div className="flex flex-row">
                  <input type="text" className="w-full bg-white outline-0" />
                  <button
                    type="button"
                    className="bg-amber-300 cursor-pointer p-2 rounded-tr-sm rounded-br-sm hover:bg-amber-200 transition-all duration-300  "
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>

        <footer className="bg-black">
          <div className="container mx-auto px-6 md:px-0 flex justify-center items-center">
            <div className="flex flex-row  gap-3 text-white items-center text-lg py-10">
              <h1 className="text-sm">Developed with </h1>
              <IoIosHeart className="text-white hover:text-red-600  hover:text-3xl hover:cursor-pointer transition-all duration-300" />

              <h1 className="text-amber-300 text-sm">By Mohammad Hossein</h1>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
