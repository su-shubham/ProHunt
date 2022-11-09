import Asidebar from './Asidebar';
import Todaylist from './Todaylist';
import Topics from './Topics';
import {  Popover,PopupButton  } from '@typeform/embed-react'


export default function LandPage() {
  return (
    <>
    <div className="flex items-center flex-wrap mb-20 ">
      <div className="w-full md:w-1/2 text-center ml-32">
        <h4 className="text-6xl text-gray-800 font-bold mb-3 ">
          Add Your <span className="text-[#f43f5e]">Features</span>
        </h4>
        <p className="text-gray-600 mb-8 text-xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          consequatur minus dolorum voluptates veniam eligendi quo sint. Est,
          voluptatum facere.
        </p>
        <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
          <div className="mb-4">
          <div className="btn-sm text-white bg-[#f43f5e] hover:bg-rose-500 ml-3 p-3 rounded-md font-[700]" onClick={Popover}>
         <PopupButton
            style={{ color: 20 }}
            id="s8haTiPZ" >
               List Your Product
          </PopupButton>
        </div>
            {/* <a
              href=""
              className="btn-sm text-white bg-[#f43f5e] hover:bg-rose-500 ml-3 p-3 rounded-md font-[700]"
              >
                
              List Your Products
            </a> */}
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 mt-40">
        <img
          src="https://www.fief.dev/illustrations/castle.svg?auto=format&fit=max&w=64"
          alt="Monitoring"
          />
      </div>
    </div>
    <div className="pt-20">
        <div className="container mx-auto px-5">
          <div className="pt-6 grid grid-cols-1 lg:grid-cols-6 lg:gap-6">
            <div className="col-span-4 sm:col-span-4 lg:col-span-6">
              {/* <LandPage /> */}
            </div>
            <div className='col-span-4 sm:col-span-4 lg:col-span-4'>
              <Todaylist />
            </div>
            <div className="col-span-2 lg:col-span-2">
              <Asidebar />
            </div>
            <div className="col-span-4 sm:col-span-4 lg:col-span-4">
              <Topics />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="example_popover">
     {/* <Popover 
     style={{ color: 20 }}
     id="s8haTiPZ" > */}
       {/* <button className="btn">Open Popover</button> */}
     {/* </Popover> */}
          {/* </div> */} 
          </>
  );
}
