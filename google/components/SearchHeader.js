import Image from "next/image"
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/outline'

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
        <header>
            <Image
                src="https://www.google.ca/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                width={92} height={30}
                className="cursor-pointer"
                onClick={() => router.push("/")} />

            <form className="flex border border-gray-200 rounded-full shadow-lg max-w-3xl items-center 
            px-6 py-3 ml-10 mr-5">
                <input ref={searchReference} type="text" className="flex-grow w-full focus:outline-none" />

                <XIcon className="h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-110
                sm:mr-3" onClick={() => searchReference.current.value = ""} />
                <MicrophoneIcon className="h-5 mr-3 hidden sm:inline-flex text-gray-600 border-l-2 pl-4
                border-gray-300" />
                <SearchIcon className="h-5 text-gray-600 hidden sm:inline-flex" />
                <button hidden type="submit" onClick={search}>Search</button>

            </form>
        </header>
    )
}

export default SearchHeader