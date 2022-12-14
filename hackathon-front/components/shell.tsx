import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  Bars3BottomLeftIcon,
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import { FcHome } from "react-icons/fc";
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'

//sidebar navigation options
const navigation = [
  { name: 'Dashboard', href: '#', icon: FcHome, current: true },
  { name: 'Team', href: '#', icon: UsersIcon, current: false },
  { name: 'Projects', href: '#', icon: FolderIcon, current: false },
  { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
  { name: 'Documents', href: '#', icon: InboxIcon, current: false },
  { name: 'Reports', href: '#', icon: ChartBarIcon, current: false },
]

//navigation options for the user profile button.
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes: any) {
  return classes.filter(Boolean).join(' ')
}

export default function Shell({ children }: any) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center px-4">
                  <svg width="137" height="31" viewBox="0 0 137 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.12 0.400024C19.8133 0.400024 20.3867 0.626691 20.84 1.08002C21.2933 1.53336 21.52 2.12002 21.52 2.84002V27.56C21.52 28.2534 21.2933 28.84 20.84 29.32C20.3867 29.7734 19.8133 30 19.12 30C18.4267 30 17.8533 29.7734 17.4 29.32C16.9467 28.84 16.72 28.2534 16.72 27.56V25.6L17.6 25.96C17.6 26.3067 17.4133 26.7334 17.04 27.24C16.6667 27.72 16.16 28.2 15.52 28.68C14.88 29.16 14.12 29.5734 13.24 29.92C12.3867 30.24 11.4533 30.4 10.44 30.4C8.60001 30.4 6.93334 29.9334 5.44001 29C3.94667 28.04 2.76001 26.7334 1.88001 25.08C1.02667 23.4 0.600006 21.48 0.600006 19.32C0.600006 17.1334 1.02667 15.2134 1.88001 13.56C2.76001 11.88 3.93334 10.5734 5.40001 9.64002C6.86667 8.68002 8.49334 8.20002 10.28 8.20002C11.4267 8.20002 12.48 8.37336 13.44 8.72002C14.4 9.06669 15.2267 9.50669 15.92 10.04C16.64 10.5734 17.1867 11.12 17.56 11.68C17.96 12.2134 18.16 12.6667 18.16 13.04L16.72 13.56V2.84002C16.72 2.14669 16.9467 1.57336 17.4 1.12002C17.8533 0.640024 18.4267 0.400024 19.12 0.400024ZM11.04 26C12.2133 26 13.24 25.7067 14.12 25.12C15 24.5334 15.68 23.7334 16.16 22.72C16.6667 21.7067 16.92 20.5734 16.92 19.32C16.92 18.04 16.6667 16.8934 16.16 15.88C15.68 14.8667 15 14.0667 14.12 13.48C13.24 12.8934 12.2133 12.6 11.04 12.6C9.89334 12.6 8.88001 12.8934 8.00001 13.48C7.12001 14.0667 6.42667 14.8667 5.92001 15.88C5.44001 16.8934 5.20001 18.04 5.20001 19.32C5.20001 20.5734 5.44001 21.7067 5.92001 22.72C6.42667 23.7334 7.12001 24.5334 8.00001 25.12C8.88001 25.7067 9.89334 26 11.04 26Z" fill="white"/>
                    <path d="M47.4772 19.32C47.4772 21.5067 46.9839 23.44 45.9972 25.12C45.0372 26.7734 43.7305 28.0667 42.0772 29C40.4505 29.9334 38.6239 30.4 36.5972 30.4C34.5705 30.4 32.7305 29.9334 31.0772 29C29.4505 28.0667 28.1439 26.7734 27.1572 25.12C26.1972 23.44 25.7172 21.5067 25.7172 19.32C25.7172 17.1334 26.1972 15.2134 27.1572 13.56C28.1439 11.88 29.4505 10.5734 31.0772 9.64002C32.7305 8.68002 34.5705 8.20002 36.5972 8.20002C38.6239 8.20002 40.4505 8.68002 42.0772 9.64002C43.7305 10.5734 45.0372 11.88 45.9972 13.56C46.9839 15.2134 47.4772 17.1334 47.4772 19.32ZM42.6772 19.32C42.6772 17.96 42.3972 16.7867 41.8372 15.8C41.3039 14.7867 40.5705 14 39.6372 13.44C38.7305 12.88 37.7172 12.6 36.5972 12.6C35.4772 12.6 34.4505 12.88 33.5172 13.44C32.6105 14 31.8772 14.7867 31.3172 15.8C30.7839 16.7867 30.5172 17.96 30.5172 19.32C30.5172 20.6534 30.7839 21.8267 31.3172 22.84C31.8772 23.8267 32.6105 24.6 33.5172 25.16C34.4505 25.72 35.4772 26 36.5972 26C37.7172 26 38.7305 25.72 39.6372 25.16C40.5705 24.6 41.3039 23.8267 41.8372 22.84C42.3972 21.8267 42.6772 20.6534 42.6772 19.32Z" fill="white"/>
                    <path d="M63.1181 8.20002C65.0915 8.20002 66.5848 8.61336 67.5981 9.44003C68.6381 10.2667 69.3448 11.3734 69.7181 12.76C70.1181 14.12 70.3181 15.64 70.3181 17.32V27.56C70.3181 28.2534 70.0915 28.84 69.6381 29.32C69.1848 29.7734 68.6115 30 67.9181 30C67.2248 30 66.6515 29.7734 66.1981 29.32C65.7448 28.84 65.5181 28.2534 65.5181 27.56V17.32C65.5181 16.44 65.3981 15.6534 65.1581 14.96C64.9448 14.24 64.5448 13.6667 63.9581 13.24C63.3715 12.8134 62.5315 12.6 61.4381 12.6C60.3715 12.6 59.4648 12.8134 58.7181 13.24C57.9981 13.6667 57.4381 14.24 57.0381 14.96C56.6648 15.6534 56.4781 16.44 56.4781 17.32V27.56C56.4781 28.2534 56.2515 28.84 55.7981 29.32C55.3448 29.7734 54.7715 30 54.0781 30C53.3848 30 52.8115 29.7734 52.3581 29.32C51.9048 28.84 51.6781 28.2534 51.6781 27.56V11.04C51.6781 10.3467 51.9048 9.77336 52.3581 9.32002C52.8115 8.84002 53.3848 8.60002 54.0781 8.60002C54.7715 8.60002 55.3448 8.84002 55.7981 9.32002C56.2515 9.77336 56.4781 10.3467 56.4781 11.04V12.76L55.8781 12.64C56.1181 12.1867 56.4648 11.7067 56.9181 11.2C57.3715 10.6667 57.9048 10.1734 58.5181 9.72002C59.1315 9.26669 59.8248 8.90669 60.5981 8.64002C61.3715 8.34669 62.2115 8.20002 63.1181 8.20002Z" fill="white"/>
                    <path d="M93.0263 8.20002C93.7196 8.20002 94.2929 8.42669 94.7463 8.88002C95.1996 9.33336 95.4263 9.92002 95.4263 10.64V27.56C95.4263 28.2534 95.1996 28.84 94.7463 29.32C94.2929 29.7734 93.7196 30 93.0263 30C92.3329 30 91.7596 29.7734 91.3063 29.32C90.8529 28.84 90.6263 28.2534 90.6263 27.56V25.6L91.5063 25.96C91.5063 26.3067 91.3196 26.7334 90.9463 27.24C90.5729 27.72 90.0663 28.2 89.4263 28.68C88.7863 29.16 88.0263 29.5734 87.1463 29.92C86.2929 30.24 85.3596 30.4 84.3463 30.4C82.5063 30.4 80.8396 29.9334 79.3463 29C77.8529 28.04 76.6663 26.7334 75.7863 25.08C74.9329 23.4 74.5063 21.48 74.5063 19.32C74.5063 17.1334 74.9329 15.2134 75.7863 13.56C76.6663 11.88 77.8396 10.5734 79.3063 9.64002C80.7729 8.68002 82.3996 8.20002 84.1863 8.20002C85.3329 8.20002 86.3863 8.37336 87.3463 8.72002C88.3063 9.06669 89.1329 9.50669 89.8263 10.04C90.5463 10.5734 91.0929 11.12 91.4663 11.68C91.8663 12.2134 92.0663 12.6667 92.0663 13.04L90.6263 13.56V10.64C90.6263 9.94669 90.8529 9.37336 91.3063 8.92002C91.7596 8.44002 92.3329 8.20002 93.0263 8.20002ZM84.9463 26C86.1196 26 87.1463 25.7067 88.0263 25.12C88.9063 24.5334 89.5863 23.7334 90.0663 22.72C90.5729 21.7067 90.8263 20.5734 90.8263 19.32C90.8263 18.04 90.5729 16.8934 90.0663 15.88C89.5863 14.8667 88.9063 14.0667 88.0263 13.48C87.1463 12.8934 86.1196 12.6 84.9463 12.6C83.7996 12.6 82.7863 12.8934 81.9063 13.48C81.0263 14.0667 80.3329 14.8667 79.8263 15.88C79.3463 16.8934 79.1063 18.04 79.1063 19.32C79.1063 20.5734 79.3463 21.7067 79.8263 22.72C80.3329 23.7334 81.0263 24.5334 81.9063 25.12C82.7863 25.7067 83.7996 26 84.9463 26Z" fill="white"/>
                    <path d="M100.863 9.00002H110.343C110.983 9.00002 111.517 9.21336 111.943 9.64002C112.37 10.0667 112.583 10.6 112.583 11.24C112.583 11.8534 112.37 12.3734 111.943 12.8C111.517 13.2 110.983 13.4 110.343 13.4H100.863C100.223 13.4 99.6901 13.1867 99.2634 12.76C98.8368 12.3334 98.6234 11.8 98.6234 11.16C98.6234 10.5467 98.8368 10.04 99.2634 9.64002C99.6901 9.21336 100.223 9.00002 100.863 9.00002ZM105.143 4.00002C105.837 4.00002 106.397 4.24002 106.823 4.72002C107.277 5.17336 107.503 5.74669 107.503 6.44002V24.24C107.503 24.6134 107.57 24.92 107.703 25.16C107.863 25.4 108.063 25.5734 108.303 25.68C108.57 25.7867 108.85 25.84 109.143 25.84C109.463 25.84 109.757 25.7867 110.023 25.68C110.29 25.5467 110.597 25.48 110.943 25.48C111.317 25.48 111.65 25.6534 111.943 26C112.263 26.3467 112.423 26.8267 112.423 27.44C112.423 28.1867 112.01 28.8 111.183 29.28C110.383 29.76 109.517 30 108.583 30C108.023 30 107.397 29.96 106.703 29.88C106.037 29.7734 105.397 29.5467 104.783 29.2C104.197 28.8267 103.703 28.2667 103.303 27.52C102.903 26.7734 102.703 25.7467 102.703 24.44V6.44002C102.703 5.74669 102.93 5.17336 103.383 4.72002C103.863 4.24002 104.45 4.00002 105.143 4.00002Z" fill="white"/>
                    <path d="M126.875 30.4C124.609 30.4 122.635 29.9334 120.955 29C119.302 28.04 118.022 26.7467 117.115 25.12C116.235 23.4934 115.795 21.6534 115.795 19.6C115.795 17.2 116.275 15.16 117.235 13.48C118.222 11.7734 119.502 10.4667 121.075 9.56002C122.649 8.65336 124.315 8.20002 126.075 8.20002C127.435 8.20002 128.715 8.48002 129.915 9.04002C131.142 9.60002 132.222 10.3734 133.155 11.36C134.089 12.32 134.822 13.44 135.355 14.72C135.915 16 136.195 17.36 136.195 18.8C136.169 19.44 135.915 19.96 135.435 20.36C134.955 20.76 134.395 20.96 133.755 20.96H118.475L117.275 16.96H131.955L131.075 17.76V16.68C131.022 15.9067 130.742 15.2134 130.235 14.6C129.755 13.9867 129.142 13.5067 128.395 13.16C127.675 12.7867 126.902 12.6 126.075 12.6C125.275 12.6 124.529 12.7067 123.835 12.92C123.142 13.1334 122.542 13.4934 122.035 14C121.529 14.5067 121.129 15.1867 120.835 16.04C120.542 16.8934 120.395 17.9734 120.395 19.28C120.395 20.72 120.689 21.9467 121.275 22.96C121.889 23.9467 122.662 24.7067 123.595 25.24C124.555 25.7467 125.569 26 126.635 26C127.622 26 128.409 25.92 128.995 25.76C129.582 25.6 130.049 25.4134 130.395 25.2C130.769 24.96 131.102 24.76 131.395 24.6C131.875 24.36 132.329 24.24 132.755 24.24C133.342 24.24 133.822 24.44 134.195 24.84C134.595 25.24 134.795 25.7067 134.795 26.24C134.795 26.96 134.422 27.6134 133.675 28.2C132.982 28.7867 132.009 29.3067 130.755 29.76C129.502 30.1867 128.209 30.4 126.875 30.4Z" fill="white"/>
                </svg>
                  </div>
                  <div className="mt-5 h-0 flex-1 overflow-y-auto">
                    <nav className="space-y-1 px-2">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                              'mr-4 flex-shrink-0 h-6 w-6'
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5">
            <div className="flex flex-shrink-0 items-center px-4">
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company"
              />
            </div>
            <div className="mt-5 flex flex-grow flex-col">
              <nav className="flex-1 space-y-1 px-2 pb-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? 'bg-gray-100 text-gray-900' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                      'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
                        'mr-3 flex-shrink-0 h-6 w-6'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
            <button
              type="button"
              className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex flex-1 justify-between px-4">
              <div className="flex flex-1">
                <form className="flex w-full md:ml-0" action="#" method="GET">
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                      <MagnifyingGlassIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <input
                      id="search-field"
                      className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder-gray-500 focus:border-transparent focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
                      placeholder="Search"
                      type="search"
                      name="search"
                    />
                  </div>
                </form>
              </div>
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                            >
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <main className="flex-1">
            <div className="py-6">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
              </div>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                {/* Replace with your content */}
                {children}
                {/* /End replace */}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
