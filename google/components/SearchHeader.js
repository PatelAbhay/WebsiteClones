import Image from "next/image"
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { MicrophoneIcon, SearchIcon, XIcon, ViewGridIcon, CogIcon } from '@heroicons/react/outline'
import Profile from '../components/Profile'
import SearchHeaderOptions from '../components/SearchHeaderOptions'

function SearchHeader() {

    const router = useRouter();
    const searchReference = useRef(null);

    const search = event => {
        event.preventDefault();

        const term = searchReference.current.value;

        if (!term) return;

        router.push(`/search?term=${term}`);
    }

    return (
        <header className="sticky top-0 bg-white">
            <div className="flex w-full p-6 items-center">
                <Image
                    src="https://www.google.ca/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                    width={92} height={30}
                    className="cursor-pointer"
                    onClick={() => router.push("/")} />

                <form className="flex flex-grow border border-gray-200 rounded-full shadow-md hover:shadow-lg focus-within:shadow-lg
                 max-w-3xl items-center px-6 py-2 ml-10 mr-5">
                    <input ref={searchReference} type="text" className="flex-grow w-full focus:outline-none" />

                    <XIcon className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-110
                    sm:mr-3" onClick={() => searchReference.current.value = ""} />
                    <MicrophoneIcon className="h-5 mr-3 hidden sm:inline-flex text-gray-600 border-l-2 pl-4
                    border-gray-300" />
                    <SearchIcon className="h-5 text-gray-600 hidden sm:inline-flex" />
                    <button hidden type="submit" onClick={search}>Search</button>

                </form>

                <div className="flex space-x-4 ml-auto">
                    <CogIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

                    <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

                    <Profile url='https://i.pinimg.com/564x/c8/ba/85/c8ba858ac51835cc0bfcd0fe871efb04.jpg' />
                </div>

            </div>

            <SearchHeaderOptions />
        </header>
    )
}

export default SearchHeader