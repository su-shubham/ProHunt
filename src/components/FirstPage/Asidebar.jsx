import React from "react";
import SkeletonAsideBar from "../SkeletonComponent/skeletons/SkeletonAsideBar";
import { useState } from "react";
import SkeletonElement from "../SkeletonComponent/skeletons/SkeletonElement";

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
                  <img src="https://raw.githubusercontent.com/sarika11-06/product_hunt_ui_clone/main/src/assets/sideOne.jpeg" alt="podcast" />
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
                  <img src="https://raw.githubusercontent.com/sarika11-06/product_hunt_ui_clone/main/src/assets/sideTwo.jpeg" alt="podcast" />
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
                  <img src="https://raw.githubusercontent.com/sarika11-06/product_hunt_ui_clone/main/src/assets/sideThree.png" alt="podcast" />
                </div>
              </div>

              <div className="border-b border-gray-200 overflow-hidden sm:flex justify-between p-5 items-center">
                <div>
                  <span className="text-f13 font-bold text-gray-900 mb-2 block">
                   Finale To Do
                  </span>
                  <div className="text-f13 text-gray-500">
                  A powerful personal planner, task manager and habit tracker
                  </div>
                </div>
                <div>
                  <img src="https://ph-files.imgix.net/777ee03b-4d77-44bf-a9b2-54fc12ff795f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=80&h=80&fit=crop&dpr=1" alt="podcast" />
                </div>
              </div>

              <div className="border-b border-gray-200 overflow-hidden sm:flex justify-between p-5 items-center">
                <div>
                  <span className="text-f13 font-bold text-gray-900 mb-2 block">
                  Graphic AI Art Assistant
                  </span>
                  <div className="text-f13 text-gray-500">
                  Turns your words into images directly in WhatsApp.
                  </div>
                </div>
                <div>
                  <img src="https://ph-files.imgix.net/ad5cbffc-3cd8-4473-9249-91955c8cc2c9.jpeg?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=80&h=80&fit=crop&dpr=1" alt="podcast" />
                </div>
              </div>
              <div className="border-b border-gray-200 overflow-hidden sm:flex justify-between p-5 items-center">
                <div>
                  <span className="text-f13 font-bold text-gray-900 mb-2 block">
                  Databar.ai
                  </span>
                  <div className="text-f13 text-gray-500">
                  Connect to any data API in under 3 clicks
                  </div>
                </div>
                <div>
                  <img src="https://ph-files.imgix.net/ebf6c09c-01e0-4ec2-abc2-e69b6fd22dd7.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=80&h=80&fit=crop&dpr=1" alt="podcast" />
                </div>
              </div>
              <div className="border-b border-gray-200 overflow-hidden sm:flex justify-between p-5 items-center">
                <div>
                  <span className="text-f13 font-bold text-gray-900 mb-2 block">
                    Aaply
                  </span>
                  <div className="text-f13 text-gray-500">
                  Aaply is a wireframe constructor, that helps to work out the logic of the app.
                  </div>
                </div>
                <div>
                  <img src="https://ph-files.imgix.net/b3e70eff-6989-49a5-8d03-c0a8c069e4f2.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=80&h=80&fit=crop&dpr=1" alt="podcast" />
                </div>
              </div>
              <div className="border-b border-gray-200 overflow-hidden sm:flex justify-between p-5 items-center">
                <div>
                  <span className="text-f13 font-bold text-gray-900 mb-2 block">
                  LectureKit
                  </span>
                  <div className="text-f13 text-gray-500">
                  Developer-First platform for creating and managing online courses.
                  </div>
                </div>
                <div>
                  <img src="https://ph-files.imgix.net/79674bf0-9929-4b43-9f1a-d11dd702f94f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=80&h=80&fit=crop&dpr=1" alt="podcast" />
                </div>
              </div>
              <div className="border-b border-gray-200 overflow-hidden sm:flex justify-between p-5 items-center">
                <div>
                  <span className="text-f13 font-bold text-gray-900 mb-2 block">
                  Pulsetic
                  </span>
                  <div className="text-f13 text-gray-500">
                  Product monitoring made easy and affordable.
                  </div>
                </div>
                <div>
                  <img src="https://ph-files.imgix.net/faa3c5b6-9ee0-4ebe-a46d-9a36cd4b271f.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=80&h=80&fit=crop&dpr=1" alt="podcast" />
                </div>
              </div>
              <div className="border-b border-gray-200 overflow-hidden sm:flex justify-between p-5 items-center">
                <div>
                  <span className="text-f13 font-bold text-gray-900 mb-2 block">
                      Sprout
                  </span>
                  <div className="text-f13 text-gray-500">
                    Application for Notes, bookmarks.
                  </div>
                </div>
                <div>
                  <img src="https://ph-files.imgix.net/e83140bb-1ef7-4f67-b2fb-8675bd852c71.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=80&h=80&fit=crop&dpr=1" alt="podcast" />
                </div>
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
        {skeletonData && <SkeletonAsideBar />}
        {skeletonData && <SkeletonAsideBar />}
        {skeletonData && <SkeletonAsideBar />}
        {skeletonData && <SkeletonAsideBar />}
        {skeletonData && <SkeletonAsideBar />}
        {skeletonData && <SkeletonAsideBar />}
        {skeletonData && <SkeletonAsideBar />}
      </div>
    </div>
  );
};

export default Asidebar;

