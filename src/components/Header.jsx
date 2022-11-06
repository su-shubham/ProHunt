import { useFiefAuth, useFiefIsAuthenticated, useFiefUserinfo } from '@fief/fief/react';
import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react'
import { Disclosure} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Header = () => {
  const fiefAuth = useFiefAuth();
  const isAuthenticated = useFiefIsAuthenticated();
  const userinfo = useFiefUserinfo();  

  const login = useCallback(() => {  
    fiefAuth.redirectToLogin(`${window.location.protocol}//${window.location.host}/callback`);
  }, [fiefAuth]);

  const logout = useCallback(() => {  
    fiefAuth.logout(`${window.location.protocol}//${window.location.host}`);
  }, [fiefAuth]);

  return (
  <>
    <Disclosure as="nav" className="fixed bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700   md:backdrop-filter md:backdrop-blur-lg md:bg-opacity-30  md:border-b md:border-gray-200 w-full md:shadow-lg">
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
                <Link to="/">
                <img
                    className="block h-8 w-auto lg:hidden"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  />
                </Link>
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <a className='text-gray-600  hover:text-gray-700 px-3 py-2 rounded-md font-medium text-xl '><Link to="/product">Products</Link></a>
                    <a className='text-gray-600  hover:text-gray-700 px-3 py-2 rounded-md font-medium text-xl'><Link to="/topics">Topics</Link></a>
                    <a className='text-gray-600  hover:text-gray-700 px-3 py-2 rounded-md font-medium text-xl'><Link to="/blog">Blog</Link></a>
                    <a className='text-gray-600  hover:text-gray-700 px-3 py-2 rounded-md font-medium text-xl'><Link to="/community">Community</Link></a>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="btn text-white px-5 py-2 border-2 rounded-md cursor-pointer font-bold bg-[#f43f5e]">
                {!isAuthenticated && <button type="button" onClick={() => login()}>Login</button>}
        {isAuthenticated && userinfo && (
            <div>
            <button type="button" onClick={() => logout()}>Logout</button>
          </div>
        )}
                    </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <a href="#" className='text-gray-600  block px-3 py-2 rounded-md text-base font-medium'><Link to="/newsletter">Products</Link></a>
                <a href="#" className='text-gray-600 block px-3 py-2 rounded-md text-base font-medium'><Link to="/topics">Topics</Link></a>
                <a href="#" className='text-gray-600 block px-3 py-2 rounded-md text-base font-medium'><Link to="/blog">Blog</Link></a>
                <a href="#" className='text-gray-600 block px-3 py-2 rounded-md text-base font-medium'>Community</a>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </>
);
};

export default Header;
