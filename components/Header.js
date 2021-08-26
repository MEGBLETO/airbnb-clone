import React from 'react'
import Image from 'next/image'
import {GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon} from '@heroicons/react/outline'


const Header = () => {
    return (
        <header className="sticky bg-red-30  top-0 z-50 grid grid-cols-3  px-5 bg-white shadow-md p-3 text-center items-center  md:px-10">
            {/* left side */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image
                    src="https://links.papareact.com/qd3"
                    layout="fill" 
                    objectFit="contain" 
                    objectPosition="left"
                />
            </div>

            {/* Middle */}
            <div className="flex hidden sm:inline-flex relative text-center items-center border-2 rounded-full px-2 lg:w-4/6">
                <input className="p-2 bg-transparent  outline-none  flex-grow font-bold placeholder-gray-400" type="text" placeholder="Start Your Search" />
                <SearchIcon className="h-8 right-2 bg-red-400 text-white p-2 rounded-full items-center cursor-pointer hidden lg:inline-flex"/>
            </div>

            {/* Right */}
            <div className="flex justify-end p-4 text-center items-center space-x-2">
              <p className="cursor-pointer hidden md:inline p-3 hover:bg-gray-100 rounded-full">Become a Host</p>
              <GlobeAltIcon className="h-7  cursor-pointer hover:bg-gray-100 rounded-full"/>
              <div className="flex justify-between text-center items-center p-2 border rounded-full hover:shadow-md cursor-pointer">
                 <MenuIcon className="h-6 px-2 "/> 
                 <UserCircleIcon className="h-6"/>
              </div>
            </div>
        </header>
    )
}

export default Header
