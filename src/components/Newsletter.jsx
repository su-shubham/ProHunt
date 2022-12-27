import React, { useState } from 'react';

export const Newsletter = () => {

  const[email,setEmail]=useState('')
  const handleFormSubmit =(e)=>{
    e.preventDefault();
    console.log(email)
    const data=[email]
    fetch('http://localhost:8000/email/',{
    method:'POST',
    headers:{
      "Content-Type": "application/json"
    },
    body:JSON.stringify(data)
    }).then(res=>res.json())
      .then(res=>{
        console.log(res['message'])
        // alert('Form Submit successfully')
      })
  }

  return (
    <div className="mb-6">
      <div className="mt-4 text-base font-bold mb-3 text-gray-900">
        Newsletter
      </div>
      <div className="bg-white rounded shadow ">
        <div>
          <div className="p-5 mt-7">
            <span className="font-bold text-base text-gray-900 pb-2 flex">
              Get the best new products in your inbox, every day 👇
            </span>
            <div>
              <form method='post' action="#" onSubmit={handleFormSubmit}>
                <input
                  type="email"
                  name="email"
                  className="text-f13 pl-4 w-full rounded  focus:bg-transparent border border-gray-300 focus:border-grey-500 outline-none placeholder-gray-500 py-1 px- leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Your email"
                  // value={email}
                  onChange={(event)=>
                    setEmail(event.target.value)
                  }
                />
                {/* <div className="mt-3">
                  <button className="primary text-f11 font-bold bg-[#f43f5e] uppercase inline-flex text-white items-center bg-orange border-0 py-2 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 w-full">
                    <span className="f13 text-center mx-auto">Subscribe</span>
                  </button>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
