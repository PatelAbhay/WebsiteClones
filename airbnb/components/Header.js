import Image from 'next/image'

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
            <div>

            </div>

            {/* Options */}
            <div>

            </div>
        </header>
    )
}

export default Header
