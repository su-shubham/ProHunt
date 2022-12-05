import React from "react";
import Sideone from "../assets/sideOne.jpeg";
import Sidetwo from "../assets/sideTwo.jpeg";
import Sidethree from "../assets/sideThree.png";
import SkeletonAsideBar from "./components/skeletons/SkeletonAsideBar";
import { useState } from "react";
import SkeletonElement from "./components/skeletons/SkeletonElement";

export const Asidebar = () => {
  const [skeletonData, setSkeletonData] = useState(true);

  setTimeout(() => {
    setSkeletonData(false);
  }, 2000);

  return (
    <div>
      {!skeletonData && (
        <aside>
          <div>
            <div className="mt-3 text-base font-bold mb-3 text-gray-900">
              Upcomming Products
              <span className="text-f13 ml-2 text-gray-500 font-normal">
                Powered by Ship
              </span>
            </div>
            <div className="bg-white rounded shadow ">
              <div className="border-b border-gray-200 overflow-hidden sm:flex justify-between p-5 items-center">
                <div>
                  <span className="text-f13 font-bold text-gray-900 mb-2 block">
                    Podcast Ping
                  </span>
                  <div className="text-f13 text-gray-500">
                    Uptime monitoring for podcasters
                  </div>
                </div>
                <div>
                  <img src={Sideone} alt="podcast" />
                </div>
              </div>

              <div className="border-b border-gray-200 overflow-hidden sm:flex justify-between p-5 items-center">
                <div>
                  <span className="text-f13 font-bold text-gray-900 mb-2 block">
                    Wizard Spell
                  </span>
                  <div className="text-f13 text-gray-500">
                    Stuff that helps people launch better everywhere.
                  </div>
                </div>
                <div>
                  <img src={Sidetwo} alt="podcast" />
                </div>
              </div>

              <div className="border-b border-gray-200 overflow-hidden sm:flex justify-between p-5 items-center">
                <div>
                  <span className="text-f13 font-bold text-gray-900 mb-2 block">
                    Reminder App
                  </span>
                  <div className="text-f13 text-gray-500">
                    Application for reminder everyday.
                  </div>
                </div>
                <div>
                  <img src={Sidethree} alt="podcast" />
                </div>
              </div>

              <div className="p-5 flex">
                <button className="w-full font-bold text-f11 items-center border border-gray-300 uppercase py-2 focus:outline-none text-white bg-[#f43f5e] rounded text-base ">
                  <span className="f12 text-hunt">view all</span>
                </button>
              </div>

            </div>
          </div>
        </aside>
      )}
      <div className="Skeleton mt-10">
        {skeletonData && (
          <div className="skeleton-wrapper light">
            <SkeletonElement type="text"/>{" "}
          </div>
        )}
        {skeletonData && <SkeletonAsideBar />}
        {skeletonData && <SkeletonAsideBar />}
        {skeletonData && <SkeletonAsideBar />}
        {skeletonData && (
          <div className="skeleton-wrapper light">
            <SkeletonElement type="button"/>{" "}
          </div>
        )}
      </div>
    </div>
  );
};

export default Asidebar;

