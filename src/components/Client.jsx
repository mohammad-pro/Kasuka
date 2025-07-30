import React, { Component } from "react";

export default class Client extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: [
        "client-1.png",
        "client-2.png",
        "client-3.png",
        "client-4.png",
        "client-5.png",
        "client-6.png",
      ],
    };
  }
  render() {
    return (
      <div className="container mx-auto">
        <div className="grid grid-cols-3 lg:grid-cols-6 gap-24 my-16 px-5 md:px-0">
          <div className=" w-full filter grayscale hover:grayscale-0 transition duration-500 cursor-pointer flex justify-center items-center">
            {" "}
            <img className="" src="images/client-1.png" alt="" />{" "}
          </div>
          <div className=" w-full filter grayscale hover:grayscale-0 transition duration-500 cursor-pointer flex justify-center items-center">
            {" "}
            <img src="images/client-2.png" alt="" />
          </div>
          <div className=" w-full filter grayscale hover:grayscale-0 transition duration-500 cursor-pointer flex justify-center items-center">
            {" "}
            <img src="images/client-3.png" alt="" />
          </div>
          <div className=" w-full filter grayscale hover:grayscale-0 transition duration-500 cursor-pointer flex justify-center items-center">
            {" "}
            <img src="images/client-4.png" alt="" />
          </div>
          <div className=" w-full filter grayscale hover:grayscale-0 transition duration-500 cursor-pointer flex justify-center items-center">
            {" "}
            <img src="images/client-5.png" alt="" />
          </div>
          <div className=" w-full filter grayscale hover:grayscale-0 transition duration-500 cursor-pointer flex justify-center items-center">
            {" "}
            <img src="images/client-6.png" alt="" />
          </div>
        </div>
      </div>
    );
  }
}
