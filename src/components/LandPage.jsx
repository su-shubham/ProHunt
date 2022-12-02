import Asidebar from "./Asidebar";
import {motion} from "framer-motion"
import React, {useState} from "react";
import Articles from "./components/Articles";
import Cards from '../assets/cards.jpg';

const headerLandPage = {
  hidden: {
    opacity : 0,
    y: '-100vh'
  },
  visible: {
      opacity : 1,
      y : 0,
    transition: {
      type : 'spring', 
      delay : 1   
    }
  },
  exit: {
    y: "100vh",
    transition: {ease : "easeInOut"}
  }
}
const imageVariants = {
  hidden: {
    opacity : 0,
    x : '100vw'
  },
  visible: {
      opacity : 1,
      x : 0,
    transition: {
      type : 'spring', 
      delay : 0.5
    }
  },
  exit: {
    x: "-100vw",
    transition: {ease : "easeInOut"}
  }
}

const containerVariants = {
  hidden: {
    opacity: 1,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1.5 }
  },
  exit: {
    x: "-100vw",
    transition: {ease : "easeInOut"}
  }
}

export default function LandPage() {
  const scrset = `${Cards} 1024w, ${Cards} 640w, ${Cards} 320w`
  return (
    <motion.div className="containerVariants" 
      variants={containerVariants} 
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="pt-20">
        <div className="container mx-auto px-5">
          <div className="pt-6 grid grid-cols-1 lg:grid-cols-6 lg:gap-6">
            <div className="col-span-4 mt-11  sm:col-span-4 lg:col-span-6">
              <div className="flex items-center flex-wrap mb-28 ">
                  <div className="w-full md:w-1/2 text-center headerLandPage" >
                  <motion.div
                     variants={headerLandPage}
                  >
                  <h4 className="text-6xl text-gray-800 font-bold mb-3 ">
                    Add Your <span className="text-[#f43f5e]">Features</span>
                  </h4>
                  <p className="text-gray-600 mb-8 text-xl">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat consequatur minus dolorum voluptates veniam eligendi
                    quo sint. Est, voluptatum facere.
                  </p>
                  <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="mb-4">
                      {/* <button className="btn-sm text-white bg-[#f43f5e] hover:bg-rose-500 ml-3 p-3 rounded-md font-[700]" onClick={Popover}>
                            List Your Product
                          </button> */}
                      <a
                        href=""
                        className="btn-sm text-white bg-[#f43f5e] hover:bg-rose-500 ml-3 p-3 rounded-md font-[700]"
                      >
                        List Your Products
                      </a>
                    </div>
                  </div>
                  </motion.div>
                </div>
                 <div className="w-full md:w-5/12 sm:mt-10"
                > 
                  <img 
                      srcset={scrset} 
                      sizes="1000%"
                      alt="Monitoring" />
                </div>
              </div>
            </div>
            <div className="col-span-4 sm:col-span-4 lg:col-span-4">
              <Articles />
            </div>
            <div className="col-span-2 lg:col-span-2">
              <Asidebar />
            </div>
          </div>
        </div>
      </div>
     </motion.div>
  );
}

