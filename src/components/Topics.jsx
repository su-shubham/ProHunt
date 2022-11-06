import React from "react";

// want to add col span differ like todayList

const Topics = () => {
  return (
    <div>
      <div className="upper">
        <h2 className="text-5xl font-[600] tracking-tight">Topics</h2>
        <p className="my-5 ml-3 text-lg font-300">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet dolor
          quisquam distinctio perspiciatis consequuntur at reiciendis nisi ad
          deserunt error.
        </p>
      </div>
      <div className="flex bg-white rounded shadow overflow-hidden sm:flex items-center mb-6 ">
        <div className="flex w-full ">
          <ul className="w-full ">
            <li>
              <div className="flex pl-5 pr-24 pt-5 pb-5 relative border-b border-gray-200 transition ease-in-out duration-300 bg-gradient-to-tr from-white hover:via-white hover:to-rose-200 z-1">
                <div>
                  <img
                    className="w-20 h-20"
                    src="https://raw.githubusercontent.com/Sarika11-06/product_hunt_ui_clone/main/src/assets/kona.jpeg"
                    alt="product hunt"
                  />
                </div>
                <div className="ml-2">
                  <h3 className="text-base font-bold text-gray-900">
                    Audioblogs
                  </h3>
                  <p className="text-f13 font-normal">
                    <a href="javascript.void(0)">
                      Listen to any web article in your podcast player
                    </a>
                  </p>
                  <div className="visible md:invisible ">
                    <span className="inline-flex items-center mt-3 border border-grey-100 rounded pl-2 pb-1 pt-1 pr-2 ">
                      <button className="">Follow</button>
                    </span>
                  </div>
                </div>
                <div className="absolute top-25 right-40 border border-gray-200 rounded invisible md:visible">
                  <div className="flex-col align-center items-center px-5 py-1 inset-y-3">
                    <button className="text-lg font-[700]">Follow</button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Topics;
