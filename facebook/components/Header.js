import Image from 'next/image'
import { BellIcon, ChatIcon, ChevronDownIcon, FlagIcon, HomeIcon, PlayIcon, SearchIcon, ShoppingCartIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/outline'
import CenterIcon from './CenterIcon'

function Header() {
    return (
        <header className="sticky top-o z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            {/* Search */}
            <div className="flex items-center">
                <Image src="/facebook-logo.svg"
                    width={40} height={40}
                />

                <div className="flex ml-2 items-center rounded-full bg-gray-100 px-4 py-2">
                    <SearchIcon className="h-5 text-gray-500" />
                    <input placeholder="Search" type="text" className="hidden md:inline-flex flex ml-2 items-center bg-transparent outline-none placeholder-gray-500
                    flex-shrink"></input>
                </div>
            </div>

            {/* Pages Icons */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <CenterIcon Icon={HomeIcon} active />
                    <CenterIcon Icon={FlagIcon} />
                    <CenterIcon Icon={PlayIcon} />
                    <CenterIcon Icon={ShoppingCartIcon} />
                    <CenterIcon Icon={UserGroupIcon} />
                </div>
            </div>

            {/* Profile Icons */}
            <div className="flex items-center sm:space-x-2 justify-end">
                {/* Profile Pic */}

                <p className="font-semibold pr-3 whitespace-nowrap">User's Name</p>
                <ViewGridIcon className="icon" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />
            </div>
        </header>
    )
}

export default Header;