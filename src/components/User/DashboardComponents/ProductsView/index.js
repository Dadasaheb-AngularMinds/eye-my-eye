import React, { useState } from 'react';
import productImg from '../../../../assets/images/product-furniture.png';
import { useNavigate } from 'react-router-dom';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

import {
  clothing,
  homesAndFurnitures,
  jewellery,
  mobilesAndElectronics,
  makeUp,
  healthCare,
  books,
  toys,
} from './data';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const ProductsView = () => {
  const navigate = useNavigate();

  return (
    <div className="container-fluid">
      <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-4">
        <div className="col-span-1 md:col-span-1">
          <div className="p-5">
            <div class="max-w-screen-xl mx-auto px-5 bg-white min-h-sceen">
              <div class="flex flex-col items-left">
                <h2 class="font-bold text-xl font-header text-orange-500">
                  Categories
                </h2>
              </div>
              <div class="grid divide-y divide-neutral-200 max-w-xl mx-auto">
                <div class="py-5">
                  <details class="group">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>
                        {' '}
                        <i class={`fa ${clothing[0]?.icon} mr-2`}></i>{' '}
                        {clothing[0].category}
                      </span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <div class="text-neutral-600 mt-3 group-open:animate-fadeIn px-2">
                      {clothing?.map((item, index) => {
                        return (
                          <div className="flex">
                            <span>
                              <input
                                type="checkbox"
                                class="checked:bg-orange-500 h-3 w-3 focus:outline-none focus:ring-0 cursor-pointer"
                              />
                              <span className="ml-2">{item?.text}</span>
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </details>
                </div>
                <div class="py-5">
                  <details class="group">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>
                        <i class={`fa ${homesAndFurnitures[0]?.icon} mr-2`}></i>{' '}
                        {homesAndFurnitures[0].category}
                      </span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <div class="text-neutral-600 mt-3 group-open:animate-fadeIn px-2">
                      {clothing?.map((item, index) => {
                        return (
                          <div className="flex">
                            <span>
                              <input
                                type="checkbox"
                                class="checked:bg-orange-500 h-3 w-3 focus:outline-none focus:ring-0 cursor-pointer"
                              />
                              <span className="ml-2">{item?.text}</span>
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </details>
                </div>
                <div class="py-5">
                  <details class="group">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>
                        <i class={`fa ${jewellery[0]?.icon} mr-2`}></i>{' '}
                        {jewellery[0].text}
                      </span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <div class="text-neutral-600 mt-3 group-open:animate-fadeIn px-2">
                      {clothing?.map((item, index) => {
                        return (
                          <div className="flex">
                            <span>
                              <input
                                type="checkbox"
                                class="checked:bg-orange-500 h-3 w-3 focus:outline-none focus:ring-0 cursor-pointer"
                              />
                              <span className="ml-2">{item?.text}</span>
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </details>
                </div>
                <div class="py-5">
                  <details class="group">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>
                        <i
                          class={`fa ${mobilesAndElectronics[0]?.icon} mr-2`}
                        ></i>{' '}
                        {mobilesAndElectronics[0].text}
                      </span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <div class="text-neutral-600 mt-3 group-open:animate-fadeIn px-2">
                      {clothing?.map((item, index) => {
                        return (
                          <div className="flex">
                            <span>
                              <input
                                type="checkbox"
                                class="checked:bg-orange-500 h-3 w-3 focus:outline-none focus:ring-0 cursor-pointer"
                              />
                              <span className="ml-2">{item?.text}</span>
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </details>
                </div>
                <div class="py-5">
                  <details class="group">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>
                        <i class={`fa ${makeUp[0]?.icon} mr-2`}></i>{' '}
                        {makeUp[0].category}
                      </span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <div class="text-neutral-600 mt-3 group-open:animate-fadeIn px-2">
                      {clothing?.map((item, index) => {
                        return (
                          <div className="flex">
                            <span>
                              <input
                                type="checkbox"
                                class="checked:bg-orange-500 h-3 w-3 focus:outline-none focus:ring-0 cursor-pointer"
                              />
                              <span className="ml-2">{item?.text}</span>
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </details>
                </div>
                <div class="py-5">
                  <details class="group">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>
                        <i class={`fa ${healthCare[0]?.icon} mr-2`}></i>{' '}
                        {healthCare[0].category}
                      </span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <div class="text-neutral-600 mt-3 group-open:animate-fadeIn px-2">
                      {clothing?.map((item, index) => {
                        return (
                          <div className="flex">
                            <span>
                              <input
                                type="checkbox"
                                class="checked:bg-orange-500 h-3 w-3 focus:outline-none focus:ring-0 cursor-pointer"
                              />
                              <span className="ml-2">{item?.text}</span>
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </details>
                </div>
                <div class="py-5">
                  <details class="group">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>
                        <i class={`fa ${books[0]?.icon} mr-2`}></i>{' '}
                        {books[0].category}
                      </span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <div class="text-neutral-600 mt-3 group-open:animate-fadeIn px-2">
                      {clothing?.map((item, index) => {
                        return (
                          <div className="flex">
                            <span>
                              <input
                                type="checkbox"
                                class="checked:bg-orange-500 h-3 w-3 focus:outline-none focus:ring-0 cursor-pointer"
                              />
                              <span className="ml-2">{item?.text}</span>
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </details>
                </div>
                <div class="py-5">
                  <details class="group">
                    <summary class="flex justify-between items-center font-medium cursor-pointer list-none">
                      <span>
                        <i class={`fa ${toys[0]?.icon} mr-2`}></i>{' '}
                        {toys[0].category}
                      </span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <div class="text-neutral-600 mt-3 group-open:animate-fadeIn px-2">
                      {clothing?.map((item, index) => {
                        return (
                          <div className="flex">
                            <span>
                              <input
                                type="checkbox"
                                class="checked:bg-orange-500 h-3 w-3 focus:outline-none focus:ring-0 cursor-pointer"
                              />
                              <span className="ml-2">{item?.text}</span>
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 px-2 md:col-span-3">
          <div className='grid grid-cols-1 gap-5 p-4 md:grid-cols-3 sm:grid-cols-2'>
            <div className="">
              <span className="text-neutral-600 font-header">
                View :{' '}
                <i
                  class="fa fa-plus-square-o ml-2 cursor-pointer"
                  aria-hidden="true"
                ></i>
                <i
                  class="fa fa-bars ml-2 cursor-pointer"
                  aria-hidden="true"
                ></i>
              </span>
            </div>
             <div className="">
              <span className="text-neutral-600 font-header">
                Showing 1–12 of 24 results
              </span>
            </div>
            <div className="text-right ">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="text-neutral-600 inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 font-header text-sm font-semibold shadow-sm ring-0 ring-inset ring-gray-300 hover:bg-gray-50">
                    Default Sorting
                    <ChevronDownIcon
                      className="w-5 h-5 -mr-1 text-gray-400"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Account settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            Support
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            License
                          </a>
                        )}
                      </Menu.Item>
                      <form method="POST" action="#">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="submit"
                              className={classNames(
                                active
                                  ? 'bg-gray-100 text-gray-900'
                                  : 'text-gray-700',
                                'block w-full px-4 py-2 text-left text-sm'
                              )}
                            >
                              Sign out
                            </button>
                          )}
                        </Menu.Item>
                      </form>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 p-4 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2">
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => {
              return (
                <div
                  className="relative transition-all duration-300 shadow-xl group h-max"
                  onClick={() => navigate('/user/product')}
                >
                  <div className="absolute right-0 z-50 space-y-4 transition-all duration-500 opacity-0 group-hover:opacity-70 group-hover:pr-4">
                    <div className="p-2 px-3 transition-all duration-300 bg-white cursor-pointer group-hover:opacity-100 group-hover:shadow-lg hover:bg-gray-950 hover:text-white">
                      <i class="fa fa-cart-plus" aria-hidden="true"></i>
                    </div>
                    <div className="p-2 px-3 transition-all duration-300 bg-white cursor-pointer group-hover:opacity-100 group-hover:shadow-lg hover:bg-gray-950 hover:text-white ">
                      <i class="fa fa-heart-o" aria-hidden="true"></i>
                    </div>
                    <div className="p-2 px-3 transition-all duration-300 bg-white cursor-pointer group-hover:opacity-100 group-hover:shadow-lg hover:bg-gray-950 hover:text-white ">
                      <i class="fa fa-eye" aria-hidden="true"></i>
                    </div>
                  </div>
                  <div class="group w-full h-full bg-slate-200 overflow-hidden cursor-pointer hover:brightness-110 duration-500 transition-transform transform  ">
                    <img
                      src={productImg}
                      alt="Image 1"
                      class="w-full h-auto object-center z-30 group-hover:scale-110 duration-500 transition-transform"
                    />
                  </div>
                  <div className="flex flex-col mt-1">
                    <p className="text-orange-500 font-header">FURNITURE</p>
                    <p className="text-gray-900 transition-all duration-500 cursor-pointer font-poppins hover:tracking-wide hover:text-gray-700">
                      Wooden Single Drawer
                    </p>
                    <p className="text-2xl font-header">$125.00</p>
                  </div>
                  <div className="mt-2">
                    <button className="w-full py-1 transition-all duration-300 border border-gray-500 hover:bg-orange-500 hover:text-black">
                      <p className="transition-all duration-300 hover:tracking-wide">
                        Select Options
                      </p>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
