import Image from 'next/image'
import { FlagIcon, HomeIcon, PlayIcon, SearchIcon, ShoppingCartIcon, UserGroupIcon } from '@heroicons/react/outline'
import CenterIcon from './CenterIcon'

function Header() {
    return (
        <header>
            {/* Search */}
            <div className="flex items-center">
                <Image src="/facebook-logo.svg"
                    width={40} height={40}
                />

                <div className="flex ml-2 items-center rounded-full bg-gray-100 px-4 py-2">
                    <SearchIcon className="h-5 text-gray-500" />
                    <input placeholder="Search" type="text" className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-500"></input>
                </div>
            </div>

            {/* Pages Icons */}
            <div className="flex items-center flex-grow">
                <div>
                    <CenterIcon Icon={HomeIcon} />
                    <CenterIcon Icon={FlagIcon} />
                    <CenterIcon Icon={PlayIcon} />
                    <CenterIcon Icon={ShoppingCartIcon} />
                    <CenterIcon Icon={UserGroupIcon} />
                </div>
            </div>

            {/* Profile Icons */}
            <div>

            </div>
        </header>
    )
}

export default Header;