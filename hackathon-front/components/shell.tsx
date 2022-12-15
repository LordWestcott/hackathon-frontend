import { Fragment, useState } from 'react'
import { Dialog, Menu, Transition } from '@headlessui/react'
import {
  Bars3BottomLeftIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import { FcHome, FcDonate, FcTimeline, FcRating, FcBusinessman } from "react-icons/fc";
import { useRouter } from 'next/router'

//sidebar navigation options
const navigation = [
  { name: 'Dashboard', href: 'dashboard', icon: FcHome },
  { name: 'Leaderboard', href: 'leaderboard', icon: FcRating },
  { name: 'Transactions', href: 'transactions', icon: FcTimeline },
  { name: 'Charities', href: 'charities', icon: FcDonate },
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

export default function Shell({ title, children }: any) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const router = useRouter();
  console.log(router.route);
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
                  <svg className="fill-dono-green h-8 w-auto" width="97" height="31" viewBox="0 0 97 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.12 0.399994C19.8133 0.399994 20.3866 0.62666 20.84 1.07999C21.2933 1.53333 21.52 2.11999 21.52 2.83999V27.56C21.52 28.2533 21.2933 28.84 20.84 29.32C20.3866 29.7733 19.8133 30 19.12 30C18.4266 30 17.8533 29.7733 17.4 29.32C16.9466 28.84 16.72 28.2533 16.72 27.56V25.6L17.6 25.96C17.6 26.3067 17.4133 26.7333 17.04 27.24C16.6666 27.72 16.16 28.2 15.52 28.68C14.88 29.16 14.12 29.5733 13.24 29.92C12.3866 30.24 11.4533 30.4 10.44 30.4C8.59998 30.4 6.93331 29.9333 5.43998 29C3.94664 28.04 2.75998 26.7333 1.87998 25.08C1.02664 23.4 0.599976 21.48 0.599976 19.32C0.599976 17.1333 1.02664 15.2133 1.87998 13.56C2.75998 11.88 3.93331 10.5733 5.39998 9.63999C6.86664 8.67999 8.49331 8.19999 10.28 8.19999C11.4266 8.19999 12.48 8.37333 13.44 8.71999C14.4 9.06666 15.2266 9.50666 15.92 10.04C16.64 10.5733 17.1866 11.12 17.56 11.68C17.96 12.2133 18.16 12.6667 18.16 13.04L16.72 13.56V2.83999C16.72 2.14666 16.9466 1.57333 17.4 1.11999C17.8533 0.639993 18.4266 0.399994 19.12 0.399994ZM11.04 26C12.2133 26 13.24 25.7067 14.12 25.12C15 24.5333 15.68 23.7333 16.16 22.72C16.6666 21.7067 16.92 20.5733 16.92 19.32C16.92 18.04 16.6666 16.8933 16.16 15.88C15.68 14.8667 15 14.0667 14.12 13.48C13.24 12.8933 12.2133 12.6 11.04 12.6C9.89331 12.6 8.87998 12.8933 7.99998 13.48C7.11998 14.0667 6.42664 14.8667 5.91998 15.88C5.43998 16.8933 5.19998 18.04 5.19998 19.32C5.19998 20.5733 5.43998 21.7067 5.91998 22.72C6.42664 23.7333 7.11998 24.5333 7.99998 25.12C8.87998 25.7067 9.89331 26 11.04 26Z" fill="inherit"/>
                    <path d="M47.4772 19.32C47.4772 21.5067 46.9838 23.44 45.9972 25.12C45.0372 26.7733 43.7305 28.0667 42.0772 29C40.4505 29.9333 38.6238 30.4 36.5972 30.4C34.5705 30.4 32.7305 29.9333 31.0772 29C29.4505 28.0667 28.1438 26.7733 27.1572 25.12C26.1972 23.44 25.7172 21.5067 25.7172 19.32C25.7172 17.1333 26.1972 15.2133 27.1572 13.56C28.1438 11.88 29.4505 10.5733 31.0772 9.63999C32.7305 8.67999 34.5705 8.19999 36.5972 8.19999C38.6238 8.19999 40.4505 8.67999 42.0772 9.63999C43.7305 10.5733 45.0372 11.88 45.9972 13.56C46.9838 15.2133 47.4772 17.1333 47.4772 19.32ZM42.6772 19.32C42.6772 17.96 42.3972 16.7867 41.8372 15.8C41.3038 14.7867 40.5705 14 39.6372 13.44C38.7305 12.88 37.7172 12.6 36.5972 12.6C35.4772 12.6 34.4505 12.88 33.5172 13.44C32.6105 14 31.8772 14.7867 31.3172 15.8C30.7838 16.7867 30.5172 17.96 30.5172 19.32C30.5172 20.6533 30.7838 21.8267 31.3172 22.84C31.8772 23.8267 32.6105 24.6 33.5172 25.16C34.4505 25.72 35.4772 26 36.5972 26C37.7172 26 38.7305 25.72 39.6372 25.16C40.5705 24.6 41.3038 23.8267 41.8372 22.84C42.3972 21.8267 42.6772 20.6533 42.6772 19.32Z" fill="inherit"/>
                    <path d="M63.1181 8.19999C65.0914 8.19999 66.5848 8.61333 67.5981 9.43999C68.6381 10.2667 69.3448 11.3733 69.7181 12.76C70.1181 14.12 70.3181 15.64 70.3181 17.32V27.56C70.3181 28.2533 70.0914 28.84 69.6381 29.32C69.1848 29.7733 68.6114 30 67.9181 30C67.2248 30 66.6514 29.7733 66.1981 29.32C65.7448 28.84 65.5181 28.2533 65.5181 27.56V17.32C65.5181 16.44 65.3981 15.6533 65.1581 14.96C64.9448 14.24 64.5448 13.6667 63.9581 13.24C63.3714 12.8133 62.5314 12.6 61.4381 12.6C60.3714 12.6 59.4648 12.8133 58.7181 13.24C57.9981 13.6667 57.4381 14.24 57.0381 14.96C56.6648 15.6533 56.4781 16.44 56.4781 17.32V27.56C56.4781 28.2533 56.2514 28.84 55.7981 29.32C55.3448 29.7733 54.7714 30 54.0781 30C53.3848 30 52.8114 29.7733 52.3581 29.32C51.9048 28.84 51.6781 28.2533 51.6781 27.56V11.04C51.6781 10.3467 51.9048 9.77333 52.3581 9.31999C52.8114 8.83999 53.3848 8.59999 54.0781 8.59999C54.7714 8.59999 55.3448 8.83999 55.7981 9.31999C56.2514 9.77333 56.4781 10.3467 56.4781 11.04V12.76L55.8781 12.64C56.1181 12.1867 56.4648 11.7067 56.9181 11.2C57.3714 10.6667 57.9048 10.1733 58.5181 9.71999C59.1314 9.26666 59.8248 8.90666 60.5981 8.63999C61.3714 8.34666 62.2114 8.19999 63.1181 8.19999Z" fill="inherit"/>
                    <path d="M96.2662 19.32C96.2662 21.5067 95.7729 23.44 94.7862 25.12C93.8262 26.7733 92.5196 28.0667 90.8662 29C89.2396 29.9333 87.4129 30.4 85.3862 30.4C83.3596 30.4 81.5196 29.9333 79.8662 29C78.2396 28.0667 76.9329 26.7733 75.9462 25.12C74.9862 23.44 74.5062 21.5067 74.5062 19.32C74.5062 17.1333 74.9862 15.2133 75.9462 13.56C76.9329 11.88 78.2396 10.5733 79.8662 9.63999C81.5196 8.67999 83.3596 8.19999 85.3862 8.19999C87.4129 8.19999 89.2396 8.67999 90.8662 9.63999C92.5196 10.5733 93.8262 11.88 94.7862 13.56C95.7729 15.2133 96.2662 17.1333 96.2662 19.32ZM91.4662 19.32C91.4662 17.96 91.1862 16.7867 90.6262 15.8C90.0929 14.7867 89.3596 14 88.4262 13.44C87.5196 12.88 86.5062 12.6 85.3862 12.6C84.2662 12.6 83.2396 12.88 82.3062 13.44C81.3996 14 80.6662 14.7867 80.1062 15.8C79.5729 16.7867 79.3062 17.96 79.3062 19.32C79.3062 20.6533 79.5729 21.8267 80.1062 22.84C80.6662 23.8267 81.3996 24.6 82.3062 25.16C83.2396 25.72 84.2662 26 85.3862 26C86.5062 26 87.5196 25.72 88.4262 25.16C89.3596 24.6 90.0929 23.8267 90.6262 22.84C91.1862 21.8267 91.4662 20.6533 91.4662 19.32Z" fill="inherit"/>
                  </svg>
                  </div>
                  <div className="mt-5 h-0 flex-1 overflow-y-auto">
                    <nav className="space-y-1 px-2">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            ("/" + item.href) === router.route
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                          )}
                        >
                          <item.icon
                            className={classNames(
                              ("/" + item.href) === router.route ? 'text-gray-500' : 'text-gray-400 group-hover:text-gray-500',
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
          <div className="flex flex-grow flex-col overflow-y-auto bg-white">
            <div className="flex flex-shrink-0 items-center px-4 h-20 ">
            <svg className="fill-dono-green h-8 w-auto" width="97" height="31" viewBox="0 0 97 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.12 0.399994C19.8133 0.399994 20.3866 0.62666 20.84 1.07999C21.2933 1.53333 21.52 2.11999 21.52 2.83999V27.56C21.52 28.2533 21.2933 28.84 20.84 29.32C20.3866 29.7733 19.8133 30 19.12 30C18.4266 30 17.8533 29.7733 17.4 29.32C16.9466 28.84 16.72 28.2533 16.72 27.56V25.6L17.6 25.96C17.6 26.3067 17.4133 26.7333 17.04 27.24C16.6666 27.72 16.16 28.2 15.52 28.68C14.88 29.16 14.12 29.5733 13.24 29.92C12.3866 30.24 11.4533 30.4 10.44 30.4C8.59998 30.4 6.93331 29.9333 5.43998 29C3.94664 28.04 2.75998 26.7333 1.87998 25.08C1.02664 23.4 0.599976 21.48 0.599976 19.32C0.599976 17.1333 1.02664 15.2133 1.87998 13.56C2.75998 11.88 3.93331 10.5733 5.39998 9.63999C6.86664 8.67999 8.49331 8.19999 10.28 8.19999C11.4266 8.19999 12.48 8.37333 13.44 8.71999C14.4 9.06666 15.2266 9.50666 15.92 10.04C16.64 10.5733 17.1866 11.12 17.56 11.68C17.96 12.2133 18.16 12.6667 18.16 13.04L16.72 13.56V2.83999C16.72 2.14666 16.9466 1.57333 17.4 1.11999C17.8533 0.639993 18.4266 0.399994 19.12 0.399994ZM11.04 26C12.2133 26 13.24 25.7067 14.12 25.12C15 24.5333 15.68 23.7333 16.16 22.72C16.6666 21.7067 16.92 20.5733 16.92 19.32C16.92 18.04 16.6666 16.8933 16.16 15.88C15.68 14.8667 15 14.0667 14.12 13.48C13.24 12.8933 12.2133 12.6 11.04 12.6C9.89331 12.6 8.87998 12.8933 7.99998 13.48C7.11998 14.0667 6.42664 14.8667 5.91998 15.88C5.43998 16.8933 5.19998 18.04 5.19998 19.32C5.19998 20.5733 5.43998 21.7067 5.91998 22.72C6.42664 23.7333 7.11998 24.5333 7.99998 25.12C8.87998 25.7067 9.89331 26 11.04 26Z" fill="inherit"/>
                <path d="M47.4772 19.32C47.4772 21.5067 46.9838 23.44 45.9972 25.12C45.0372 26.7733 43.7305 28.0667 42.0772 29C40.4505 29.9333 38.6238 30.4 36.5972 30.4C34.5705 30.4 32.7305 29.9333 31.0772 29C29.4505 28.0667 28.1438 26.7733 27.1572 25.12C26.1972 23.44 25.7172 21.5067 25.7172 19.32C25.7172 17.1333 26.1972 15.2133 27.1572 13.56C28.1438 11.88 29.4505 10.5733 31.0772 9.63999C32.7305 8.67999 34.5705 8.19999 36.5972 8.19999C38.6238 8.19999 40.4505 8.67999 42.0772 9.63999C43.7305 10.5733 45.0372 11.88 45.9972 13.56C46.9838 15.2133 47.4772 17.1333 47.4772 19.32ZM42.6772 19.32C42.6772 17.96 42.3972 16.7867 41.8372 15.8C41.3038 14.7867 40.5705 14 39.6372 13.44C38.7305 12.88 37.7172 12.6 36.5972 12.6C35.4772 12.6 34.4505 12.88 33.5172 13.44C32.6105 14 31.8772 14.7867 31.3172 15.8C30.7838 16.7867 30.5172 17.96 30.5172 19.32C30.5172 20.6533 30.7838 21.8267 31.3172 22.84C31.8772 23.8267 32.6105 24.6 33.5172 25.16C34.4505 25.72 35.4772 26 36.5972 26C37.7172 26 38.7305 25.72 39.6372 25.16C40.5705 24.6 41.3038 23.8267 41.8372 22.84C42.3972 21.8267 42.6772 20.6533 42.6772 19.32Z" fill="inherit"/>
                <path d="M63.1181 8.19999C65.0914 8.19999 66.5848 8.61333 67.5981 9.43999C68.6381 10.2667 69.3448 11.3733 69.7181 12.76C70.1181 14.12 70.3181 15.64 70.3181 17.32V27.56C70.3181 28.2533 70.0914 28.84 69.6381 29.32C69.1848 29.7733 68.6114 30 67.9181 30C67.2248 30 66.6514 29.7733 66.1981 29.32C65.7448 28.84 65.5181 28.2533 65.5181 27.56V17.32C65.5181 16.44 65.3981 15.6533 65.1581 14.96C64.9448 14.24 64.5448 13.6667 63.9581 13.24C63.3714 12.8133 62.5314 12.6 61.4381 12.6C60.3714 12.6 59.4648 12.8133 58.7181 13.24C57.9981 13.6667 57.4381 14.24 57.0381 14.96C56.6648 15.6533 56.4781 16.44 56.4781 17.32V27.56C56.4781 28.2533 56.2514 28.84 55.7981 29.32C55.3448 29.7733 54.7714 30 54.0781 30C53.3848 30 52.8114 29.7733 52.3581 29.32C51.9048 28.84 51.6781 28.2533 51.6781 27.56V11.04C51.6781 10.3467 51.9048 9.77333 52.3581 9.31999C52.8114 8.83999 53.3848 8.59999 54.0781 8.59999C54.7714 8.59999 55.3448 8.83999 55.7981 9.31999C56.2514 9.77333 56.4781 10.3467 56.4781 11.04V12.76L55.8781 12.64C56.1181 12.1867 56.4648 11.7067 56.9181 11.2C57.3714 10.6667 57.9048 10.1733 58.5181 9.71999C59.1314 9.26666 59.8248 8.90666 60.5981 8.63999C61.3714 8.34666 62.2114 8.19999 63.1181 8.19999Z" fill="inherit"/>
                <path d="M96.2662 19.32C96.2662 21.5067 95.7729 23.44 94.7862 25.12C93.8262 26.7733 92.5196 28.0667 90.8662 29C89.2396 29.9333 87.4129 30.4 85.3862 30.4C83.3596 30.4 81.5196 29.9333 79.8662 29C78.2396 28.0667 76.9329 26.7733 75.9462 25.12C74.9862 23.44 74.5062 21.5067 74.5062 19.32C74.5062 17.1333 74.9862 15.2133 75.9462 13.56C76.9329 11.88 78.2396 10.5733 79.8662 9.63999C81.5196 8.67999 83.3596 8.19999 85.3862 8.19999C87.4129 8.19999 89.2396 8.67999 90.8662 9.63999C92.5196 10.5733 93.8262 11.88 94.7862 13.56C95.7729 15.2133 96.2662 17.1333 96.2662 19.32ZM91.4662 19.32C91.4662 17.96 91.1862 16.7867 90.6262 15.8C90.0929 14.7867 89.3596 14 88.4262 13.44C87.5196 12.88 86.5062 12.6 85.3862 12.6C84.2662 12.6 83.2396 12.88 82.3062 13.44C81.3996 14 80.6662 14.7867 80.1062 15.8C79.5729 16.7867 79.3062 17.96 79.3062 19.32C79.3062 20.6533 79.5729 21.8267 80.1062 22.84C80.6662 23.8267 81.3996 24.6 82.3062 25.16C83.2396 25.72 84.2662 26 85.3862 26C86.5062 26 87.5196 25.72 88.4262 25.16C89.3596 24.6 90.0929 23.8267 90.6262 22.84C91.1862 21.8267 91.4662 20.6533 91.4662 19.32Z" fill="inherit"/>
            </svg>
            </div>
            <div className="mt-5 flex flex-grow flex-col">
              <nav className="flex-1 space-y-4 px-4 pb-4">
                {navigation.map((item) => (
                  <span
                    key={item.name}
                    onClick={() => {
                      router.push(item.href.toLocaleLowerCase())
                    }}
                    className={classNames(
                      ("/" + item.href) === router.route ? 'bg-[#E4FEF7] text-[#007F5F] border-dono-green' : 'text-gray-600 hover:bg-gray-50 hover:border-gray-50 hover:text-gray-900',
                      'group flex items-center px-2 py-4 text-md font-bold rounded-md tracking-wide cursor-pointer'
                    )}
                  >
                    <item.icon
                      className={classNames(
                        'mr-3 flex-shrink-0 h-8 w-8'
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </span>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col md:pl-64">
          <div className="sticky top-0 z-10 flex h-20 flex-shrink-0 bg-white">
            <button
              type="button"
              className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3BottomLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="flex flex-1 justify-end px-4">
              <div className="ml-4 flex items-center md:ml-6">
                <button
                  type="button"
                  className="rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">View notifications</span>
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:dono-orange focus:ring-offset-2">
                      <span className="sr-only">Open user menu</span>
                      <div className='h-10 w-10'>
                        <FcBusinessman className='h-full w-full'/>
                      </div>
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
                            <span
                              onClick={() => {
                                router.push(item.href.toLocaleLowerCase())
                              }}
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700 cursor-pointer'
                              )}
                            >
                              {item.name}
                            </span>
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
                <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
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
