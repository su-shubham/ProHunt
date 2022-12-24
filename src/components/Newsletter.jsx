import React from "react";

export const Newsletter = () => {
  return (
    <div className="mb-6 flex items-center justify-center min-h-screen">
      <div className="">
        <div>
          <div className="p-5">
            <div className="login-form bg-white w-[400px] mx-[65px] my-auto flex flex-col rounded-md shadow-2xl">
              <form className="">
                <h1 className="pt-9 py-9 pb-0 font-semibold text-3xl flex items-center justify-center mb-5">NewsLetter </h1>
                <div className="content p-9 text-center outline-none relative">
                    <label className="top-0 absolute  left-10 px-3 py-0 text-2xl text-black">Email</label>
                  <div className="input-field px-3 py-1 ">
                    <input
                      type="email"
                      autocomplete="nope"
                      className="text-base block w-full px-3 py-[1px] border-0 border-b border-[#747474]  focus:ring-0"
                    />
                  </div>
                </div>
                <div className="action w-full flex justify-center items-center mb-8">
                  <button className=" border-0 px-5 py-4 uppercase bg-[#f43f5e] text-[#fff] font-extrabold tracking-wide hover:shadow-xl rounded-md outline-none ">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
