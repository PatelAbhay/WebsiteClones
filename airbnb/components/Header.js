import Image from 'next/image'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
            {/* Logo */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image src="/Airbnb_Logo_with_Text.svg"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left" />
            </div>

            {/* Search */}
            <div className="flex bg-gray-100 md:bg-white items-center md:border-2 rounded-full py-2 md:shadow-sm">
                <input className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
                    type="text" placeholder="Start your search" />
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer
                md:mx-2" />
            </div>

            {/* Options */}
            <div className="flex space-x-4">
                <p>Become a Host</p>
                <GlobeAltIcon className="h-6" />
            </div>
        </header>
    )
}

export default Header
