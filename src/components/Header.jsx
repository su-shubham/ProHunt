import {
  useFiefAuth,
  useFiefIsAuthenticated,
  useFiefUserinfo,
} from "@fief/fief/react";
import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const fiefAuth = useFiefAuth();
  const isAuthenticated = useFiefIsAuthenticated();
  const userinfo = useFiefUserinfo();

  const login = useCallback(() => {
    fiefAuth.redirectToLogin(
      `${window.location.protocol}//${window.location.host}/callback`
    );
  }, [fiefAuth]);

  const logout = useCallback(() => {
    fiefAuth.logout(`${window.location.protocol}//${window.location.host}`);
  }, [fiefAuth]);

  return (
    <>
      <Disclosure
        as="nav"
        className="z-50 fixed bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700   md:backdrop-filter md:backdrop-blur-lg md:bg-opacity-30  md:border-b md:border-gray-200 w-full md:shadow-lg"
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center">
                    {/* <Link to="/">
                <img
                    className="block h-8 w-auto lg:hidden animate-bounce"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  />
                </Link> */}
                    <img
                      className=" h-8 w-auto animate-bounce"
                      src="../src/assets/logo.png"
                      alt="Your Company"
                    />
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      <ul className="text-lg tracking-wide items-center flex gap-x-8">
                        <li className="hover:scale-125 duration-300 py-1 hover:text-[#f43f5e]">
                          <a className="cursor-pointer">
                            <Link to="/">Products</Link>
                          </a>
                        </li>
                        <li className="hover:scale-125 duration-300 py-1 hover:text-[#f43f5e]">
                          <a className="cursor-pointer">
                            <Link to="/topics">Topics</Link>
                          </a>
                        </li>
                        {/* <li className="hover:scale-125 duration-300 py-1 hover:text-[#f43f5e]">
                          <a className="cursor-pointer">
                            <Link to="/blog">Blog</Link>
                          </a>
                        </li>
                        <li className="hover:scale-125 duration-300 py-1 hover:text-[#f43f5e]">
                          <a className="cursor-pointer">
                            <Link to="/community">Community</Link>
                          </a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <div className="btn text-white px-5 py-2 border-2 rounded-md font-bold bg-rose-500 hover:bg-rose-600 hover:shadow-lg transition duration-150 ease-in-out">
                    {!isAuthenticated && (
                      <button type="button" onClick={() => login()}>
                        Login
                      </button>
                    )}
                    {isAuthenticated && userinfo && (
                      <div>
                        <button type="button" onClick={() => logout()}>
                          Logout
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                <a className="text-gray-600  block px-3 py-2 rounded-md text-base font-medium">
                  <Link to="/">Products</Link>
                </a>
                <a className="text-gray-600 block px-3 py-2 rounded-md text-base font-medium">
                  <Link to="/topics">Topics</Link>
                </a>
                <a className="text-gray-600 block px-3 py-2 rounded-md text-base font-medium">
                  <Link to="/blog">Blog</Link>
                </a>
                <a className="text-gray-600 block px-3 py-2 rounded-md text-base font-medium">
                  <Link to="/community">Community</Link>
                </a>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <div className="w-full md:w-5/12 -z-50 h-1">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FF0066"
            // d="M60.5,-58.1C75,-46,81,-23,80.4,-0.6C79.9,21.8,72.7,43.7,58.2,55.5C43.7,67.3,21.8,69.2,3.5,65.7C-14.9,62.2,-29.7,53.4,-44.5,41.6C-59.4,29.7,-74.1,14.9,-75.1,-1C-76.1,-16.9,-63.4,-33.8,-48.6,-45.9C-33.8,-58,-16.9,-65.2,3,-68.2C23,-71.3,46,-70.1,60.5,-58.1Z"
            // transform="translate(100 100)"
          >
            <animate
              attributeName="d"
              dur="10000ms"
              repeatCount="indefinite"
              values="M60.5,-58.1C75,-46,81,-23,80.4,-0.6C79.9,21.8,72.7,43.7,58.2,55.5C43.7,67.3,21.8,69.2,3.5,65.7C-14.9,62.2,-29.7,53.4,-44.5,41.6C-59.4,29.7,-74.1,14.9,-75.1,-1C-76.1,-16.9,-63.4,-33.8,-48.6,-45.9C-33.8,-58,-16.9,-65.2,3,-68.2C23,-71.3,46,-70.1,60.5,-58.1Z;
                                            M55.6,-57C67.7,-43.6,70,-21.8,69.3,-0.7C68.6,20.4,64.9,40.8,52.8,54.4C40.8,68,20.4,74.8,0.5,74.3C-19.5,73.9,-38.9,66.1,-52.9,52.5C-66.9,38.9,-75.4,19.5,-75.7,-0.3C-75.9,-20,-68,-40.1,-54.1,-53.5C-40.1,-66.9,-20,-73.8,0.9,-74.6C21.8,-75.5,43.6,-70.4,55.6,-57Z;
                                            M48.2,-50.9C60.1,-36.2,66,-18.1,66,-0.1C65.9,17.9,59.8,35.9,47.9,49.8C35.9,63.8,17.9,73.7,-2,75.7C-22,77.8,-44,71.9,-57.7,57.9C-71.4,44,-76.8,22,-74,2.8C-71.2,-16.4,-60.2,-32.8,-46.5,-47.5C-32.8,-62.3,-16.4,-75.3,0.8,-76.2C18.1,-77,36.2,-65.6,48.2,-50.9Z;
                                            M45.4,-46.1C59.8,-31,73.1,-15.5,74.5,1.3C75.8,18.2,65.2,36.3,50.8,50.4C36.3,64.5,18.2,74.5,-0.1,74.7C-18.5,74.8,-36.9,65.1,-52.4,51C-67.8,36.9,-80.2,18.5,-82.5,-2.3C-84.8,-23,-76.9,-46,-61.5,-61.1C-46,-76.2,-23,-83.5,-3.8,-79.7C15.5,-75.9,31,-61.2,45.4,-46.1Z;
                                            M55.7,-56.5C69.4,-41.9,75.9,-21,73.2,-2.7C70.5,15.6,58.6,31.1,44.9,47.7C31.1,64.3,15.6,81.9,-3.7,85.5C-22.9,89.2,-45.8,78.9,-61.1,62.3C-76.5,45.8,-84.3,22.9,-81.2,3.1C-78.1,-16.6,-64,-33.3,-48.6,-47.9C-33.3,-62.5,-16.6,-75,2.2,-77.2C21,-79.4,41.9,-71.1,55.7,-56.5Z;
                                            M54.2,-54.6C69.6,-38.7,81.1,-19.4,82.1,1C83.1,21.4,73.6,42.8,58.2,55.6C42.8,68.5,21.4,72.8,0.9,71.9C-19.6,71.1,-39.3,65,-51.5,52.1C-63.8,39.3,-68.6,19.6,-70,-1.3C-71.3,-22.3,-69,-44.5,-56.8,-60.4C-44.5,-76.3,-22.3,-85.8,-1.4,-84.3C19.4,-82.9,38.7,-70.5,54.2,-54.6Z;
                                            M59.6,-59.5C74.7,-44.6,82.6,-22.3,82.1,-0.4C81.7,21.4,72.9,42.8,57.9,57C42.8,71.2,21.4,78.1,2.2,75.9C-17.1,73.7,-34.1,62.5,-45.3,48.3C-56.5,34.1,-61.9,17.1,-61.9,0C-61.8,-17,-56.4,-34,-45.2,-48.9C-34,-63.8,-17,-76.8,2.6,-79.4C22.3,-82.1,44.6,-74.4,59.6,-59.5Z;
                                            M60.5,-58.1C75,-46,81,-23,80.4,-0.6C79.9,21.8,72.7,43.7,58.2,55.5C43.7,67.3,21.8,69.2,3.5,65.7C-14.9,62.2,-29.7,53.4,-44.5,41.6C-59.4,29.7,-74.1,14.9,-75.1,-1C-76.1,-16.9,-63.4,-33.8,-48.6,-45.9C-33.8,-58,-16.9,-65.2,3,-68.2C23,-71.3,46,-70.1,60.5,-58.1Z"
              className="-z-10"
            ></animate>
          </path>
        </svg>
      </div>
    </>
  );
};

export default Header;
