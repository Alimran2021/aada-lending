import React, { useState } from 'react';
import { Transition } from "@headlessui/react";
import HeaderSection from '../../Home/HeaderSection/HeaderSection';


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
<div>
<img className="hidden lg:block bg-no-repeat bg-cover absolute w-[579px] h-[579px] -top-[0.75rem] -left-[2.75rem] z-10" src="/images/header-backCorner.png" alt=""/>
<img className=" block lg:hidden absolute w-full -top-[0.75rem] right-0 z-10" src="/images/headerMb-background.png" alt=""/>
      <nav className="hidden lg:block py-[22px] bg-no-repeat bg-cover w-full" style={{backgroundImage:'url(/images/header-background.png)'}}>
        <div className="relative"></div>
        <div className=" container px-4 py-[22px] rounded-[10px] lg:rounded-[20px] sm:px-6 lg:px-8 bg-[#b5feda08] relative z-20">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
            <div className="flex-shrink-0 block md:hidden">
                <img
                  className="w-[114px] h-[35px] cursor-pointer"
                  src="/images/header-logo.png"
                  alt="Workflow"
                />
              </div>
              <div className="hidden md:block">
                <div className="mx-10 grid grid-cols-3 items-baseline justify-between gap-[14.25rem] space-x-4">
                    <div className="py-[22px]">
                        <a
                        href="/#"
                        className=" text-[#B5FED9] px-3 py-2 rounded-md text-sm font-black uppercase active:text-[#B5FED9]"
                        >
                            home
                        </a>

                        <a
                            href="/#"
                            className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase"
                        >
                            Docs
                        </a>
                    </div>
                    <div>
                        <img className="lg:w-[180px] lg:h-[55px]" src="/images/header-logo.png" alt=""/>
                    </div>
                    <div>
                        <a
                        href="/#"
                        className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium uppercase"
                        >
                            whitepaper
                        </a>

                        <a
                            href="/#"
                            className="text-gray-300 hover:text-white focus:underline-white px-3 py-2 rounded-md text-sm font-medium uppercase"
                        >
                            lightpaper
                        </a>
                    </div>                  
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/#"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium uppercase"
                >
                  home
                </a>

                <a
                  href="/#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium uppercase"
                >
                  Doc
                </a>

                <a
                  href="/#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium uppercase"
                >
                  whitepaper
                </a>

                <a
                  href="/#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium uppercase"
                >
                  lightpaper
                </a>
              </div>
            </div>
          )}
        </Transition>
        <HeaderSection/>
      </nav>
      {/* mobile device */}

      <nav className="block lg:hidden py-[22px] bg-no-repeat bg-cover px-[15px] relative w-full bg-[#21202E]" style={{backgroundImage:'url(/images/header-background2.png)'}}>
        <div className="max-w-7xl container px-4 py-[22px] rounded-[10px] lg:rounded-[20px] sm:px-6 lg:px-8 bg-[#b5feda08] relative z-20">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
            <div className="flex-shrink-0 block md:hidden">
                <img
                  className="w-[114px] h-[35px] cursor-pointer"
                  src="/images/header-logo.png"
                  alt="Workflow"
                />
              </div>
            </div>
            <div className="-mr-2 flex md:hidden relative z-20">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden relative z-20" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3 relative z-20">
                <a
                  href="/#"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium uppercase relative z-50"
                >
                  home
                </a>

                <a
                  href="/#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium uppercase"
                >
                  Doc
                </a>

                <a
                  href="/#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium uppercase"
                >
                  whitepaper
                </a>

                <a
                  href="/#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium uppercase"
                >
                  lightpaper
                </a>
              </div>
            </div>
          )}
        </Transition>
        <HeaderSection/>
      </nav>
    </div>
    );
};

export default Header;